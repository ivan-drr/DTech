const express = require('express');
const bodyParser = require('body-parser');
const { spawn } = require('child_process');
const mongo = require('mongoose');

const db = mongo.connect('mongodb://localhost:27017/dtech?' + 'replicaSet=rs', (err, response) => {
  if (err) console.log(err);
  else console.log('Connected to ' + response.name);
});

const app = express();
app.use(bodyParser());
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({extended: true}));

app.use((req, res, next) => {
  res.set('Access-control-Allow-Origin', '*');
  res.set('Access-control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.set('Access-control-Allow-Headers', 'Content-Type');
  res.set('Access-control-Allow-Credentials', true);
  next();
});

const Schema = mongo.Schema;
const roomSchema = new Schema({
      name: { type: String },
      state: { type: Boolean },
      brightness: { type: Number },
      sensor: {type: Boolean},
      blind: {
        down: { type: Boolean },
        running: {type: Boolean}
      }
    }, { versionKey: false });

const transitareaSchema = new Schema({
      name: { type: String },
      state: { type: Boolean },
      brightness: { type: Number },
      sensor: {type: Boolean}
    }, { versionKey: false });

const remotedeviceSchema = new Schema({
      name: { type: String },
      code: { type: String },
      request: {type: Boolean}
    }, { versionKey: false });

const room = mongo.model('room', roomSchema, 'room');
const transitarea = mongo.model('transitarea', transitareaSchema, 'transitarea');
const remotedevice = mongo.model('remotedevice', remotedeviceSchema, 'remotedevice');


app.put('/mongo/changeRoomState', (req, res) => {
  if (!req.body) {
    res.send({"ok": false, "error": 'No request body found'});
    return false;
  } 

  let session = null;
  let doc = false;
  room.findOne({"name": req.body.name}, (err, document) => {
    if (err) res.send({"ok": false, "error": 'Error finding room ' + req.body.name + ': ' + err});
    else doc = document;
  })
    .then(() => mongo.startSession())
    .then(_session => {
      if (!doc) return false;

      session = _session;
      console.log('start transaction');
      session.startTransaction();
      room.updateOne({"name": req.body.name}, {"$set": {"state": !doc.state}}, err => {
        if (err) {
          res.send({"ok": false, "error": 'Error updating state of ' + req.body.name + ': ' + err});
          return false;
        } 
  
        const lightChanged = spawn('python', ['/home/pi/dtech/src/app/@core/rpi/test.py', req.body.name]);
        lightChanged.stdout.on('data', data => { 
          const pinOperation = data.toString().replace(/\s/g,'') === 'True';
          if (pinOperation) res.send({"ok": true});
          else {
            res.send({"ok": false, "error": 'Error(Hardware) turning light on of room ' + req.body.name});
            return false;
          } 
        });
      }).session(session)
      .then(update => {
        console.log('commit or abort transaction');
        if(!update) session.abortTransaction();
        else session.commitTransaction();
      }).then(() => {
        console.log('end transaction');
        session.endSession();
      });
    })
    .catch(err => {
      res.send({"ok": false, "error": 'Error on mongodb transaction updating state of ' + req.body.name + ': ' + err});
    })
    
});

app.listen(8080), () => {
  console.log('DTech listening on port 8080');
}

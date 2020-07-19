const express = require('express');
const bodyParser = require('body-parser');
const { spawn } = require('child_process');
const mongo = require('mongoose');
const SCRIPTS_PATH = '/home/pi/dtech/src/app/@core/rpi/';

const db = mongo.connect("mongodb://localhost:27017/dtech", (err, response) => {
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

  room.findOne({"name": req.body.name}, (err, doc) => {
    if (err) {
      res.send({"ok": false, "error": 'Error finding room ' + req.body.name + ': ' + err});
      return false;
    } 
    
    room.updateOne({"name": req.body.name}, {"$set": {"state": !doc.state}}, err => {
      if (err) {
        res.send({"ok": false, "error": 'Error updating state of ' + req.body.name + ': ' + err});
        return false
      } 
      
      const lightChanged = spawn('python', [SCRIPTS_PATH + 'change-room-state.py', req.body.name]);
      lightChanged.stdout.on('data', data => { 
        const hardwareWorks = data.toString().replace(/\s/g,'') === 'True';
        if (hardwareWorks) {
          res.send({"ok": true});
          return true;
        } 

        room.updateOne({"name": req.body.name}, {"$set": {"state": !doc.state}}, err => {
          if (err) {
            res.send({"ok": false, "error": 'Error re-updating state of ' + req.body.name 
              + '(Please re-run this request to fix this database value): ' + err});
            return false;
          }
        });
        if (!hardwareWorks) {
          res.send({"ok": false, "error": "Hardware error: Light of " + req.body.name + "couldn't change state"});
          return false
        }
        res.send({"ok": false, "error": "Error on script: " + SCRIPTS_PATH + "change-room-state.py"});
        return true;
      });
    });
  });
});

app.listen(8080), () => {
  console.log('DTech listening on port 8080');
}

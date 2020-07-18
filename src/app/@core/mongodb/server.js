const express = require('express');
const bodyParser = require('body-parser');
const { spawn } = require('child_process');
const mongo = require('mongoose');

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
  if (!req.body) res.send({"ok": false, "error": 'No request body found'});

  const doc = room.findOne({"name": req.body.name}, err => {
    if (err) res.send({"ok": false, "error": 'Error finding room ' + req.body.name + ': ' + err});
  });

  room.update({"name": req.body.name}, {$set: {"state": !doc.state}}, err => {
    if (err) res.send({"ok": false, "error": 'Error updating state of ' + req.body.name + ': ' + err});
    else {
      spawn('python', ['/home/pi/dtech/src/app/@core/rpi/test.py']);
      res.send({"ok": true});
    }
  });
});

app.listen(8080), () => {
  console.log('DTech listening on port 8080');
}

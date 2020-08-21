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
  id: { type: String },
  name: { type: String },
}, { versionKey: false });

const lightSchema = new Schema({
  id: { type: String },
  name: { type: String },
  room: { type: String },
  state: { type: Boolean },
  brightness: { type: Number },
  hexColor: { type: String },
  pirSensor: {
    active: { type: Boolean },
    detect: {type: Boolean},
    transitarea: { type: Boolean }
  },
  ldrSensor: { type: Number }
}, { versionKey: false });

const blindSchema = new Schema({
  id: { type: String },
  name: { type: String },
  room: { type: String },
  opened: { type: Boolean },
  closed: { type: Boolean },
  running: {type: Boolean},
  rainSensor: { type: Boolean }
}, { versionKey: false });

const tempSensorSchema = new Schema({
  id: { type: String },
  room: { type: String },
  device: { type: String },
  temperature: { type: String }
}, { versionKey: false });

const remotedeviceSchema = new Schema({
  id: { type: String },
  name: { type: String },
  room: { type: String },
  buttons: { type: Array }
}, { versionKey: false });

const room = mongo.model('room', roomSchema, 'room');
const light = mongo.model('light', lightSchema, 'light');
const blind = mongo.model('blind', blindSchema, 'blind');
const tempSensor = mongo.model('tempSensor', tempSensorSchema, 'tempSensor');
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
    } else if (doc === null) {
      res.send({"ok": false, "error": "Room " + req.body.name + " don't exist"});
      return false;
    }

    room.updateOne({"name": req.body.name}, {"$set": {"state": !doc.state}}, (err, doc) => {
      if (err) {
        res.send({"ok": false, "error": 'Error updating state of ' + req.body.name + ': ' + err});
        return false
      } else if (doc === null) {
        res.send({"ok": false, "error": "Room " + req.body.name + " don't exist"});
        return false;
      }

      room.updateOne({"name": req.body.name}, {"$set": {"state": !doc.state}}, (err, doc) => {
        if (err) {
          res.send({"ok": false, "error": 'Error re-updating state of ' + req.body.name 
            + '(Please re-run this request to fix this database value): ' + err});
          return false;
        } else if (doc === null) {
          res.send({"ok": false, "error": "Room " + req.body.name + " don't exist"});
          return false;
        }
      });
      
      res.send({"ok": false, "error": "Hardware error: Light of " + req.body.name + "couldn't change state"});
      return false;
    });
  });  
});

app.listen(8080), () => {
  console.log('DTech listening on port 8080');
}

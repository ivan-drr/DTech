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

app.use((res, next) => {
  res.set('Access-control-Allow-Origin', 'http://localhost:4200');
  res.set('Access-control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.set('Access-control-Allow-Headers', 'X-Requested-With,content-type');
  res.set('Access-control-Allow-Credentials', true);
  next();
});

const Schema = mongo.Schema;
const allSchemas = [
  {
    name: 'room',
    schema: new Schema({
      name: { type: String },
      state: { type: Boolean },
      brightness: { type: Number },
      sensor: {type: Boolean},
      blind: {
        down: { type: Boolean },
        running: {type: Boolean}
      }
    }, { versionKey: false })
  },
  {
    name: 'transitarea',
    schema: new Schema({
      name: { type: String },
      state: { type: Boolean },
      brightness: { type: Number },
      sensor: {type: Boolean}
    }, { versionKey: false })
  },
  {
    name: 'remotedevice',
    schema: new Schema({
      name: { type: String },
      code: { type: String },
      request: {type: Boolean}
    }, { versionKey: false })
  }
];

allSchemas.forEach(s => {
  mongo.model(s.name, s.schema, s.name);
});

app.put('/mongo/changeRoomState', (res, req) => {
  console.log('server.js');
  if (!req.body) return;

  const room = db.room.findOne({name: req.body}, err => {
    if (err) res.send({ok: false, error: 'Error finding room ' + req.body + ': ' + err});
  });

  db.room.update({name: req.body}, {$set: {state: !room.state}}, err => {
    if (err) res.send({ok: false, error: 'Error updating state of ' + req.body + ': ' + err});
    else {
      spawn('python', ['../rpi/test.py']);
      res.send({ok: true});
    }
  });
});

app.listen(8080), () => {
  console.log('DTech listening on port 8080');
}

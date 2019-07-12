'use strict';

const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const express = require('express');
const db = require(__dirname+'/connection.js');
const Usuario = db.import(__dirname+'/models.js');


const app = express();

app.use(bodyParser.json());

app.post('/', async function(req,res) {
  const usuario = req.body;
  usuario.criadoEm = Date.now();
  try {
    const usuarioCriado = await Usuario.create(usuario);
    res.status(201).json({usuarioCriado});
  } catch(err) {
    res.status(400).json({error: err.message});
  }

  db.close();
})

module.exports.handler = serverless(app);



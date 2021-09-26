/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const http = require('http');
const socketIo = require('socket.io');

const routes = require('./routes');
const ioMiddleware = require('./middlewares/ioMiddleware');

mongoose.connect('mongodb://localhost:27017/ezorders');

const app = express();
const server = http.Server(app);
const io = socketIo(server);

app.use(ioMiddleware(io));
app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3001, () => console.log('🔥 Server started at localhost:3001'));

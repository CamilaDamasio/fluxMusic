const express = require('express');
const cors = require('cors');
const news = require('./Routes/NewsRouter/router');
const artists = require('../src/Routes/artistsRouter/router');
const albums = require('../src/Routes/albumsRouter/router');

const app = express();

app.use(express.json());

app.use(cors());

app.use('/', news);
app.use('/artists', artists);
app.use('/albums', albums);

module.exports = app;

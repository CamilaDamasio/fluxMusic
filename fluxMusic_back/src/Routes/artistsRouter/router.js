const express = require('express');
const axios = require('axios');
const xml2js = require('xml2js');

const router = express.Router();

  router.get("/", async (req, res) => {
    const result = await axios.get('http://api.music-story.com/en/genre/1/artists').then(res => res.data);
    
    xml2js.parseStringPromise(result, { mergeAttrs: true })
    .then(response => {
      const json = JSON.stringify(response, null, 4);
      return res.send(json);
    }).catch(err => console.log(err));
  });

module.exports = router;

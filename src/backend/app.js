const express = require('express');
const app = express();
const port = 3000;
const data = require('./shows');

app.get('/rest/shows', (req, res) => res.send(data));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

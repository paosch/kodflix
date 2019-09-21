const express = require('express');
const app = express();
// const port = 3001;
const port = process.env.PORT || 3001;
const getShows = require('./shows');

app.get('/rest/shows', (req, res) => res.send(getShows()));

app.use(express.static(path.join(__dirname, '/Users/paola/Documents/JSpractising/kodflix/build')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '/Users/paola/Documents/JSpractising/kodflix/build', 'index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

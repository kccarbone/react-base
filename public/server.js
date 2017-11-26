const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Setup
app.use('/static', express.static(path.resolve(`${__dirname}/static`)));
app.use('/css', express.static(path.resolve(`${__dirname}/css`)));
app.use('/js', express.static(path.resolve(`${__dirname}/js`)));
app.use('/favicon.ico*', express.static(path.resolve(`${__dirname}/favicon.ico`)));
app.use('/manifest.json*', express.static(path.resolve(`${__dirname}/manifest.json`)));

// Catchall
app.get('*', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/index.html`));
});

// Start the server
app.listen(port);
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon'); // allows express to use icons when sending html... icon that goes into tabs on website. allows creativity.
const logger = require('morgan'); // logger tool. every http requests provides info in our terminal. easier to see ( status code, path etc )

const app = express();

app.use(logger('dev'));
app.use(express.json()); // setting up server to work with json

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// Put API routes here, before the "catch all" route

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});
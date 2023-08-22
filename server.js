const express = require('express');
const path = require('path');
const favicon = require('serve-favicon'); // allows express to use icons when sending html... icon that goes into tabs on website. allows creativity.
const logger = require('morgan'); // logger tool. every http requests provides info in our terminal. easier to see ( status code, path etc )

const app = express();

app.use(logger('dev'));
app.use(express.json());
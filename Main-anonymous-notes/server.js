const express = require('express');
const bodyParser = require('body-parser');
const port = 8000;
const app = express();
const path = require('path');

console.log(path.resolve(__dirname, 'public', 'dist'))
app.use(express.static(path.resolve(__dirname, 'public', 'dist')));
app.use(bodyParser.json());

require('./server/config/mongoose');

require('./server/config/routes')(app);

app.listen(port,() => console.log(`listening on port ${port}..`));
let express = require('express');
let app = express();
let server = require('http').Server(app);
let bodyParser = require('body-parser');
let cors = require('cors');
let path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors()); 

let staticPath = path.join(__dirname, '/dist');
app.use(express.static(staticPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.get('/backend', (req, res) => {
    res.json({apiKey: process.env.APIKEY})
});

let port = 3001;
server.listen(process.env.PORT || port);
console.log('Starting up GMR Angular UI on port' + port);
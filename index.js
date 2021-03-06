const express = require('express');
const app = express();
const bodyParser= require('body-parser')
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log('Example app listening on port: '+ port);
});

//Run app, then load http://localhost:port in a browser to see the output.
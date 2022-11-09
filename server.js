const express = require('express');
const bodyParser = require('body-parser');
var routes =require('./routes')
const app =express();
const port = 3003


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


routes(app);

app.listen(port, () => {
console.log(`Server started on port = `+ port);
});
var express = require('express');


var app = express();
var port = process.env.PORT || 80;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.listen(port, () => {
    console.log("Listening on localhost")
});
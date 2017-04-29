/**
 * Created by IrshaadTechnologies on 4/16/2017.
 */
var express = require('express');

var app = express();

app.use(express.static('public'));

app.listen(3000, function () {
   console.log('Express Server is running on port 3000');
});

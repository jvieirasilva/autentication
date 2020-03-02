var  express = require("express");
var bodyparser = require("body-parser");
var mongoose = require("mongoose");
var cors = require("cors");
var app = express();
var api = require('./routes/api')
var auth = require('./routes/auth')



app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(cors());

//mongoose.connect('mongodb://localhost:27017/auth_test',   { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect('mongodb+srv://jvieirasilva:jv031969@cluster0-sjv12.mongodb.net/test?retryWrites=true&w=majority',   { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api', api);
app.use('/auth', auth);
app.use(function(req, res, next){
    res.status(404).send('Not Found jose');
})

app.listen(3000, () => console.log('Server Started'))


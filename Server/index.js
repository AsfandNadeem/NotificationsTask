require('./config/config');
require('./models/db');

const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

const routesIndex = require('./routes/index.router');
const app = express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(cors());
app.use('/api', routesIndex);

app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
});


app.listen(process.env.PORT, () => console.log(`Server started at Port: ${process.env.PORT}`));
module.exports = app;
require('./config/config');
require('./models/db');

const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

const routesIndex = require('./routes/index.router');
const app = express();
// var fs = require('fs');
// var https = require('https');


// const csurf = require('csurf');
// const cookieParser = require('cookie-parser');

// const csrfMiddleware = csurf({
//     cookie: true
// });

// app.use(cookieParser());
// app.use(csrfMiddleware);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// app.all('*', function(req, res) {
//     res.cookie('XSRF-TOKEN', req.csrfToken())

// });

app.use(cors());
app.use('/api', routesIndex);

app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
});
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

app.listen(process.env.PORT, () => console.log(`Server started at Port: ${process.env.PORT}`));
// https.createServer({
//         key: fs.readFileSync('server.key'),
//         cert: fs.readFileSync('server.cert')
//     }, app)
//     .listen(process.env.PORT, function() {
//         console.log('Example app listening on port 3000! Go to https://localhost:3000/')
//     });
module.exports = app;
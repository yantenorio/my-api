const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");//run somewhere separate from your client

const routes = require('./src/routes/routes');

const app = express();

app.use(cors({origin: true}));

app.use(routes);

app.get('/api', (req, res) => {
    return res.status(200).json({message: 'hey'})
});

exports.app = functions.https.onRequest(app);// exposes your express application so that it can be accessed
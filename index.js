require('dotenv').config()
const express = require('express')
const cors = require("cors")

const app = express();

app.use(cors)

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const mockClaim = {
    isSuccess: true,
    hasSubmittedClaim: true
}

app.get('/', (req, res) => {
    return res.send('ok')
});

app.get('/:orderid', (req, res) => {
    return res.send(JSON.stringify(mockClaim))
});

app.listen(process.env.PORT, () => {
    console.log(`app listening on ${process.env.PORT}`);
})
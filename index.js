require('dotenv').config()
const express = require('express')
const cors = require("cors")

const app = express();

app.use(cors)

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
    res.header('Access-Control-Allow-Origin', "*");
    console.log(`app listening on ${process.env.PORT}`);
})
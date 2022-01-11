require('dotenv').config()
const express = require('express')

const app = express();

const mockClaim = {
    isSuccess: true,
    hasSubmittedClaim: true
}

app.get('/', (req, res) => {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    return res.send('ok')
});

app.get('/:orderid', (req, res) => {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    return res.send(JSON.stringify(mockClaim))
});

app.listen(process.env.PORT, () => {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    console.log(`app listening on ${process.env.PORT}`);
})
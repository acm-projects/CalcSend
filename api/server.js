const express = require('express');
const cors = require('cors');
const router = express.Router();
const request = require('request-promise');
const parseString = require('xml2js').parseString;
const encodeURL = require('encodeurl');
const co = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const format = (a, b, c) =>
    encodeURL(`http://api.wolframalpha.com/v2/query?appid=P7J79U-H8RJQUPL7H&input=roots of ${a}x^2 + ${b}x + ${c}&podstate=Result__Step-by-step+solution&format=plaintext`);

const getAPIData = async (url) => {
    let data = ""
    await request(url, async (error, response, body) => {
        data = await body;
    });
    return data;
}

router.get('/quadratic_formula/:a/:b/:c', cors(co), async (req, res) => {
    let XMLdata = await getAPIData(format(req.params.a,req.params.b,req.params.c));
    let JSONdata = null;
    parseString(XMLdata, function (err, result) {
        JSONdata = result;
    });
    res.json(JSONdata);
});

module.exports = router;

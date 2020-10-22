var express = require('express');
const cors = require('cors');
var router = express.Router();
const request = require('request-promise');
data = [
    {
        id: 1,
        name: "Abe",
        age: 23,
        job: "Chef"
    },
    {
        id: 2,
        name: "Joe",
        age: 31,
        job: "Banker"
    },
    {
        id: 3,
        name: "Charles",
        age: 59,
        job: "Mechanic"
    },
    {
        id: 4,
        param1: "Oddball"
    }
];

data_2 = {
    "items": [
    { "id": 1, "name": "Apples",  "price": "$2" },
    { "id": 2, "name": "Peaches", "price": "$5" }]
}
const co = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

/* GET home page. */
router.get('/test', cors(co), (req, res, next) => res.json(data));

router.get('/test:value.:type', cors(co), (req, res) =>
    res.json());
router.get('/test:id', cors(co), (req, res) =>
    res.json(data.filter(key => key.id === parseInt(req.params.id))));
router.get('/items', cors(co), (req, res) => res.json(data_2));

let result = "";
////////////////////////////////////////////////
// http://api.wolframalpha.com/v2/query?appid=DEMO&input=solve+3x-7%3D11&podstate=Result__Step-by-step+solution&format=plaintext
const format = (a, b, c) => `http://api.wolframalpha.com/v1/result?appid=P7J79U-H8RJQUPL7H&i=roots+of+${a}x2%2B${b}x%2B${c}`;
// const format = (a, b, c) =>
//     `http://api.wolframalpha.com/v2/query?appid=P7J79U-H8RJQUPL7H&input=roots+of+${a}x2%2B${b}x%2B${c}&podstate=Result__Step-by-step+solution&format=plaintext`;

const getAPIData = async (url) => {
    let data = ""
    await request(url, async (error, response, body) => {
        data = await body;
    });
    return data;
}
const getQuadraticRoots = async (a, b, c) => {
    let data = await getAPIData(format(a, b, c))
    console.log(data);
    return data
        .replace('{', '')
        .replace('}','')
        .split(',')
        .map(root => root
            .trim()
            .replace('x = ', ''));
}
router.get('/quadratic_formula/:a/:b/:c', cors(co), async (req, res) => {
    res.json({
        roots: await getQuadraticRoots(
            parseFloat(req.params.a),
            parseFloat(req.params.b),
            parseFloat(req.params.c)),
        a: parseFloat(req.params.a),
        b: parseFloat(req.params.b),
        c: parseFloat(req.params.c),
    })
});

module.exports = router;

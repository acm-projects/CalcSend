const express = require('express');
const cors = require('cors');
const router = express.Router();
const request = require('request-promise');
const parseString = require('xml2js').parseString;
const { formatEquation, getURL } = require('../api/query_formatter.js');
const co = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const getAPIData = async (url) => {
    let data = ""
    await request(url, async (error, response, body) => {
        data = await body;
    });
    return data;
}

router.get('/solver/', cors(co), async (req, res) => {
    const equation = req.query.equation;
    const variable = req.query.variable;
    console.log(equation);
    console.log(variable);
    if (equation === undefined) {
        res.json({
            error: "no equation"
        })
    }
    else {
        try {
            let url;
            let formatted_equation;
            if (variable === undefined) {
                formatted_equation = formatEquation(equation);
            } else {
                formatted_equation = formatEquation(`solve ${equation} for ${variable}`)
            }
            console.log(formatted_equation);
            url = getURL(formatted_equation);
            console.log(url);
            let XMLdata = await getAPIData(url);
            let JSONdata = null;
            parseString(XMLdata, function (err, result) {
                JSONdata = result;
            });
            res.json(JSONdata);
        } catch (e) {
            res.json({
                error: "invalid query"
            })
        }
    }
});

function test() {
}
test()
module.exports = router;

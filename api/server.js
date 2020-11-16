const path = '../backend/node_modules/'
const express = require(path + 'express');
const cors = require(path + 'cors');
const router = express.Router();
const request = require(path + 'request-promise');
const { encodeEquation, getURL } = require('./formatter.js');
const { getOriginal, getSolution, getSteps } = require('./parser.js')
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
    let url;
    let formatted_equation;
    console.log(equation);
    console.log(variable);
    let data, original, steps, solutions;
    try {
        if (equation === undefined) {
            throw "no equation";
        }

        if (variable === undefined) {
            formatted_equation = encodeEquation(equation);
        } else {
            formatted_equation = encodeEquation(`solve ${equation} for ${variable}`)
        }
        console.log(formatted_equation);

        url = getURL(formatted_equation);
        console.log(url);

        data = await getAPIData(url);
        data = JSON.parse(data);

        original = getOriginal(data);
        solutions = getSolution(data);
        steps = getSteps(data);

        if (original === "") {
            original = decodeEquation(equation);
        }

        res.json({
            original: original,
            solutions: solutions,
            steps: steps,
            rawJSON: data
        });

    } catch (e) {
        console.log(e.stack);
        res.json({
            original: "",
            solutions: [],
            steps: [],
            data: data
        })
    }
});

module.exports = router;

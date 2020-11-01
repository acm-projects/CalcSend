const express = require('express');
const cors = require('cors');
const router = express.Router();
const request = require('request-promise');
const parseString = require('xml2js').parseString;
const { encodeEquation, getURL } = require('./formatter.js');
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
    let JSONdata, original, alternates, steps, solutions;
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

        let XMLdata = await getAPIData(url);
        parseString(XMLdata, function (err, result) {
            JSONdata = result;
        });

        if (JSONdata.queryresult.$["success"] === "false") {
            throw "success false, please record what you inputted and submit an issue on github";
        }
        else if (JSONdata.queryresult.$["error"] === "true") {
            throw "error true, please record what you inputted and submit an issue on github";
        }

        original = JSONdata.queryresult.pod
            .filter(a => a.$.id === "Input")[0].subpod[0].plaintext[0];

        alternates = JSONdata.queryresult.pod
            .filter(b => b.$.id === "AlternateForm")[0].subpod
            .map(c => c.plaintext[0]);

        steps = JSONdata.queryresult.pod
            .filter(d => d.$.id.includes("Solution"))
            .map(e => e.subpod)
            .map(f => f
                .filter(g => g.$.title === "Possible intermediate steps")
                .map(l => l.plaintext))
            .reduce((acc, o) => acc.concat(o))
            .map(p => p[0]);


        solutions = JSONdata.queryresult.pod
            .filter(h => h.$.id.includes("Solution"))
            .map(i => i.subpod)
            .map(j => j
                .filter(k => k.$.title !== "Possible intermediate steps")
                .map(l => l.plaintext))
            .reduce((acc, m) => acc.concat(m))
            .reduce((acc, n) => acc.concat(n));

        res.json({
            original: original,
            alternates: alternates,
            solutions: solutions,
            steps: steps,
            rawJSON: JSONdata
        });

    } catch (e) {
        console.log(e.stack);
        res.json({
            original: original,
            alternates: alternates,
            solutions: solutions,
            steps: steps,
            rawJSON: JSONdata
        })
    }
});

module.exports = router;

const p = (text) => console.log(text);

const getOriginal = (data) => {
    let original = "";
    if ('pods' in data.queryresult) {
        const pods = data.queryresult.pods;
        for (let i = 0; i < pods.length; i++) {
            if ('title' in pods[i]) {
                if (pods[i].id === "Input") {
                    if ('subpods' in pods[i]) {
                        for (let j = 0; j < pods[i].subpods.length; j++) {
                            if (pods[i].subpods[j].title === "") {
                                original = pods[i].subpods[j].plaintext;
                            }
                        }
                    }
                }
            }
        }
    }
    return original;
}

const getSolution = (data) => {
    let solutions = [];
    if ('pods' in data.queryresult) {
        const pods = data.queryresult.pods;
        for (let i = 0; i < pods.length; i++) {
            if ('id' in pods[i]) {
                if (pods[i].id.includes("Solution")) {
                    if ('subpods' in pods[i]) {
                        for (let j = 0; j < pods[i].subpods.length; j++) {
                            if (pods[i].subpods[j].title === "") {
                                solutions.push(pods[i].subpods[j].plaintext);
                            }
                        }
                    }
                }
            }
        }
    }
    return solutions;
}

const getSteps = (data) => {
    let steps = [];
    if ('pods' in data.queryresult) {
        const pods = data.queryresult.pods;
        for (let i = 0; i < pods.length; i++) {
            if ('id' in pods[i]) {
                if (pods[i].id.includes("Solution")) {
                    if ('subpods' in pods[i]) {
                        for (let j = 0; j < pods[i].subpods.length; j++) {
                            if (pods[i].subpods[j].title.includes("steps")) {
                                steps.push(pods[i].subpods[j].plaintext);
                            }
                        }
                    }
                }
            }
        }
    }
    return steps;
}

module.exports.getOriginal = getOriginal;
module.exports.getSolution = getSolution;
module.exports.getSteps = getSteps;
export const encodeEquation = (equation_string) => {
    return encodeURI(equation_string).split("").map(char => {
        const chars = [" ", "+", "*", "/", "^", "(", ")"];
        const char_codes = ["%20", "%2B", "%2A", "%2F", "%5E", "%28", "%29"];
        for (let i = 0; i < chars.length; i++) {
            char = char.replace(chars[i], char_codes[i]);
        }
        return char;
    }).join("");
}
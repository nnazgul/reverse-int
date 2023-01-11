module.exports = function reverse(n) {
    let input = String(n);
    let output = [];
    for (let i = input.length; i >= 0; i--) {
        console.log(output.push(input[i]));
    }
    let result = output.toLocaleString().replace(/\,/g, '');
    return Number(result.replace(/\-/g, ''));
}

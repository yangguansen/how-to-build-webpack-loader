
module.exports = function (content) {

    var result = content.split('').reverse().join('').toUpperCase();
    return `module.exports = '${result}'`;
};
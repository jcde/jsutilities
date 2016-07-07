var str = require('../str.js');
var reflection = require('../reflection.js');

module.exports = {
    trim: function (a, b, c) {
        return str.trim(a, b, c)
    },

    type: function (obj) {
        return reflection.type(obj)
    },
};
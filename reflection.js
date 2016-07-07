var reflection = {};
reflection.Type = function (obj) {
    return obj.prototype.constructor.toString().match(/\w+/g)[1];
}

reflection.type = function (obj) {
    return reflection.Type(obj).toLowerCase();
}

reflection.Route = function (obj) {
    return '/' + reflection.Type(obj);
}

reflection.route = function (obj) {
    return '/' + reflection.type(obj);
}

if (typeof module !== 'undefined') module.exports = reflection;
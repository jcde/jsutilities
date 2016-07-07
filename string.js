// http://codereview.stackexchange.com/questions/28464/trim-certain-characters-from-a-string-in-javascript
var trim = (function () {
    "use strict";

    function escapeRegex(string) {
        return string.replace(/[\[\](){}?*+\^$\\.|\-]/g, "\\$&");
    }

    return function trim(str, characters, flags) {
        flags = flags || "g";
        if (typeof str !== "string" || typeof characters !== "string" || typeof flags !== "string") {
            throw new TypeError("argument must be string");
        }

        if (!/^[gi]*$/.test(flags)) {
            throw new TypeError("Invalid flags supplied '" + flags.match(new RegExp("[^gi]*")) + "'");
        }

        characters = escapeRegex(characters);

        return str.replace(new RegExp("^[" + characters + "]+|[" + characters + "]+$", flags), '');
    };
}());
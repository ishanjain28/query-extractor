function getQueryParams(URL, queryName) {
    var url = URL || window.location.href,
        name = queryName.replace(/[\[\]]/g, "\\$&"),
        regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        regexResults = regex.exec(url);
    if (!regexResults) {
        return null;
    }
    if (!regexResults[2]) {
        return "";
    }
    return decodeURIComponent(regexResults[2].replace(/\+/g, " "));
}

function getQueryObject(url) {
    var queryStr = (url || window.location.href).split("?")[1],
        queries = queryStr.split("&"),
        queryObj = {};

    queries.forEach(function(value) {
        var key = value.split("=")[0];
        var keyValue = value.split("=")[1];
        queryObj[key] = keyValue;
    });
    return queryObj;
}

module.exports = {
    getAll: getQueryObject,
    get: getQueryParams
};
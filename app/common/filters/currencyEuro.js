angular.module('appPhone').filter('euro', function() {
    return function(x,numberDecimals) {
        var txt = "";
        var decs = parseInt(numberDecimals) || 2;
        txt = parseFloat(x).toFixed(decs) + " €";
        return txt;
    };
});
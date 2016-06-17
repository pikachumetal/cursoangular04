angular.module('appPhone').component("phoneListDir", {
    templateUrl: "app/shop/phonelist/templates/phonelist.list.template.html",
    bindings: {
        phones: '=',
        seeimage: '<',
        direccion: '<',
        queryselector: '<',
        query: '<',
        deletePhone: '&'
    }
});


var searchPhonesQueryController = function searchPhonesQueryInputController() {
    "use strict";
    var model = this;

    model.onUpdateQuery = function onUpdateQuery(query){
        model.query= query;
        model.updateQuery({query:query});
    }
};

angular.module('appPhone').component("phoneSearchDir", {
    templateUrl: "app/shop/phonelist/templates/phonelist.search.template.html",
    bindings: {
        queryselectorLabels: '<',
        seeimageLabels: '<',
        seeimage: '=',
        direccion: '=',
        queryselector: '=',
        query: '<',
        reloadjson: '&',
        updateQuery: '&',                
changeLanguage: '&'
    },
    controller: searchPhonesQueryController
});

var searchPhonesQueryInputController = function searchPhonesQueryInputController() {
    "use strict";
    var model = this;

    // model.$onChanges = function (changesObj) {
    //     if (changesObj.query) {
    //         model.query = changesObj.query;
    //     }
    // };

    model.onUpdateQuery = function onUpdateQuery(){
        model.updateQuery({query:model.query});
    }
};

angular.module('appPhone').component("searchPhonesQueryInput", {
    templateUrl: "app/shop/phonelist/templates/phonelist.search.query.template.html",
    bindings: {
        query: '<',
        updateQuery: '&'
    },
    controller: searchPhonesQueryInputController
});

// angular.module('appPhone').directive("phoneList", function () {
//     return {
//         restrict: "EA",
//         replace: 'true',
//         templateUrl: "app/shop/phonelist/templates/phonelist.list.template.html",
//         //scope: false,
//         scope: {
//             phones: '=',
//             seeimage: '=',
//             direccion: '=',
//             queryselector: '=',
//             query: '=',
//             deletePhone: '&'
//         },
//         //bindToController: true
//     };
// });

// angular.module('appPhone').directive("phoneSearch", function () {
//     return {
//         restrict: "EA",
//         replace: 'true',
//         templateUrl: "app/shop/phonelist/templates/phonelist.search.template.html",
//         scope: {
//             queryselectorLabels: '=',
//             seeimageLabels: '=',
//             seeimage: '=',
//             direccion: '=',
//             queryselector: '=',
//             query: '=',
//             reloadjson: '&'
//         },
//         //bindToController: true
//     };
// });
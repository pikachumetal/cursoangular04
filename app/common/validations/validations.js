angular.module('appPhone').directive("onlynumbers", function () {
    return {
        require: 'ngModel',
        restrict: "A",
        link: function ($scope, $element, $attr, ngModel) {
            // function onlyNumbersValidation(n) {
            //     if (!isNaN(parseFloat(n)) && isFinite(n)) {
            //         $mCtrl.$setValidity('charE', true);
            //     } else {
            //         $mCtrl.$setValidity('charE', false);
            //     }
            //     return n;
            // }
            // $mCtrl.$validators.onlynumbers= onlyNumbersValidation;
            // $mCtrl.$parsers.push(onlyNumbersValidation);
            
            ngModel.$validators.onlynumbers = function(modelValue) {  
                return !isNaN(parseFloat(modelValue)) && isFinite(modelValue);
            }
        }
    };
});

angular.module('appPhone').directive("odd", function() {
    return {
        restrict: "A",         
        require: "ngModel",         
        link: function(scope, element, attributes, ngModel) {
            ngModel.$validators.odd = function(modelValue) {  
                return modelValue % 2 === 1;
            }
        }
    };
});
(function () {
'use strict';

    angular.module('SenaiUppercaseParserDirective', [])
        .directive('senaiUppercaseParser', senaiUppercaseParser);
    
    /* @ngInject */
    function senaiUppercaseParser() {
        var directive = {
            restrict: 'A',
            require: 'ngModel',
            link: link
        };

        return directive;

        function link(scope, iElement, iAttrs, ngModelController) {
            init();

            function init() {
                ngModelController
                    .$parsers.push(uppercaseParser);
            }

            function uppercaseParser(viewValue) {
                return viewValue.toUpperCase();
            }
        }
    }
})();

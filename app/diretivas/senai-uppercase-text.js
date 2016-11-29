(function(){
'use strict';
    angular.module('SenaiUpperCaseTextDirective',[])
        .directive('senaiUpperCaseText', senaiUpperCaseText);

        /* @Inject */
        function senaiUpperCaseText() {
            var diretive = {
                restrict: 'A',
                require: 'ngModel',
                link: link
            };

            return diretive;

             function link(scope, iElement, iAttrs, ngModelController) {
                 init();

                 function init() {
                     var arrayParsers = ngModelController.$parsers;

                     arrayParsers.push(uppercaseParser); 
                 }

                 function uppercaseParser(viewValue) {
                     viewValue = viewValue.toUpperCase();
                     ngModelController.$setViewValue(viewValue);
                     ngModelController.$render();


                     if (viewValue.length > 15) {
                         ngModelController.$setValidity('muitogrande', false);
                     } else {
                         ngModelController.$setValidity('muitogrande', true);
                     }
                      return viewValue.toUpperCase();
                 }
             }
        }    
})();
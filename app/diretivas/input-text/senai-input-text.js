(function() {
    'use strict';

    angular.module('SenaiUpperCaseTextDirective',[])
        .directive('senaiInputText', senaiInputText);

    function senaiInputText() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/direticas/input-text/senai-input-text.html',
            transclude: 'true',
            scope: {
                ngModel: '=',
                ngRequired: '=?',
                palceholder: '@',
                minlength: '@',
                maxlength: '@',
                colspanXs: '@',
                colspanSm: '@',
                colspanMd: '@',
                colspanLg: '@',
                preffix: '@',
                onChange: "atualizarMensagemLogin()",
            },
            compile: compile,
            link: link
        };

        function compile(tElement, tAttrs) {
            if (tAttrs.preffix) {
                var inputGroupElement =
                angular.element('<div class="input-group"></div>');
                inputElement.deatach();

                var preffixElement =
                angular.element('<div class="input-group-addon"ng-bind="preffix" ></div>');

                inputGroupElement.append(preffixElement);

                var inputElement = tElement.find('input');

                inputElement.append(inputElement);
                
                var helpBlockElement = tElement.find('.help-block');
                inputElement.deatach();
                inputElement.append(helpBlockElement);

                var formGroupElement = tElement.find('.form-group');

                formGroupElement.append(formGroupElement);
            }
        }

        function link(scope,iElement, iAttrs) {
            scope.placeholder = scope.placeholder || 'Digite o seu valor';

            if(!scope.colspanSm) {
                scope.colspanSm = '4';
            }

            scope.inputName = iAttrs.ngModel;

            scope.onInputChange = onInputChange;
            function onInputChange() {
                console.log('INput mudou');

                if(iAttrs.onChange) {

                }
            }
        }
        
    }
})();
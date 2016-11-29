(function () {
    'use strict';

    angular.module('SenaiInputTextDirective', [])
        .directive('senaiInputText', senaiInputText);

    /* @ngInject */
    function senaiInputText() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/js/directives/input-text/senai-input-text.html',
            require: 'ngModel',
            transclude: true,
            scope: {
                ngModel: '=',
                ngRequired: '=?',
                placeholder: '@',
                minlength: '@',
                maxlength: '@',
                colspanXs: '@',
                colspanSm: '@',
                colspanMd: '@',
                colspanLg: '@',
                preffix: '@',
                onChange: '&'
            },
            compile: compile
        };

        function compile(tElement, tAttrs) {
            if (tAttrs.preffix) {
                var inputGroupElement =
                    angular.element('<div class="input-group"></div>');
                
                var preffixElement =
                    angular.element('<div class="input-group-addon" ng-bind="preffix"></div>');
                
                inputGroupElement.append(preffixElement);

                var inputElement = tElement.find('input');
                inputElement.detach();

                inputGroupElement.append(inputElement);

                var helpBlockElement = angular.element(tElement[0].querySelector('.help-block'));
                helpBlockElement.detach();

                var formGroupElement = angular.element(tElement[0].querySelector('.form-group'));

                formGroupElement.append(inputGroupElement);
                formGroupElement.append(helpBlockElement);
            }

            return {
                post: link
            };
        }

        function link(scope, iElement, iAttrs) {
            scope.placeholder = scope.placeholder ||
                'Digite o seu valor';

            if (!scope.colspanSm) {
                scope.colspanSm = '4';
            }

            scope.inputName = iAttrs.ngModel;

            scope.onInputChange = onInputChange;

            function onInputChange() {
                console.log('Input mudou!');

                if (iAttrs.onChange) {
                    scope.onChange({ value: scope.ngModel });
                }
            }
        }

        return directive;
    }
})();
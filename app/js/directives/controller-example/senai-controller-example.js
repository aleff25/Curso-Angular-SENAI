(function() {
    'use strict';

    angular.module('MyApp')
        .directive('senaiControllerExample', senaiControllerExample);

        function senaiControllerExample() {
            return {
                restrict: 'EA',
                template: '<button ng-click="vm.addItem()">Add Item</button>' + '<ul><li ng-repeat="item in vm.items" ng-bind="item.name"></li></ul',
                scope: {
                    provider: '=',
                    add: '&'
                },
                controller: controller,
                controllerAs: 'vm',
                bindToController: true,
                link: link
                };
                

        function controller() {
            var vm = this;

            
            vm.addItem = addItem;

            init();

            function init() {
                vm.items = angular.copy(vm.provider);
            }
            function addItem() {
                vm.add();

                vm.items.push({name: 'Novo Cliente'});
            }

        }

        function link(scope, iElement, iAttrs, ctrl) {
            scope.$on('alterarListaClientes',onAlterarListaCliente);

            function onAlterarListaCliente () {
                ctrl.addItem();
            }
        }

        // function link(scope,iElement, iAttrs) {
        //     var items = angular.copy(scope.provider);

        //     init();

        //     function init() {
        //         var htmml = '<button id="addItem> Add Item </button><div></div>';
        //         iElement.html(html);

        //         iElement.on('click', function(event) {
        //             if(event.srcElemente.id === 'addItem') {
        //                 addItem();
        //                 event.preventDefault();
        //             }
        //         });
        //     }

        //     function addItem () {
        //         scope.add();

        //         items.push({
        //             name: 'Novo Cliente'
        //         });

        //         render();
        //     }

        //     function render () {
        //         var listHtml = '<ul>';
        //         for (var i = 0, len = items.length; i < len; i++) {
        //             listHtml += '<li>' + items[i].name + '</li>';
        //         }
        //         lsitHtml += '</ul>';

        //         iElement.find('div').html(listHtml);
        //     }

        //     }
        // }
    }
})();
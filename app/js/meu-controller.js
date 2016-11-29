(function() {
'use strict';

    angular
        .module('MyApp')
        .controller('MeuController', MeuController);

    MeuController.$inject = ['SenaiSecurityService'];
    function MeuController(SenaiSecurityService) {
        var vm = this;
        vm.nomePagina = 'Página Meu Controller';
        vm.getLoggedUser = getLoggedUser;

        activate();

        ////////////////

        function activate() {
            console.log('Meu Controller iniciado!');
         }

        function getLoggedUser() {
            return SenaiSecurityService.getLoggedUser();
        }
    }
})();

// (function () {
//     'use strict';
    
//     angular.module('MyApp')
//         .controller('IndexController2', IndexController2);

//     function IndexController2(SenaiSecurityService) {
//         this.getLoggedUser = getLoggedUser;

//         function getLoggedUser() {
//             return SenaiSecurityService.getLoggedUser();
//         }
//     }
// })();
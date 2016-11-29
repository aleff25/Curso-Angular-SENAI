(function(){
    'use strict';
    angular.module('MyApp')
    .controller('IndexController2', IndexController2);

function IndexController2(SenaiSecurityService) {
    this.getLoggedUser = getLoggedUser;

    function getLoggedUser() {
        return SenaiSecurityService.getLoggedUser();
    }
}
})();

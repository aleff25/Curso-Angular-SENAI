angular.module('MyApp')
    .service('SenaiAlertService', SenaiAlertService);

function SenaiAlertService(growl){
    this.showLoginOk = showLoginOk;
    this.showLoginError = showLoginError;

    function showLoginOk(msg) {
        growl.success(msg);
    }

    function showLoginError(msg) {
        growl.warning(msg);
    }
}
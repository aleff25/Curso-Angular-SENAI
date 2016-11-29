angular.module('MyApp')
    .controller('IndexController', IndexController);

/* @Inject */
function IndexController($rootScope, $scope, $timeout, $filter, SenaiSecurityService) {
    $rootScope.nomeUsuarioLogado = 'Joaquim';

    $scope.listaClientes = [
        {name: 'Fulano'},
        {name: 'Cilacno'},
        {name: 'Ronaldo'}
    ];

    $scope.addCliente = function(){
        console.log('function add');
    };
    
    
    $scope.user = {
        login: 'usuario'
    };

    this.atualizarMensagemLogin = function(usuario) {
        $scope.mensagemLogin = 'Olá ' + usuario;
    };

    this.atualizarMensagemLogin($scope.user.login);

    this.doLogin = function ($event) {
        SenaiSecurityService.doLogin($scope.user);
    };

    this.clientes = [
        { nome: 'Maria', nascimento: new Date(1990, 9, 13) },
        { nome: 'André', nascimento: new Date(1987, 0, 10) }
    ];

    var filtroData = $filter('date');

    console.log(
        filtroData(this.clientes[0].nascimento,
            'dd/MM/yyyy'));

    $scope.listaEmails = [
        'teste@email.com',
        'asdf@gmail.com'
    ];

    $scope.$watch('listaEmails', watchCollectionListaEmails);

    function watchCollectionListaEmails(novoValor) {
        // console.log('Mudou a lista de e-mails.' + novoValor);
    }

    $scope.$watch('pessoa', watchPessoa, true);

    function watchPessoa(pessoa) {
        if (pessoa) {
            console.log(pessoa.nome);
        }
    }
}
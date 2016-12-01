angular.module('MyApp')
    .controller('IndexController', IndexController);

/* @ngInject */
function IndexController($rootScope, $scope, $timeout, $filter, SenaiSecurityService, _) {
    $rootScope.nomeUsuarioLogado = 'Joaquim';


    console.log(_.join(['a', 'b', 'c'],'-'));


    $scope.listaClientes = [
        {name: 'Fulano'},
        {name: 'Cilacno'},
        {name: 'Ronaldo'}
    ];

    $scope.addCliente = function(){
        console.log('function add');
    };

    $timeout( function() {
        $scope.broadcast('alterarListaClientes'); //broadcast ou emit emit disparar para todos os escopos acima e o brodast abaixo;
    }, 3000);


    
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
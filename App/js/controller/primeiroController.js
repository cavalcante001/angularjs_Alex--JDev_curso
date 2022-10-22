app.controller('primeiroController', ['$scope', function($scope) {
    $scope.user = {meuNome: 'Paulo', meuSobrenome: 'Cavalcante'};

    $scope.contador = 0;

    $scope.addAcontador = function() {
        console.log(document.getElementById('corpo'));
        $scope.contador++;
    }

    $scope.pessoas = ['ana', 'mario', 'josé'];
}]);
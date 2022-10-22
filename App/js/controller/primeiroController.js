app.controller('primeiroController', ['$scope', function($scope) {
    $scope.user = {meuNome: 'Paulo', meuSobrenome: 'Cavalcante'};

    $scope.contador = 0;

    $scope.addAcontador = function() {
        console.log(document.getElementById('corpo'));
        $scope.contador++;
    }

    $scope.pessoas = ['ana', 'mario', 'josé'];
}]);

app.controller('localizacao', ['$scope', '$location', function($scope, $location) {
    $scope.myUrl = $location.absUrl();
}]);

app.controller('controllerTimeOut', ['$scope', '$timeout', function($scope, $timeout) {
    $scope.timermsg = "Oi!";
    $timeout(function() {
        $scope.timermsg = "Oi depois de 3 segundos";
    }, 3000)
}]);

app.controller('controllerIntervalo', ['$scope', '$interval', function($scope, $interval) {
    $scope.intervalo = new Date().toLocaleTimeString();
    $interval(function() {
        $scope.intervalo = new Date().toLocaleTimeString();
    }, 1000)
}]);
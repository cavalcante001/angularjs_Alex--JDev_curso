app.controller("primeiroController", [
  "$scope",
  function ($scope) {
    $scope.user = { meuNome: "Paulo", meuSobrenome: "Cavalcante" };
    
    $scope.contador = 0;

    $scope.addAcontador = function () {
      console.log(document.getElementById("corpo"));
      $scope.contador++;
    };

    $scope.pessoas = ["ana", "mario", "josé"];
  },
]);

app.controller("pegarResposta", [
  "$scope",
  "$http",
  function ($scope, $http) {
    $scope.pegarResposta = function () {
      $http
        .get("https://jsonplaceholder.typicode.com/posts/1/comments")
        .then(function (response) {
            $scope.lista = response.data;
        }).catch(function(e) {
            console.log('falhou');
        });
    };
  },
]);

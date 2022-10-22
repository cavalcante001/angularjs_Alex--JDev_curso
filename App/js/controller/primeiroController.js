app.controller("primeiroController", [
  "$scope",
  "$resource",
  function ($scope, $resource) {
    comentarios = $resource("https://jsonplaceholder.typicode.com/comments/:codComentario");

    $scope.getPorId = function() {
      comentarios.get({codComentario : $scope.codComentario}, function(data) {
        $scope.objetoComentario = data;
      })
    };
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

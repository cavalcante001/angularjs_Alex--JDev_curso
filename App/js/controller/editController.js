app.controller("editController", [
  "$scope",
  "$routeParams",
  "$rootScope",
  "$route",
  "$location",
  function ($scope, $routeParams, $rootScope, $route, $location) {  
    $scope.title = "Editar frutas";
    $scope.fruta = $routeParams.name;
    $scope.frutaIndex = $scope.frutas.indexOf($scope.fruta);
    
    $scope.salvar = function () {
      $scope.frutas[$scope.frutaIndex] = $scope.fruta;
      $location.path("/"); 
    };
  },
]);

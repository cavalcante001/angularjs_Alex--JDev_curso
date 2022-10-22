app.controller("newController", [
  "$scope",
  "$routeParams",
  "$rootScope",
  "$route",
  "$location",
  function ($scope, $routeParams, $rootScope, $route, $location) {
    $scope.title = "Nova Fruta";
    $scope.fruta = "";

    $scope.salvar = function () {
      $scope.frutas.push($scope.fruta);
      $location.path("/");
    };
  },
]);

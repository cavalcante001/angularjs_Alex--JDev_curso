primeiroUserController = app.controller(
  "injecaoController",
  function ($scope, UserService) {
    $scope.primeiro = UserService.all();
  }
);

primeiroUserController.$inject = ["$scope", "UserService"];

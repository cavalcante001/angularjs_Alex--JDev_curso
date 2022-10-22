// Config -> use esse método para registrar o trabalho que precisa ser executado no carregamento do módulo.

// When -> adiciona uma nova definição de rota ao serviço $ route.

// otherwise -> define a definição de rota que será usado na mudança de rota quando nenhuma outra definição for encontrada.

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {controller: "listController", templateUrl: "view/list.html"})
    .when("/edit/:name", {controller: "editController", templateUrl: "view/form.html"})
    .when("/new", {controller: "newController", templateUrl: "view/form.html"})
    .otherwise({redirectTo: "/"});
});

// Registro de trabalho que deve ser realizado quando o injetor é feito carregando todos os módulos

app.run(function($rootScope) {
    $rootScope.frutas = ['banana', 'melancia', 'pera'];
});






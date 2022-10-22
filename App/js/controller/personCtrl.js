app.controller('personCtrl', ['$scope', function($scope) {
    $scope.firstName = 'John';
    $scope.lastName = 'Doe';
}]);

app.controller('namesCtrl', ['$scope', function($scope) {
    $scope.names = [
        {name: 'Jani', country: 'Norway'},
        {name: 'Carl', country: 'Sweden'},
        {name: 'Margareth', country: 'England'},
        {name: 'Hege', country: 'Norway'},
        {name: 'Joe', country: 'Denmark'},
        {name: 'Gustav', country: 'Sweden'}
    ]
}]);

app.controller('costCtrl', ['$scope', function($scope) {
    $scope.price = 1000;
}]);

app.controller('namesCtrl2', ['$scope', function($scope) {
    $scope.names = [
        'Jani',
        'Carl',
        'Margareth',
        'Hege',
        'Joe',
        'Gustav',
        'Birgit',
        'Mary',
        'Kai'
    ];
}]);


app.controller('namesCtrl4', ['$scope', function($scope) {
    $scope.names = [
        {name: 'Jani', country: 'Norway'},
        {name: 'Carl', country: 'Sweden'},
        {name: 'Margareth', country: 'England'},
        {name: 'Hege', country: 'Norway'},
        {name: 'Joe', country: 'Denmark'},
        {name: 'Gustav', country: 'Sweden'}
    ]

    $scope.orderByMe = function(x) {
        $scope.myOrderBy = x;
    }
}]);

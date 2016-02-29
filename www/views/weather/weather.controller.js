angular
    .module('App')
    .controller('weatherController', weatherController);

//.$inject = [''];

/* @ngInject */
function weatherController($scope, $ionicLoading, $http) {
    /* jshint validthis: true */
    var vm = this,
        directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']

    $ionicLoading.show();

    $http.get('https://ionic-in-action-api.herokuapp.com/weather').success(function (weather) {
        $scope.weather = weather;
        $ionicLoading.hide();
    }).error(function (err) {
        $ionicLoading.show({
            template: 'Could not load weather. Please try again later.',
            duration: 3000
        });

    });

    vm.getDirection = function (degree) {
        if (degree > 338) {
            degree = 360 - degree;
        }
        var index = Math.floor((degree + 22) / 45);
        return directions[index];
    }


    vm.activate = activate;
    vm.title = '';

    activate();

    ////////////////

    function activate() {
    }


}
angular.module('App')
    .controller('restaurantController', restaurantController);

function restaurantController($scope, $http) {

    var vm = $scope;

    vm.page = 0;
    vm.total = 1;
    vm.restaurants = [];

    vm.getRestaurants = getRestaurants();


    function getRestaurants() {
        vm.page++;

        $http.get('https://ionic-in-action-api.herokuapp.com/restaurants?page=' + vm.page).success(function (response) {
            angular.forEach(response.restaurants, function (restaurant) {
                vm.restaurants.push(restaurant);
            });
            vm.total = response.totalPages;
            vm.$broadcast('scroll.infiniteScrollComplete');
        }).error(function (err) {
            vm.$broadcast('scroll.infiniteScrollComplete');
            console.log(err);
        });
    };

};
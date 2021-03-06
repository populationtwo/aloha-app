angular.module('App', ['ionic'])

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('home', {
                url: '/home',
                templateUrl: 'views/home/home.html'
            })
            .state('reservation', {
                url: '/reservation',
                controller: 'reservationController',
                controllerAs: 'reservation',
                templateUrl: 'views/reservation/reservation.view.html'
            })
            .state('weather', {
                url: '/weather',
                controller: 'weatherController',
                controllerAs: 'weather',
                templateUrl: 'views/weather/weather.view.html'
            })
            .state('restaurants', {
                url: '/restaurants',
                controller: 'restaurantController',
                controllerAs: 'restaurant',
                templateUrl: 'views/restaurants/restaurant.view.html'
            });

        $urlRouterProvider.otherwise('/home');

    })

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })

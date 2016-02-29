angular
    .module('App')
    .controller('reservationController', reservationController);

/* @ngInject */
function reservationController($scope) {
    /* jshint validthis: true */
    var vm = this;

    vm.data = {
        checkin: new Date(),
        checkout: new Date(Date.now() * 1000 * 60 * 60 * 24 * 7),
        room: 156,
        rate: 122,
        wifi: 'resortwifi'
    };


}


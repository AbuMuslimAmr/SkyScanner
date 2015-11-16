(function() {
  'use strict';

  angular
    .module('FileExplorerApp')
    .config(function($stateProvider, $urlRouterProvider, DEFAULT_STATE) {
      $urlRouterProvider.otherwise(DEFAULT_STATE);
      $urlRouterProvider.when('/', DEFAULT_STATE);

      $stateProvider
        .state('browse', {
          url: '/browse',
          templateUrl: 'app/states/browse/browse.html'
        });
    });
})();
(function() {
  'use strict';

  angular
    .module('FileExplorerApp')
    .controller('BrowseCtrl', function ($scope, $stateParams, api) {
      $scope.loading = true;

      function load() {
        api
          .browse()
          .then(function(data) {
            console.log(data);
          });
      }

      load();
    });
})();
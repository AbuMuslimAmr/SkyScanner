(function() {
  'use strict';

  angular
    .module('FileExplorerApp')
    .controller('BrowseCtrl', function ($scope, api) {
      //$scope.loading = true;
      $scope.root = {
        name: '.',
        path: '',
        level: 0,
        isDir: true,
        open: true
      };

      $scope.open = function(query) {
        return api
          .browse(query)
          .then(function(data) {
            $scope.root.children = data;
          });
      };

      //$scope
      //  .open('')
      //  .then(function() {
      //    $scope.loading = false;
      //  });
    });
})();
(function() {
  'use strict';

  angular
    .module('FileExplorerApp')
    .controller('BrowseCtrl', function ($scope) {
      $scope.root = {
        name: '(ROOT)',
        path: '',
        isDir: true,
        open: true
      };
    });
})();
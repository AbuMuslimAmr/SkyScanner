(function() {
  'use strict';

  angular
    .module('FileExplorerApp')
    .directive('node', function ($rootScope, RecursionHelper, api) {
      return {
        restrict: 'E',
        replace: true,
        scope: {
          node: '='
        },
        templateUrl: 'app/directives/node/node.html',
        compile: function (element) {
          return RecursionHelper.compile(element, function (scope) {
            function load() {
              if (scope.node.isDir === false) {
                return;
              }

              return api
                .browse(scope.node.path)
                .then(function(data) {
                  scope.node.children = data;
                });
            }

            scope.toggle = function() {
              $rootScope.selectedNode = scope.node;
              scope.node.open = !scope.node.open;
            };

            load();
          });
        }
      };
    });
})();
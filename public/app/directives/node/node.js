(function() {
  'use strict';

  angular
    .module('FileExplorerApp')
    .directive('node', function (RecursionHelper, api) {
      return {
        restrict: 'E',
        replace: true,
        scope: {
          node: '='
        },
        templateUrl: 'app/directives/node/node.html',
        compile: function (element) {
          return RecursionHelper.compile(element, function (scope, element) {
            function load() {
              if (scope.node.isDir === false) {
                return;
              }

              return api
                .browse(scope.node.path)
                .then(function(data) {
                  _.each(data, function(record) {
                    record.level = scope.node.level + 1;
                  });

                  scope.node.children = data;
                });
            }

            scope.open = function() {
              scope.node.open = true;
            };

            load();
          });
        }
      };
    });
})();
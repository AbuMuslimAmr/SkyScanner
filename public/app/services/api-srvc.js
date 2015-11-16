(function() {
  'use strict';

  angular
    .module('FileExplorerApp')
    .service('api', function(Restangular) {
      function browse(query) {
        return Restangular
          .one('browse', query)
          .get();
      }

      return {
        browse: browse
      };
    });
})();
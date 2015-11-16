(function() {
  'use strict';

  angular
    .module('FileExplorerApp')
    .service('api', function(Restangular) {
      function browse() {
        return Restangular
          .one('browse')
          .get();
      }

      return {
        browse: browse
      };
    });
})();
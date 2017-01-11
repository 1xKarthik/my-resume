(function () {
  'use strict';

  angular
    .module('resume')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(toastr) {

    activate();

    function activate() {
      toastr.info('Hi There, This site is developed in Angularjs');
    }
  }
})();

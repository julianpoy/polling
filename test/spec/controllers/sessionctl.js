'use strict';

describe('Controller: SessionctlCtrl', function () {

  // load the controller's module
  beforeEach(module('pollingApp'));

  var SessionctlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SessionctlCtrl = $controller('SessionctlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SessionctlCtrl.awesomeThings.length).toBe(3);
  });
});

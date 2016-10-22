'use strict';

describe('Controller: PollingCtrl', function () {

  // load the controller's module
  beforeEach(module('pollingApp'));

  var PollingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PollingCtrl = $controller('PollingCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PollingCtrl.awesomeThings.length).toBe(3);
  });
});

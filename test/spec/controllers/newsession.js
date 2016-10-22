'use strict';

describe('Controller: NewsessionCtrl', function () {

  // load the controller's module
  beforeEach(module('pollingApp'));

  var NewsessionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewsessionCtrl = $controller('NewsessionCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NewsessionCtrl.awesomeThings.length).toBe(3);
  });
});

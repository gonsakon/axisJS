'use strict';

// TODO write a really cursory basic test for this.

xdescribe('Directive: maintainFocus', function () {

  // load the directive's module
  beforeEach(module('axisJsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<maintain-focus></maintain-focus>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the maintainFocus directive');
  }));
});

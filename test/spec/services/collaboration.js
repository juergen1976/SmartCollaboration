'use strict';

describe('Service: collaboration', function () {

  // load the service's module
  beforeEach(module('smartcollaborateApp'));

  // instantiate service
  var collaboration;
  beforeEach(inject(function (_collaboration_) {
    collaboration = _collaboration_;
  }));

  it('should do something', function () {
    expect(!!collaboration).toBe(true);
  });

});

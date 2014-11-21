describe('version', function() {
  beforeEach(module('myApp.services'));

  iit('should return current version', inject(function(version) {
    expect(version).toEqual(‘0.1’);
  }));
});

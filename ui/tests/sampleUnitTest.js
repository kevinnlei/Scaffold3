describe("Random Dummy Unit Test", function() {
  it("should work", function() {
    expect(true).toBe(true)
  })
})

describe('controller: DummyController', function() {
  var ctrl, $scope = {};

  beforeEach(module('Scaffold3'));
  beforeEach(inject(function($controller) {
    ctrl = $controller('DummyController', {$scope: $scope});
  }));

  it('Should locate scope and find testMe', function() {
    expect($scope.testMe).toBe('testMe');
  });
});
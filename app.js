angular.module("myApp", []).controller("ctrl", function($scope) {
    $scope.calcularImporte = function() {
      if ($scope.distanciaRecorrida <= 300) {
        $scope.importe = 250;
      } else if ($scope.distanciaRecorrida <= 1000) {
        $scope.importe = 250 + (30 * ($scope.distanciaRecorrida - 300));
      } else {
        $scope.importe = 250 + (30 * 700) + (20 * ($scope.distanciaRecorrida - 1000));
      }
      if ($scope.importe > 500) {
        $scope.importe *= 0.9;
      }
    }
  });
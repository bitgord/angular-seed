'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', [function($scope) {
	$scope.UserWealth = {
		text: null
	}
	var GlobalWealth = 250000000000000;
    var BTCPrice = 830;
    var BTCSupply = 13300000;
    var BTCMarketCap = BTCSupply*BTCPrice;

	function Calculate($scope) {
		var Wealth = document.getElementById('UserWealth').value;
		var Target = (Wealth/GlobalWealth)*BTCMarketCap;
	 	var BTCTarget = (Wealth/GlobalWealth)*BTCSupply;

	 	alert(BTCTarget);

		document.getElementById('BTCAmount').innerHTML = BTCTarget;
	}
}]);
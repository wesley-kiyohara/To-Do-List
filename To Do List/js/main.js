var app = angular.module('app',[]);
app.controller('MainController',["$scope",
	function( $scope ){
		$scope.toDoList = [];
		$scope.totalItems = 0;
		$scope.completedItems = 0;

		$scope.add = function( toDoItem,priority,dueDate ){
			$scope.toDoList.push(
				{ 
					name: toDoItem,
					priority: priority,
					dueDate: dueDate, 
					complete: false 
				});
			$scope.totalItems++;
		};

		$scope.clearList = function(){
			$scope.toDoList = [];
			$scope.totalItems = 0;
			$scope.completedItems = 0;
		};

		$scope.toggleComplete = function( item ){
			if( item.complete ){
				$scope.completedItems--;
			}else{
				$scope.completedItems++;
			}
			item.complete = !item.complete;
		};
	}]);
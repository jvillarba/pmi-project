(function(){
	angular.module('TreasureApp')
		.controller('MainController', MainController)

	MainController.$inject = ['userService', '$state']

	function MainController(userService, $state){
		var vm = this
		vm.title = "Main Controller"
		vm.newUser = {}

		userService.index().success(function(results){
			vm.users = results
		})

		vm.create = function(){
			// run the userService create method here.
			userService.create(vm.newUser).success(function(response){
				$state.go('detail', {id: response.user._id})
			})
		}

		vm.destroy = function(id, index){
			userService.destroy(id).success(function(response){
				console.log(response)
				vm.users.splice(index, 1)
			})
		}

	}
})()

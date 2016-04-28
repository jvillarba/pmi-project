(function(){
	angular.module('treasureApp')
		.controller('DetailController', DetailController)

	DetailController.$inject = ['userService', '$stateParams']

	function DetailController(userService, $stateParams){
		var vm = this
		vm.title = "This is the DETAIL controller"

		userService.show($stateParams.id).success(function(results){
			vm.user = results
			console.log(vm.user)
		})

		vm.edit = function(){
			vm.editing = true
			vm.editingUser = {
				name: vm.user.name,
				lastName: vm.user.lastName,
				email: vm.user.email,
				password: vm.user.password,
				street: vm.user.street,
				city: vm.user.city,
				state: vm.user.state,
				zip: vm.user.zip,
				phone: vm.user.phone

			}
		}

		vm.update = function(){
			// patch request will go here.
			userService.update($stateParams.id, vm.editingUser).success(function(response){
				vm.editing = false
				vm.user = response.user
			})
		}
	}
})()

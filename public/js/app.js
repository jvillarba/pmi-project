(function(){
	angular.module('treasureApp', ['ui.router'])
		.config(function($stateProvider, $urlRouterProvider){

			// handle any attempts to routes other than what's listed below:
			$urlRouterProvider.otherwise('/')

			// my established routes
			$stateProvider
				.state('home', {
					url: '/',
					templateUrl: 'partials/home.html'
				})
				.state('users', {
					url: '/users',
					templateUrl: 'partials/users.html',
					controller: 'MainController as main'
				})
				.state('newUser', {
					url: '/users/new',
					templateUrl: 'partials/new.html',
					controller: 'MainController as main'
				})
				.state('detail', {
					url: '/users/:id',
					templateUrl: 'partials/detail.html',
					controller: 'DetailController as detail'
				})
		})
})()

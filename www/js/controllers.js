angular.module('starter.controllers', [])

/*.controller('AppCtrl', function($scope) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  
})*/

.controller('AppCtrl', function($scope) {
  $scope.groups = [];
  $scope.menu = ['Account Administration', 'Contract Administration','Employee Administration', 'Asset Management', 'Allocation Management', 'Reports'];
  $scope.subMenu = [['View Account','Location Administration'],['Search Contracts','Add Contracts','Location Administration','Project Administration'],[],['Search Assets','Add Asset']];
  for (var i=0; i<$scope.menu.length; i++) {
    $scope.groups[i] = {
      name: $scope.menu[i],
      items: []
    };
    //for (var j=i; j<$scope.subMenu.length; j++) {
      if($scope.subMenu[i]){
        for(var t=0; t<$scope.subMenu[i].length; t++){  
          $scope.groups[i].items.push(' ' + $scope.subMenu[i][t]);
        }
      }
    //}
  }
  
  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };
  
})

.controller('HomeCtrl', function($scope, $ionicModal, $timeout,$state){
  
  // Form data for the login modal
  $scope.loginData = {};

  //Form data for the sign up modal
  $scope.signupData = {};


  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Create the sign up modal that we will use later
  $ionicModal.fromTemplateUrl('templates/signup.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modalSignUp = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Triggered in the sign up modal to close it
  $scope.closeSignUp = function() {
    $scope.modalSignUp.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Open the sign up modal
  $scope.signUp = function() {
    $scope.closeLogin();
    $scope.modalSignUp.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
      $state.go('app.dashboard');
    }, 1000);
  };

  // Perform the login action when the user submits the login form
  $scope.doSignUp = function() {
    console.log('Doing SignUp', $scope.signupData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeSignUp();
    }, 1000);
  };

})

.controller('dashboardCtrl', function($scope) {

  $scope.userName = "Girish";
  $scope.accName = "BARCA";

  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});

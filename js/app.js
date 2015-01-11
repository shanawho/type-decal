(function() {
  var app;
  app = angular.module("app", ['ngRoute']);

  app.config(function($routeProvider) {
    return $routeProvider.when("/", {
      templateUrl: "pages/main.html",
      controller: "mainController",
      title: "Working with Typography"
    }).when("/", {
      templateUrl: "pages/main.html",
      controller: "mainController",
      title: "Working with Typography"
    });

  });

  app.run(['$location', '$rootScope', function($location, $rootScope) {
      $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
          $rootScope.title = current.$$route.title;
      });
  }]);

  app.controller("navController", function($scope, $location) {
    $scope.isActive = function(viewLocation) {
      return viewLocation === $location.path();
    };
  });

  app.controller("mainController", function($scope) {

    $scope.projects = [
      {title: "Confluence", path: "confluence", tagline: "Crowdsourced Q&A for foreign language learners"},
      {title: "DaVinci Mobile", path: "davinci", tagline: "LinkedIn's mobile pattern library for designers & developers"},
      {title: "Introduction to Illustrator & Photoshop", path: "decal", tagline: "A weekly 2-hour, 2-unit UC Berkeley DeCal course"},
      {title: "32pt", path: "32pt", tagline: "A custom design editor for letterpressed business cards"},
      {title: "Lettering", path: "lettering", tagline: "Illustrative typography"},
      {title: "Artwork", path: "art", tagline: "Portraiture & paintings"}
    ];


  });


}).call(this);
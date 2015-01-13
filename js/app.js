(function() {
  var app;
  app = angular.module("app", ['ngRoute']);

  app.config(function($routeProvider) {
    return $routeProvider.when("/", {
      templateUrl: "pages/main.html",
      controller: "mainController",
      title: "Working with Typography"
    }).when("/about", {
      templateUrl: "pages/lesson.html",
      controller: "aboutController",
      title: "About | Working with Typography"
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

    $scope.lessons = [
      {title: "Letterforms", date: "03 Feb 2014"},
      {title: "Lettering Basics", date: "10 Feb 2014"},
      {title: "Typography Basics", date: "17 Feb 2014"},
      {title: "Typographic Systems", date: "24 Feb 2014"},
      {title: "Editorial Design", date: "03 Mar 2014"},
      {title: "Web & Mobile Typography", subtitle: "Midterm project due", date: "10 Mar 2014"},
      {title: "Identity Design", date: "17 Mar 2014"},
      {title: "Spatial Typography", date: "24 Mar 2014"},
      {title: "Transmedia Typography", date: "31 Mar 2014"},
      {title: "Exploring Concept", date: "07 Apr 2014"},
      {title: "Synthesis", date: "14 Apr 2014"},
      {title: "Final Critique", subtitle: "Final project due",  date: "21 Apr 2014"}

    ];


  });


}).call(this);
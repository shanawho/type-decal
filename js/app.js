(function() {
  var app;
  app = angular.module("app", ['ngRoute']);

  app.config(function($routeProvider) {
    return $routeProvider.when("/", {
      templateUrl: "pages/main.html",
      controller: "mainController",
      title: "Working with Typography"
    }).when("/lessons/1", {
      templateUrl: "pages/lesson1.html",
      controller: "lesson1Controller",
      title: "Lesson 1: Letterforms"
    }).when("/lessons/2", {
      templateUrl: "pages/lesson2.html",
      controller: "lesson2Controller",
      title: "Lesson 2: Intro to Lettering"
    }).when("/lessons/3", {
      templateUrl: "pages/lesson3.html",
      controller: "lesson3Controller",
      title: "Lesson 3: Intro to Typography"
    }).when("/lessons/4", {
      templateUrl: "pages/lesson4.html",
      controller: "lesson4Controller",
      title: "Lesson 4: Typographic Systems"
    }).when("/lessons/5", {
      templateUrl: "pages/lesson5.html",
      controller: "lesson5Controller",
      title: "Lesson 5: Editorial Design"
    }).when("/lessons/6", {
      templateUrl: "pages/lesson6.html",
      controller: "lesson6Controller",
      title: "Lesson 6: Typography for Web & Mobile"
    }).when("/lessons/7", {
      templateUrl: "pages/lesson7.html",
      controller: "lesson7Controller",
      title: "Lesson 7: Identity Design"
    }).when("/lessons/8", {
      templateUrl: "pages/lesson8.html",
      controller: "lesson8Controller",
      title: "Lesson 8: Spatial Typography"
    }).when("/lessons/9", {
      templateUrl: "pages/lesson9.html",
      controller: "lesson9Controller",
      title: "Lesson 1: Transmedia Typography"
    }).when("/lessons/10", {
      templateUrl: "pages/lesson10.html",
      controller: "lesson10Controller",
      title: "Lesson 10: Exploring Concept"
    }).when("/lessons/11", {
      templateUrl: "pages/lesson11.html",
      controller: "lesson11Controller",
      title: "Lesson 11: Synthesis"
    }).when("/lessons/11", {
      templateUrl: "pages/lesson1.html",
      controller: "lesson1Controller",
      title: "Lesson 12: Final Critique"
    });

  });

  app.controller("navController", function($scope, $location) {
    $scope.isActive = function(viewLocation) {
      return viewLocation === $location.path();
    };
  });

  var lessons;

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
    lessons = $scope.lessons;

  });

  app.controller("lesson1Controller", function($scope) {
    $scope.due = "Bring some snacks to share with the class!";
    $scope.title = lessons[0].title;
    $scope.date = lessons[0].date;
  })

  app.controller("lesson2Controller", function($scope) {
    $scope.due = "handmade typography";
    $scope.title = lessons[0].title;
    $scope.date = lessons[0].date;
  })
  app.controller("lesson3Controller", function($scope) {
    $scope.due = "dropcap";
    $scope.title = lessons[0].title;
    $scope.date = lessons[0].date;
  })
  app.controller("lesson4Controller", function($scope) {
    $scope.due = "typeface pairings";
    $scope.title = lessons[0].title;
    $scope.date = lessons[0].date;
  })
  app.controller("lesson5Controller", function($scope) {
    $scope.due = "12 typographic system layouts";
    $scope.title = lessons[0].title;
    $scope.date = lessons[0].date;
  })
  app.controller("lesson6Controller", function($scope) {
    $scope.due = "editorial spread";
    $scope.title = lessons[0].title;
    $scope.date = lessons[0].date;
  })
  app.controller("lesson7Controller", function($scope) {
    $scope.due = "midterm project";
    $scope.title = lessons[0].title;
    $scope.date = lessons[0].date;
  })
  app.controller("lesson8Controller", function($scope) {
    $scope.due = "museum identity";
    $scope.title = lessons[0].title;
    $scope.date = lessons[0].date;
  })
  app.controller("lesson9Controller", function($scope) {
    $scope.due = "gallery design";
    $scope.title = lessons[0].title;
    $scope.date = lessons[0].date;
  })
  app.controller("lesson10Controller", function($scope) {
    $scope.due = "exhibit design";
    $scope.title = lessons[0].title;
    $scope.date = lessons[0].date;
  })
  app.controller("lesson11Controller", function($scope) {
    $scope.due = "design influences culture";
    $scope.title = lessons[0].title;
    $scope.date = lessons[0].date;
  })
  app.controller("lesson12Controller", function($scope) {
    $scope.due = "Delightful confusion";
    $scope.title = lessons[0].title;
    $scope.date = lessons[0].date;
  })


}).call(this);
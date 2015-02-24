(function() {
  var app;
  app = angular.module("app", ['ngRoute']);

  app.config(function($routeProvider) {
    return $routeProvider.when("/", {
      templateUrl: "pages/main.html",
      controller: "mainController",
      title: "Working with Typography"
    }).when("/syllabus", {
      templateUrl: "pages/syllabus.html",
      controller: "syllabusController",
      title: "Syllabus"
    }).when("/contact", {
      templateUrl: "pages/contact.html",
      controller: "contactController",
      title: "Contact"
    }).when("/resources", {
      templateUrl: "pages/resources.html",
      controller: "resourcesController",
      title: "Resources"
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

  var released;
  var lessons;

  app.controller("mainController", function($scope) {

    $scope.released = [
      {title: "Letterforms", date: "03 Feb 2015"},
      {title: "Handlettering", date: "10 Feb 2015"},
      {title: "Digital Lettering", date: "17 Feb 2015"},
      {title: "Intro to Typography", date: "24 Feb 2015"}
    ]

    $scope.lessons = [
      {title: "Editorial Design", date: "03 Mar 2015"},
      {title: "Typography for Web & Mobile", date: "10 Mar 2015"},
      {title: "Identity Design", date: "17 Mar 2015", subtitle: "Midterm project due"},
      {title: "Spatial Typography", date: "31 Mar 2015"},
      {title: "Transmedia Typography", date: "07 Apr 2015"},
      {title: "Exploring Concept", date: "14 Apr 2015"},
      {title: "Creative Workshop", date: "21 Apr 2015"},
      {title: "Final Critique", subtitle: "Final project due",  date: "28 Apr 2015"}

    ];
    released = $scope.released;
    lessons = $scope.lessons;

  });

  app.controller("lesson1Controller", function($scope) {
    $scope.week = 1;
    $scope.due = "Bring some snacks to share with the class!";
    $scope.title = released[0].title;
    $scope.date = released[0].date;
    $scope.nextLesson = $scope.week+1;
  })

  app.controller("lesson2Controller", function($scope) {
    $scope.week = 2;
    $scope.due = "handmade typography";
    $scope.title = released[1].title;
    $scope.date = released[1].date;
    $scope.prevLesson = $scope.week-1;
    $scope.nextLesson = $scope.week+1;
  })
  app.controller("lesson3Controller", function($scope) {
    $scope.week = 3;
    $scope.due = "dropcap";
    $scope.title = released[2].title;
    $scope.date = released[2].date;
    $scope.prevLesson = $scope.week-1;
    $scope.nextLesson = $scope.week+1;
  })
  app.controller("lesson4Controller", function($scope) {
    $scope.week = 4;
    $scope.due = "typeface pairings";
    $scope.title = released[3].title;
    $scope.date = released[3].date;
    $scope.prevLesson = $scope.week-1;
    $scope.nextLesson = $scope.week+1;
  })
  app.controller("lesson5Controller", function($scope) {
    $scope.week = 5;
    $scope.due = "12 typographic system layouts";
    $scope.title = released[4].title;
    $scope.date = released[4].date;
    $scope.prevLesson = $scope.week-1;
    $scope.nextLesson = $scope.week+1;
  })
  app.controller("lesson6Controller", function($scope) {
    $scope.week = 6;
    $scope.due = "editorial spread";
    $scope.title = released[5].title;
    $scope.date = released[5].date;
    $scope.prevLesson = $scope.week-1;
    $scope.nextLesson = $scope.week+1;
  })
  app.controller("lesson7Controller", function($scope) {
    $scope.week = 7;
    $scope.due = "midterm project";
    $scope.title = released[6].title;
    $scope.date = released[6].date;
    $scope.prevLesson = $scope.week-1;
    $scope.nextLesson = $scope.week+1;
  })
  app.controller("lesson8Controller", function($scope) {
    $scope.week = 8;
    $scope.due = "museum identity";
    $scope.title = released[7].title;
    $scope.date = released[7].date;
    $scope.prevLesson = $scope.week-1;
    $scope.nextLesson = $scope.week+1;
  })
  app.controller("lesson9Controller", function($scope) {
    $scope.week = 9;
    $scope.due = "gallery design";
    $scope.title = released[8].title;
    $scope.date = released[8].date;
    $scope.prevLesson = $scope.week-1;
    $scope.nextLesson = $scope.week+1;
  })
  app.controller("lesson10Controller", function($scope) {
    $scope.week = 10;
    $scope.due = "exhibit design";
    $scope.title = released[9].title;
    $scope.date = released[9].date;
    $scope.prevLesson = $scope.week-1;
    $scope.nextLesson = $scope.week+1;
  })
  app.controller("lesson11Controller", function($scope) {
    $scope.week = 11;
    $scope.due = "design influences culture";
    $scope.title = released[10].title;
    $scope.date = released[10].date;
    $scope.prevLesson = $scope.week-1;
    $scope.nextLesson = $scope.week+1;
  })
  app.controller("lesson12Controller", function($scope) {
    $scope.week = 12;
    $scope.due = "Delightful confusion";
    $scope.title = released[11].title;
    $scope.date = released[11].date;
    $scope.prevLesson = $scope.week-1;
  })


}).call(this);
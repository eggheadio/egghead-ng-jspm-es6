import angular from 'angular';

class MainController {
  constructor(){
    this.title = 'MainController';
  }
}

angular.module('app', [])
.controller('MainController', MainController);

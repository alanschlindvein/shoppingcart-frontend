'use strict';

angular.module('MapApp')
  .service('dataHolderService', function() {

    var holder = {};

    this.save = function(label, data) {
      holder[label] = data;
    };

    this.remove = function(label) {
      return holder[label];
    };

    this.get = function(label) {
      return holder[label];
    };

    this.clear = function() {
      holder = {};
    };
  });

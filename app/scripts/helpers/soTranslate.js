'use strict';

angular.module('soTranslate', [])
    .provider('soTranslateSettings', function() {
        var tables = {};

        return {
            $get: function() {
                return {
                    setLabels: function(labels) {
                        tables = labels;
                    },
                    translate: function(label) {
                        return tables[label];
                    }
                }
            }
        }
    })
    .filter('soGoToLang', ['soTranslateSettings', function(soTranslateSettings) {
        return function(label) {
            return soTranslateSettings.translate(label);
        }
    }]);

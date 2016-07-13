'use strict';

angular.module('MapApp', ['ui.router', 'soTranslate', 'ngFlash'])
	.value('appSettings', {
		baseUrl: 'http://shoppingcart-mcfadyenbrazil.rhcloud.com',

		getBaseUrl: function() {
			return this.baseUrl;
		}
	})
	.run(['appSettings', 'soTranslateSettings', 'labelsViewFactory', function(appSettings, soTranslateSettings, labelsViewFactory) {
		soTranslateSettings.setLabels(labelsViewFactory.getLabels());
	}]);

// ==UserScript==
// @name SonarQubeBeauty
// @description Скрипт для SonarQube для улучшения отображения информации
// @author Maximov Valery aka theshadowco
// @license MIT
// @version 1.1
// @include https://www.sonarqube.org/*
// @include http://sonar.silverbulleters.org/*
// ==/UserScript==
(function (window, undefined) {
	var w;
	if (typeof unsafeWindow != undefined) {
		w = unsafeWindow
	} else {
		w = window;
	}

	if (w.self != w.top) {
		return;
	}

	var linkDict = [
		"a.link-no-underline > span"
		// "a.link-with-icon > span"
		// "td.code-name-cell > span"
	]

	var replaceDict = {
		'.ObjectModule': '.МодульОбъекта',
		'.CommandModule': '.МодульКоманды',
		'.ManagerModule': '.МодульМенеджера',
		'.Module': '.Модуль',
		'DataProcessors.': 'Обработки.',
		'CommonModules.': 'ОбщиеМодули.',
		'CommonForms.': 'ОбщиеФормы.',
		'Catalogs.': 'Справочники.'
		
	}

	setInterval(function () {
		for (var key of linkDict) {
			var elems = window.document.querySelectorAll(key);
			for (var i = 0; i < elems.length; i++) {
				
				// для соблюдения последовательности
				var newText = elems[i].title.replace('src/configuration/', '')
					.replace('/Ext/Form/Module', '.МодульФормы')
					.replace('/Forms/', '.')
					.replace('/Commands/', '.')
					.replace('/Ext/', '.')
					.replace('/', '.')
					.replace('.bsl', '');
				
				// патч по словарю
				for (var keyDict in replaceDict) {
					newText = newText.replace(keyDict, replaceDict[keyDict]);
				}

				elems[i].textContent = newText;
			}
		}
	}, 300);

})(window);
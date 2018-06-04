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
        'src/configuration/': '',
        '/Ext/Form/': '.',
        '/Forms/': '.',
        '/Ext/': '.',
        '/': '.',
        '.bsl': '',
        '.ObjectModule': '.МодульОбъекта',
        '.Module': '.Модуль',
        '.DataProcessors.': '.Обработки.',
        '/DataProcessors/': '/Обработки/',
        '.CommonModules.': '.ОбщиеМодули.',
        '/CommonModules/': '/ОбщиеМодули/',
        '.Catalogs.': '.Справочники.',
        '/Catalogs/': '/Справочники/'
    }

    setInterval(function () {
        for (var key of linkDict) {
            var elems = window.document.querySelectorAll(key);
            // var elems = window.document.querySelectorAll('a.link-no-underline > span');
            for (var i = 0; i < elems.length; i++) {
                var newText = elems[i].title;
                for (var key in replaceDict) {
                    newText = newText.replace(key, replaceDict[key]);
                }

                elems[i].textContent = newText;

            }

        }
    }, 300);

})(window);
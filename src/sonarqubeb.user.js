// ==UserScript==
// @name SonarQubeBeauty
// @description Скрипт для SonarQube для улучшения отображения информации
// @author Maximov Valery aka theshadowco
// @license MIT
// @version 1.0
// @include https://www.sonarqube.org/*
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
    setInterval(function() {
	var elems = window.document.querySelectorAll('a.link-no-underline > span');
	for (var i = 0; i < elems.length; i++) {
		var newText =  elems[i].title.replace('src/configuration/', '').replace('/Ext/Form/', '.').replace('/Forms/', '.').replace('/Ext/', '.').replace('/', '.').replace('.bsl', '');
		elems[i].textContent = newText; 
		
	}}, 300);	    

})(window);
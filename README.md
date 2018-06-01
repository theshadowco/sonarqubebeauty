# SonarQubeBeauty

Плагин Chrome (userscript) для SonarQube, улучшающий отображение информации. 

## Установка

- скачать и распаковать архив данного репозитория (например в "sonarqubebeauty")
- указать свой сервер SonarQube в файле [src/sonarqubeb.user.js](src/sonarqubeb.user.js) в строке `// @include https://www.sonarqube.org/`
- перейти по ссылке [chrome://extensions/](chrome://extensions/)
- нажать `Загрузить распакованное расширение` и выбрать каталог `src` в каталоге распакованного архива
- обновить страницу с замечаниями SonarQube

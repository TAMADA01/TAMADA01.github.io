async function initMap() {
    await ymaps3.ready;

    const {YMap, YMapDefaultSchemeLayer} = ymaps3;
    
    const mapContainer = document.getElementById('map');

    mapContainer.innerHTML = "";
    const map = new YMap(
        mapContainer,
        {
            location: {
                center: [37.225844, 56.741702],
                zoom: 15
            },
        }
    );

    map.addChild(new YMapDefaultSchemeLayer());
}

async function Init(){
    await ymaps.ready;

    const mapContainer = document.getElementById('map');
    mapContainer.innerHTML = "";

    var geolocation = ymaps.geolocation,
        myMap = new ymaps.Map('map', {
            center: [55, 34],
            zoom: 10
        }, {
            searchControlProvider: 'yandex#search'
        });

    // Сравним положение, вычисленное по ip пользователя и
    // положение, вычисленное средствами браузера.
    geolocation.get({
        provider: 'yandex',
        mapStateAutoApply: true
    }).then(function (result) {
        // Красным цветом пометим положение, вычисленное через ip.
        result.geoObjects.options.set('preset', 'islands#redCircleIcon');
        result.geoObjects.get(0).properties.set({
            balloonContentBody: 'Мое местоположение'
        });
        myMap.geoObjects.add(result.geoObjects);
    });

    geolocation.get({
        provider: 'browser',
        mapStateAutoApply: true
    }).then(function (result) {
        // Синим цветом пометим положение, полученное через браузер.
        // Если браузер не поддерживает эту функциональность, метка не будет добавлена на карту.
        result.geoObjects.options.set('preset', 'islands#blueCircleIcon');
        myMap.geoObjects.add(result.geoObjects);
    });
}

setTimeout(Init, 2000)
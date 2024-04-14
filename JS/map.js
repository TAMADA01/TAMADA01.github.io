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


setTimeout(initMap, 2000)
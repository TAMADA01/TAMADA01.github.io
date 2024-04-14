async function initMap() {
    await ymaps3.ready;
    
    const {YMap, YMapDefaultSchemeLayer} = ymaps3;
    
    const map = new YMap(
        document.getElementById('map'),
        {
            location: {
                center: [37.225844, 56.741702],
                zoom: 15
            }
        }
    );
    
    map.addChild(new YMapDefaultSchemeLayer());
}

setTimeout(initMap, 1000)
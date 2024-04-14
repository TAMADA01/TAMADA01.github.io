const routes ={
    "/" : {
        url : "Views/home.html",
        title : "Home"
    },
    "/map" : {
        url : "Views/map.html",
        title : "Map",
        src : ["https://api-maps.yandex.ru/v3/?apikey=4eca7cbc-2734-4698-a824-91ad09045a1f&lang=ru_RU", "JS/map.js"]
    },
    "/time" : {
        url : "Views/time.html",
        title : "Time",
        src : ["JS/timer.js"]
    }
}

function route(event){
    event = event || window.event;
    event.preventDefault();
    window.history.pushState(null, "", event.target.href);
    locationHandler();
};

function locationHandler(){
    let location = window.location.pathname;
    
    if (location.length == 0) {
        location = "/";
    }

    if (routes[location] === undefined){
        location = "/";
    }
    const route = routes[location];

    fetch(route.url)
    .then(response => response.text())
    .then(result => document.querySelector("#app").innerHTML = result)
    
    document.title = route.title;

    
    const scriptsContainer = document.querySelector("#scripts")
    scriptsContainer.innerHTML = "";

    if (route.src) {
        route.src.forEach(url => {
            var script = document.createElement('script');
            script.src = url;    
            script.defer = true;
    
            scriptsContainer.appendChild(script);
        })
    }
}

window.addEventListener('popstate', (e)=>{
    locationHandler()
});
addEventListener("DOMContentLoaded", (e)=>{
    locationHandler()
})

document.querySelectorAll('.route').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        history.pushState(null, '', this.href);
        document.querySelectorAll('.nav-button-selected').forEach(item => {
            item.classList.remove("nav-button-selected");
        })
        link.classList.add("nav-button-selected");
        locationHandler();
    });
});
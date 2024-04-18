const routes ={
    "#": {
        url: "Views/home.html",
        title: "Home",
        button: "home-button"
    },
    "#map": {
        url: "Views/map.html",
        title: "Map",
        button: "map-button",
        src: [{url: "https://api-maps.yandex.ru/2.1/?apikey=4eca7cbc-2734-4698-a824-91ad09045a1f&lang=ru_RU", static: true}, {url: "JS/map.js"}]
    },
    "#time": {
        url: "Views/time.html",
        title: "Time",
        button: "time-button",
        src: [{url: "JS/displayTimer.js", type: "module"}]
    }
}

function locationHandler(){
    let location = window.location.hash;

    if (routes[location] == undefined){
        location = "#";
    }
    const route = routes[location];

    fetch(route.url)
    .then(response => response.text())
    .then(result => {
        document.querySelector("#app").innerHTML = result; 
        const scriptsContainer = document.querySelector("#scripts")
        const staticScriptsContainer = document.querySelector("#static-scripts")
        scriptsContainer.innerHTML = "";

        if (route.src) {
            for (let index = 0; index < route.src.length; index++) {
                if (route.src[index].installed) {
                    continue
                }

                const type = route.src[index].type;
                let script = document.createElement('script');
                script.src = route.src[index].url;    
                script.defer = true;
                script.async = false;
                script.type = type ? type : ""
                
                if (route.src[index].static) {
                    staticScriptsContainer.appendChild(script);
                    route.src[index].installed = true
                }
                else{
                    scriptsContainer.appendChild(script);
                }
            }
        }
        console.log('Add scripts')
    })
    
    document.title = route.title;

    document.querySelectorAll(".nav-button-selected").forEach(item => item.classList.remove("nav-button-selected"));

    document.getElementById(route.button).classList.add("nav-button-selected");
}

window.addEventListener('popstate', (e)=>{
    locationHandler()
});
addEventListener("DOMContentLoaded", (e)=>{
    locationHandler()
})
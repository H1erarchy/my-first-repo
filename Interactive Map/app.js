// create map

//create map logic 

const myMap = L.map('map',{
    center:[51.505, -0.09], 
    zoom:13,
})
//OSM Tiles
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    minZoom: '19',
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(myMap);

//Geolocation

const marker = L.marker([51.5, -0.09]).addTo(myMap)
.bindPopup('<p1><b>A pretty CSS3 popup</b><br></p1>')


//POLYGON

const polygon = L.polygon(latlngs, {
    color:'red',
    fillOpacity:0,
}).addTo(myMap)

//REDPIN

const redPin = L.icon({
    iconUrl:,
    iconSize:,
    iconAnchor:
})



// business locations

//create foursquare businesses


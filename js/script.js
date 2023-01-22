var map = L.map('map').setView([43.0982, -89.3811], 11);

var googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
    minZoom: 1,
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3'],
    attribution: '<a href="https://www.google.com/maps" target=_blank> Google Sattellite Map</a>' }).addTo(map);

// Adding the geoJason file and styling it.
var myStyle = {

    fillColor: "#2c7fb8",
    color: "#f20b0b",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.55
};

var geojason = L.geoJSON(alderdstricts1, {
    style:myStyle,
    onEachFeature:districtdata,
    
    
}).addTo(map);

// Function to bind popup to the geoJason data.
function districtdata(feature, layer){
    layer.bindPopup("<h3 class = 'heading'>" + "District: " + feature.properties.ALD_DIST + "</h3>" + 
    "<span class='headings'>Alder : </span>" + feature.properties.Representa + "<br>"
    + "<span class='headings'>Phone: </span>" + feature.properties.ContactRep + "<br>"
    + "<span class='headings'>Email: </span>" + feature.properties.Email + "<br>"
     + "<span class='headings'>District Area: </span>" + feature.properties.DistrictPo.toFixed(0)
     + "<span class='headings'></span>" + feature.properties.Image 
     )
    // Adding highlight on hover.
     layer.on('mouseover', function(e) {
        e.target.setStyle({
            fillColor:"#9debe8",
            fillOpacity: 0.45
        });
    });
    layer.on('mouseout', function(e) {
        e.target.setStyle({
            fillColor:"#2c7fb8",
            fillOpacity: 0.55
        });
    });

};



// Addint a Title to the map.
var title = L.control({position: 'topright'});
title.onAdd = function () {
    var div = L.DomUtil.create('div', 'Title');
    div.innerHTML = ' <div> Alder Districts - City of Madison </div> ';
    return div;
};
title.addTo(map);

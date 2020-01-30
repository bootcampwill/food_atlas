// Creating map object
var myMap = L.map("map", {
  center: [37.2758953, -104.6528618],
  zoom: 5
});

const API_KEY = "pk.eyJ1IjoibnN3ZWhsaSIsImEiOiJjazVnMnc2ZHowM244M2pxbTFlYWhzMXVwIn0.0CxW_QdppTZUjpTaUh8-dQ"

// Adding tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.dark",
  accessToken: API_KEY
}).addTo(myMap);

//eventListener
d3.selectAll("#selDataset").on("change", selection);
function selection() {
  var selectedVariable = d3.select("#selDataset");
  var variable = selectedVariable.property("value");
  console.log(variable)
}

// Load in geojson data
// these variables would get values from dropdown menu in the index.html
var category = "health"
var variableName = "Adult obesity rate, 2013"
var variableCode = "PCT_OBESE_ADULTS13"

var geoData = `/api/data/${category}`;
var geojson;

// Grab data with d3
d3.json(geoData, function (data) {

  console.log(data)

  //  choropleth layer
  geojson = L.choropleth(data, {

    // property to use
    valueProperty: variableCode,

    //  color scale
    scale: ["#ffffb2", "#0026b1"],

    // Number of breaks in step range
    steps: 10,

    // q for quartile, e for equidistant, k for k-means
    mode: "q",
    style: {
      // Border color
      color: "#666666",
      weight: 1,
      fillOpacity: 0.8
    },
    // need to fix the bindpop to push dynamic information

    // Binding a pop-up to each layer
    onEachFeature: function (feature, layer) {
      layer.bindPopup("County: " + feature.properties.NAME + `<br> ${variableName} : <br>` + feature.properties[`${variableCode}`]);
    }
  }).addTo(myMap);

  // Set up the legend
  var legend = L.control({ position: "topright" });
  legend.onAdd = function () {
    var div = L.DomUtil.create("div", "info legend");
    var limits = geojson.options.limits;
    var colors = geojson.options.colors;
    var labels = [];

    // Add min & max
    var legendInfo = `<h1> ${variableName} </h1>` +
      "<div class=\"labels\">" +
      "<div class=\"min\">" + limits[0] + "</div>" +
      "<div class=\"max\">" + limits[limits.length - 1] + "</div>" +
      "</div>";

    div.innerHTML = legendInfo;

    limits.forEach(function (limit, index) {
      labels.push("<li style=\"background-color: " + colors[index] + "\"></li>");
    });

    div.innerHTML += "<ul>" + labels.join("") + "</ul>";
    return div;
  };

  // Adding legend to the map
  legend.addTo(myMap);

});

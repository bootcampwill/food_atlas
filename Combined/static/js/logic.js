// Creating map object
var myMap = L.map("map", {
  center: [40, -100],
  zoom: 4,
  minZoom: 2,
  scrollWheelZoom: false
});

const API_KEY = "pk.eyJ1IjoibnN3ZWhsaSIsImEiOiJjazVnMnc2ZHowM244M2pxbTFlYWhzMXVwIn0.0CxW_QdppTZUjpTaUh8-dQ"

// Adding tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.light",
  accessToken: API_KEY
}).addTo(myMap);

//Updating the variable options when a different category is selected
//filter not working!!

d3.selectAll("#categories").on("change", menu);
function menu() {
  var url = "/api/data/variables"
  d3.json(url, function (response) {
    var selectedCategory = d3.select("#categories option:checked");
    var category = selectedCategory.property("value").toUpperCase();
    console.log(category)
    console.log(response)
    var results = response.filter(function (item) {
      console.log(item.CategoryCode);
      return item.CategoryCode == category;
    });

    // filling in the options for Variables menu
    var subjectFilter = d3.select("#selDataset")
    subjectFilter.selectAll("option").remove();

    results.forEach(item => {
      var row = subjectFilter.append("option")
      row.append("option").text(item.VariableName).attr("value", item.VariableCode);
    });
  });
}

//eventListener
d3.selectAll("#selDataset").on("change", selection);
function selection() {
  var selectedCategory = d3.select("#categories option:checked");
  var category = selectedCategory.property("value");
  var selectedVariable = d3.select("#selDataset option:checked").select("option");
  var variable = selectedVariable.attr("value");
  var title = selectedVariable.text()
  console.log("Variable :", variable)
  console.log(title)

  var variableName = title
  var variableCode = variable
  var geoData = `/api/data/${category}`;
  console.log("API", geoData)
  var geojson;

  //color options
  var colorScale = ["#0026b1", "#660f12", "#054f3a", "#a64102", "#3e0273", "#633f5b", "#024575"];
  selectedColor = colorScale[(Math.floor(Math.random() * 7))]
  console.log("random colour index ", selectedColor)

  // Grab data with d3
  d3.json(geoData, function (data) {

    console.log(data)

    //  choropleth layer
    geojson = L.choropleth(data, {

      // property to use
      valueProperty: variableCode,



      //  color scale
      scale: ["#ffffb2", selectedColor],

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

      // Binding a pop-up to each layer
      onEachFeature: function (feature, layer) {
        layer.bindPopup("County: " + feature.properties.NAME + `<br> ${variableName} : <br>` + feature.properties[`${variableCode}`]);
      }
    }).addTo(myMap);
    // Set up the legend
    // removing old legend
    d3.select(".legend").remove()

    var legend = L.control({ position: "topright" });
    legend.onAdd = function () {
      var div = L.DomUtil.create("div", "info legend");
      var limits = geojson.options.limits;
      var colors = geojson.options.colors;
      var labels = [];




      // Add min & max
      var legendInfo = ` ${variableName} ` +
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
    legend.addTo(myMap)

    //updating the graph

    var xdata = (data.features)
    var y = []
    var x = []
    var y = []
    for (i = 0; i < xdata.length; i++) {
      x.push(xdata[i].properties.NAME);
    }
    for (i = 0; i < xdata.length; i++) {
      y.push(xdata[i].properties[`${variableCode}`]);
    }


    var data = [
      {
        x: x,
        y: y,
        type: 'scatter',
        mode: 'markers',
        marker: {
          color: selectedColor,
        }
      }
    ];

    var layout = {
      title: {
        text: `${variableName}`,

        xref: 'paper',
        x: 0.05,
      },
      xaxis: {
        autorange: true,
        showticklabels: false,
        autotick: true,
        title: {
          text: "County",
        },
      },
      yaxis: {
        autorange: true,
        autotick: true,
        title: {
          text: `${variableName}`,
        }
      }
    };

    Plotly.react('bar', data, layout);

  });

}

// Load in geojson data
// these variables would get values from dropdown menu in the index.html
var category = "health"
var variableName = "Adult obesity rate, 2013"
var variableCode = "PCT_OBESE_ADULTS13"

var geojson;
var geoData = `/api/data/${category}`;

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
    var legendInfo = `<h3> ${variableName} </h3>` +
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

  //creating initial scatter 

  var initial = variableCode


  //Related Scatter 

  //extracting the x and y values


  var xdata = (data.features)
  var y = []


  var x = []

  //creating x-axis labels

  for (i = 0; i < 1000; i++) {
    x.push(xdata[i].properties.NAME);
  }

  var y = []
  for (i = 0; i < 1000; i++) {
    y.push(xdata[i].properties[`${initial}`]);
  }

  console.log(y)

  console.log(x)
  //creating the bar graph

  var data = [
    {
      x: x,
      y: y,
      type: 'scatter',
      mode: 'markers',
      marker: {
        color: "#0026b1",
      }
    }
  ];

  var layout = {
    title: {
      text: `${variableName}`,

      xref: 'paper',
      x: 0.05,
    },
    xaxis: {
      autorange: true,
      showticklabels: false,
      autotick: true,
      title: {
        text: "County",
      },
    },
    yaxis: {
      autorange: true,
      autotick: true,
      title: {
        text: "Indicator",
      }
    }
  };

  Plotly.react('bar', data, layout);

});

///new scatter to compare variables

//Filling options-Select -1

d3.selectAll("#categories2").on("change", menu2);
function menu2() {
  var url = "/api/data/variables"
  d3.json(url, function (response) {
    var selectedCategory = d3.select("#categories2 option:checked");
    var category = selectedCategory.property("value").toUpperCase();
    console.log(category)
    console.log(response)
    var results = response.filter(function (item) {
      console.log(item.CategoryCode);
      return item.CategoryCode == category;
    });

    // filling in the options for Variables menu
    var subjectFilter = d3.select("#selDataset2")
    subjectFilter.selectAll("option").remove();

    results.forEach(item => {
      var row = subjectFilter.append("option")
      row.append("option").text(item.VariableName).attr("value", item.VariableCode);
    });
  });
}
// Filling options-Select -2
d3.selectAll("#categories3").on("change", menu3);
function menu3() {
  var url = "/api/data/variables"
  d3.json(url, function (response) {
    var selectedCategory = d3.select("#categories3 option:checked");
    var category = selectedCategory.property("value").toUpperCase();
    // console.log(category)
    // console.log(response)
    var results = response.filter(function (item) {
      return item.CategoryCode == category;
    });

    // filling in the options for Variables menu
    var subjectFilter = d3.select("#selDataset3")
    subjectFilter.selectAll("option").remove();

    results.forEach(item => {
      var row = subjectFilter.append("option")
      row.append("option").text(item.VariableName).attr("value", item.VariableCode);
    });
  });
}

function updateData() {

  var selectedCategory1 = d3.select("#categories2 option:checked");
  var selectedCategory2 = d3.select("#categories3 option:checked");

  var category1 = selectedCategory1.property("value");
  var category2 = selectedCategory2.property("value");

  var selectedVariable1 = d3.select("#selDataset2 option:checked").select("option");
  var selectedVariable2 = d3.select("#selDataset3 option:checked").select("option");

  var variable1 = selectedVariable1.attr("value");
  var variable2 = selectedVariable2.attr("value");

  var title1 = selectedVariable1.text()
  var title2 = selectedVariable2.text()

  console.log("Category 1: ", category1)
  console.log("Category 2: ", category2)

  console.log("Variable1 :", variable1)
  console.log("Variable2 :", variable2)

  console.log(title1)

  var x = []
  var y1 = []
  var y2 = []

  var variabledata1 = `/api/data/${category1}`;
  var variabledata2 = `/api/data/${category2}`;

  // Grab x-data with d3
  d3.json(variabledata1, function (response) {
    console.log("X-Data", response)
    var xdata = response.features
    for (i = 0; i < xdata.length; i++) {
      if (xdata[i].properties[`${variable1}`]) {
        y1.push(xdata[i].properties[`${variable1}`]);
      }
    }
    for (i = 0; i < xdata.length; i++) {
      if (xdata[i].properties.NAME) {
        x.push(xdata[i].properties.NAME);
      }
    }
  })
  // Grab y-data with d3
  d3.json(variabledata2, function (data) {
    console.log("Y-Data", data)
    var ydata = data.features
    for (i = 0; i < ydata.length; i++) {
      if (ydata[i].properties[`${variable2}`]) {
        y2.push(ydata[i].properties[`${variable2}`]);
      }
    }
    console.log('y1 values are :', y1)
    console.log('y2 values are :', y2)

    //creating the scatter diagram
    var colorScale = ["#fc4242", "#fcd55d", "#baf5e2", "#a64102", "#872245", "#633f5b", "#024575"];
    var selectedColor = colorScale[(Math.floor(Math.random() * 7))]


    var trace1 = {
      x: x,
      y: y1,
      name: title1,
      type: 'scatter',
      mode: 'markers',
      autorange: true,
      autotick: true,
    };

    var trace2 = {
      x: x,
      y: y2,
      name: title2,
      xaxis: 'x2',
      yaxis: 'y2',
      type: 'scatter',
      mode: 'markers',

    };


    var data = [trace1, trace2];

    var layout = {
      colorway: ["#fc4242", "#fcd55d", "#baf5e2", "#a64102", "#872245", "#633f5b", "#024575"],
      showlegend: true,
      legend: {

        x: 10,
        xanchor: 'left',
        y: 1
      },
      xaxis: {
        autorange: true,
        autotick: true,
        showticklabels: false,
        title: {
          text: "County",
        },

      },

      xaxis2: {
        autorange: true,
        autotick: true,
        showticklabels: false,
        title: {
          text: "County",
        },

      },


      yaxis: {
        autorange: true,
        autotick: true,
        showticklabels: true,
        title: {
          text: title1,
        }

      },

      yaxis2: {
        autorange: true,
        autotick: true,
        showticklabels: true,
        title: {
          text: title2,
        }

      },
      grid: {
        rows: 1,
        columns: 2,
        pattern: 'independent',
        roworder: 'bottom to top'

      }
    };

    Plotly.react('scatter2', data, layout);

    var data = [
      {
        x: y1,
        y: y2,
        // text: text,
        type: 'scatter',
        mode: 'markers',
        marker: {
          color: selectedColor,
        }
      }
    ];

    var layout = {
      title: {
        text: 'Variables relationship',

        xref: 'paper',
        x: 0.05,
      },
      xaxis: {
        autorange: true,
        autotick: true,
        title: {
          text: `${title1}`,
        },
      },
      yaxis: {
        autorange: true,
        autotick: true,
        title: {
          text: `${title2}`,
        }
      }
    };

    Plotly.react('scatter', data, layout);

  })
}

//initial scatter

var trace1 = {
  x: [1],
  y: [1],
  type: 'scatter'
};

var trace2 = {
  x: [1],
  y: [1],
  xaxis: 'x2',
  yaxis: 'y2',
  type: 'scatter'
};


var data = [trace1, trace2];

var layout = {
  grid: {
    rows: 1,
    columns: 2,
    pattern: 'independent',
    roworder: 'bottom to top'
  }
};

Plotly.react('scatter2', data, layout);

var data = [
  {
    x: [1],
    y: [1],
    // text: text,
    type: 'scatter',
    mode: 'markers',
    marker: {
      color: "#631c33",
    }
  }
];

var layout = {
  title: {
    text: 'Variables relationship',

    xref: 'paper',
    x: 0.05,
  },
  xaxis: {
    title: {
      text: `Variable 1`,
    },
  },
  yaxis: {
    title: {
      text: `Variable 2`,
    }
  }
};

Plotly.react('scatter', data, layout);





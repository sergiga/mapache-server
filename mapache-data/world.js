module.exports = {
  "map": {
    "id": "world_map:0",
    "name": "World Map",
    "position": {
      "x": 41.6629,
      "y": -4.70562,
      "z": 0
    },
    "map": {
      "crs": "outdoor",
      "minZoom": 0,
      "maxZoom": 18,
      "floors": [
        {
          "main": true,
          "name": "World Map",
          "tileURL": "https://maps.rdnest.com/outdoor/{z}/{x}/{y}.png"
        }
      ]
    }
  },
  "nodes": [
    {
      "id": "center:0",
      "name": "Escuela de Ingeniería Informática",
      "tooltip": "Informática",
      "icon": "location_city",
      "position": {
        "x": 41.6627,
        "y": -4.70538,
        "z": 0
      },
      "map": {
        "crs": "indoor",
        "minZoom": 0,
        "maxZoom": 6,
        "height": 16384,
        "width": 16384,
        "floors": [
          {
            "name": "Sotano",
            "tileURL": "https://maps.rdnest.com/indoor/center0/floor0/{z}/{x}/{y}.png",
            "main": false
          },
          {
            "name": "Planta Baja",
            "tileURL": "https://maps.rdnest.com/indoor/center0/floor1/{z}/{x}/{y}.png",
            "main": false
          },
          {
            "name": "Planta 1",
            "tileURL": "https://maps.rdnest.com/indoor/center0/floor2/{z}/{x}/{y}.png",
            "main": false
          },
          {
            "name": "Planta 2",
            "tileURL": "https://maps.rdnest.com/indoor/center0/floor3/{z}/{x}/{y}.png",
            "main": true
          }
        ]
      }
    },
      {
        "id": "center:1",
        "name": "Facultad de Educación",
        "tooltip": "Educación",
        "icon": "location_city",
        "position": {
          "x": 41.662408,
          "y": -4.707049,
          "z": 0
        }
      },{
        "id": "center:2",
        "name": "Facultad de Ciencias",
        "tooltip": "Ciencias",
        "icon": "location_city",
        "position": {
          "x": 41.663499,
          "y": -4.705802,
          "z": 0
        }
      },
    {
      "id": "cluster:0",
      "name": "Campus Miguel Delibes",
      "tooltip": "Campus Miguel Delibes",
      "position": {
        "x": 41.662848,
        "y": -4.706303,
        "z": 0,
        "pannable": true
      },
      "icon": "location_city",
      "cluster": {
        "maxZoom": 18,
        "children": [
          "center:0",
          "center:1",
          "center:2"
        ]
      }
    },
    {
      "id": "cluster:1",
      "name": "Explotaciones",
      "position": {
        "x": 0,
        "y": 0,
        "z": 0
      },
      "icon": "location_city",
      "cluster": {
        "maxZoom": -1,
        "children": [
          "cluster:0"
        ]
      }
    }
  ]
};

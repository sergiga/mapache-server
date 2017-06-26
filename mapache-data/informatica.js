module.exports = {
  "map": {
    "id": "center:0",
    "name": "Escuela de Ingeniería Informática",
    "position": {
      "x": 41.6627,
      "y": -4.70538,
      "z": 0
    },
    "map": {
      "crs": "indoor",
      "minZoom": 0,
      "maxZoom": 6,
      "width": 16384,
      "height": 16384,
      "floors": [
        {
          "name": "Sotano",
          "tileURL": "https://maps.rdnest.com/indoor/center0/floor0/{z}/{x}/{y}.png"
        },
        {
          "name": "Planta Baja",
          "tileURL": "https://maps.rdnest.com/indoor/center0/floor1/{z}/{x}/{y}.png"
        },
        {
          "name": "Planta 1",
          "tileURL": "https://maps.rdnest.com/indoor/center0/floor2/{z}/{x}/{y}.png"
        },
        {
          "name": "Planta 2",
          "tileURL": "https://maps.rdnest.com/indoor/center0/floor3/{z}/{x}/{y}.png",
          "main": true
        }
      ]
    }
  },
  "nodes": [
    {
      "id": "center_cluster:2",
      "name": "Campus Miguel Delibes",
      "position": {
        "x": 41.6629,
        "y": -4.70562,
        "z": 0,
        "pannable": true
      },
      "icon": "location_city"
    }
  ]
}

module.exports = `{ "map":{"id":"world_map:0","name":"World Map","position":{"x":41.6629,"y":-4.70562,"z":0},"map":{"crs":"outdoor","floors":[{"main":true,"name":"World Map","tileURL":"https://maps.rdnest.com/outdoor/{z}/{x}/{y}.png" }]}} , "nodes":[{"id":"center:0","name":"Escuela de Ingeniería Informática","position":{"x":41.6627,"y":-4.70538,"z":0, "pannable":true},"tooltip":"Escuela de Ingeniería Informática","map":{"crs":"indoor","height":16384,"width":16384,"floors":[{"name":"Sotano","tileURL":"https://maps.rdnest.com/indoor/center0/floor0/{z}/{x}/{y}.png","main":false},{"name":"Planta Baja","tileURL":"https://maps.rdnest.com/indoor/center0/floor1/{z}/{x}/{y}.png","main":false},{"name":"Planta 1","tileURL":"https://maps.rdnest.com/indoor/center0/floor2/{z}/{x}/{y}.png","main":false},{"name":"Planta 2","tileURL":"https://maps.rdnest.com/indoor/center0/floor3/{z}/{x}/{y}.png","main":true}]},"icon":"location_city"},{"id":"cluster:0","name":"Campus Miguel Delibes","position":{"x":41.6629,"y":-4.70562,"z":0,"pannable":true },"icon":"location_city","cluster":{"maxZoom":-2,"children":["center:0"]}},{"id":"cluster:1","name":"Explotaciones","position":{"x":0.0,"y":0.0,"z":0 },"icon":"location_city","cluster":{"maxZoom":-1,"children":["cluster:0"]}}]}`;
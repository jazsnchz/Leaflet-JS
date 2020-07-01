var map = L.map('map').setView([-0.067116, -78.403128], 11); 
L.Control.measureControl().addTo(map);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-0.257128, -78.546270]).addTo(map)
    .bindPopup('Kevin Guchagmira House')
    . openPopup();
L.marker([-0.355708, -78.528793]).addTo(map)
    .bindPopup('Jazmín Sánchez House')
    .openPopup();
L.marker([-0.225069,-78.5168959]).addTo(map)
    .bindPopup('ITS Yavirac')
    .openPopup();
L.marker([-0.2537563,-78.5330725]).addTo(map)
    .bindPopup('Steven Chinchin House')
    .openPopup();
L.marker([-0.0866811,-78.5073176]).addTo(map)
    .bindPopup('Bryan Andrade House')
    .openPopup();
L.marker([-0.2235145,-78.5113281]).addTo(map)
    .bindPopup('Jeniffer Guañuna House')
    .openPopup();

L.marker([-0.071850, -78.435068]).addTo(map)
    .bindPopup('Francisco Jumbo House')
    .openPopup();

L.marker([-0.290397, -78.552108]).addTo(map)
    .bindPopup('Kevin Quemag House')
    .openPopup();

L.marker([-0.241768, -78.526977]).addTo(map)
    .bindPopup('Michael Pastrana House')
    .openPopup();

L.marker([-0.352055, -78.528046]).addTo(map)
    .bindPopup('Mauricio Matango House')
    .openPopup();

var coordenadasInstiCasas = [
    [    [-0.257128, -78.546270],[-0.225069,-78.5168959]],
    [    [-0.355708, -78.528793],[-0.225069,-78.5168959]],
    [    [-0.2537563,-78.5330725],[-0.225069,-78.5168959]],
    [    [-0.0866811,-78.5073176],[-0.225069,-78.5168959]],
    [    [-0.0866811,-78.5073176],[-0.225069,-78.5168959]],
    [    [-0.071850, -78.435068],[-0.225069,-78.5168959]],
    [    [-0.290397, -78.552108],[-0.225069,-78.5168959]],
    [    [-0.241768, -78.526977],[-0.225069,-78.5168959]],
    [    [-0.352055, -78.528046],[-0.225069,-78.5168959]],
  [    [-0.2235145,-78.5113281],[-0.225069,-78.5168959]],

]
for(let i=0 ;i<=coordenadasInstiCasas.length ;i++){
    var polyline = L.polyline(coordenadasInstiCasas[i], {color: colorRandom()}).addTo(map);
}
function colorRandom(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

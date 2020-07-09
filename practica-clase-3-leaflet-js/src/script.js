var map = L.map('map').setView([-0.067116, -78.403128], 13);

var coodenadasCasaInstituto = [
    [    [-0.257128, -78.546270],[-0.225069,-78.5168959]],
    [    [-0.355708, -78.528793],[-0.225069,-78.5168959]],
    [    [-0.2537563,-78.5330725],[-0.225069,-78.5168959]],
    [    [-0.0866811,-78.5073176],[-0.225069,-78.5168959]],
    [    [-0.2235145,-78.5113281],[-0.225069,-78.5168959]],
    [    [-0.071850, -78.435068],[-0.225069,-78.5168959]],
    [    [-0.290397, -78.552108],[-0.225069,-78.5168959]],
    [    [-0.241768, -78.526977],[-0.225069,-78.5168959]],
    [    [-0.352055, -78.528046],[-0.225069,-78.5168959]],
]
var nombresCoordenadas = ['Kevin Guachagmira House','Jazmin Sanchez House','Steven Chinchin House','Brayan Andrade House','Jeniffer Guañuna House'
                        ,'Francisco Jumbo House','Kevin Quemag House','Michael Pastrana House','Mauricio Matango House']
var unionesDistancia = [];


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

drawLine(coodenadasCasaInstituto);
medirDistancia(coodenadasCasaInstituto);
mostrarDireccion(coodenadasCasaInstituto,nombresCoordenadas);

function mostrarDireccion(coordenadas, persona){
    let direccion = [];
    let casa=0;
    for(let i =0; i<coordenadas.length;i++){
        for(let j = 0; j<2;j++){
            if(j==0)
            {
                direccion = coordenadas[i][j];
                L.marker(direccion).addTo(map)
                .bindPopup("Desde  "+persona[casa]+ " la distancia es:"+ unionesDistancia[casa])
                .openPopup();
                casa++;
            }

        }
    }
    L.marker([-0.225069,-78.5168959]).addTo(map)
    .bindPopup("Instituto Tecnológico Superior Yavirac")
    .openPopup();
} 

function drawLine (coordenadas){
    for(let i=0 ;i<coordenadas.length ;i++){
        var polyline = L.polyline(coordenadas[i], {color: colorRandom()}).addTo(map);
    }
}

function colorRandom(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function medirDistancia(coordenadas)=>{
    let distancia = 0;
    let ejeX = -0.225069;
    let ejeY = -78.5168959;
    let instancias = []
    for(let i =0; i<coordenadas.length;i++){
        for(let j = 0; j<2;j++){
            if(j==0){  
                instancias = coordenadas[i][j];
                distancia = Math.sqrt(Math.pow(ejeX-instancias[0],2)+Math.pow(ejeY-instancias[1],2))
                unionesDistancia.push(distancia);
                console.log(distancia);
            }
        }
    }
}

function transformarDistanciaEnKm(coordenadas)=>{
    let instituto = turf.point([-0.225069,-78.5168959]);
    let almacen=[];
    let options = {units: 'kilometers'};
    let distance = 0;
    let direciones =0
    for(let i=0;i<coordenadas.length;i++){
        for(let j=0;j<2;j++){
            if(j==0){
                almacen = coordenadas[i][j];
                let casa = turf.point(almacen);
                distance = turf.distance(instituto,almacen , options);
                distanciasKm.push(distance);
                console.log(distanciasKm[direciones] + " casa de " + nombresCoordenadas[direciones])
                direciones++;
            }
        }
    }
}
function ordenarDistancias(){
    let aux=0;
    for(let i=1 ;i<distanciasKm;i++){
        for(let j=0;j<distanciasKm-1;j++){
            if(distanciasKm[j]>distanciasKm[j+1]){
                aux = distanciasKm[j];
                distanciasKm[j]=distanciasKm[j+1];
                distanciasKm[j+1]=auxS
            }
        }
    }
    
    console.log(Math.min.apply(null,distanciasKm))
    console.log(Math.max.apply(null,distanciasKm))

    console.log(distanciasKm)
}

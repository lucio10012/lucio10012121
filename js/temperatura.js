// Configuración de Firebase
var firebaseConfig = {
  apiKey: "eDQDzfdOyT4c977sCBL0ksd48BkqskFp48S06qFb",
  authDomain: "proyectocompostera-fed11.firebaseapp.com",
  databaseURL: "https://proyectocompostera-fed11-default-rtdb.firebaseio.com",
  projectId: "proyectocompostera-fed11",
  storageBucket: "proyectocompostera-fed11.appspot.com",
  messagingSenderId: "119011841759",  
  appId: "1:119011841759:web:abcdef123456" 
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

// Cargar Google Charts
google.charts.load('current', { packages: ['gauge'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
var data = google.visualization.arrayToDataTable([
  ['Label', 'Value'],
  ['', 0]  
]);

var options = {
  width: 500,
  height: 300,
  redFrom: 60, redTo: 80,
  yellowFrom: 40, yellowTo: 60,
  greenFrom: 0, greenTo: 40,
  minorTicks: 5,
  max: 80  
};

var chart = new google.visualization.Gauge(document.getElementById('chart_div'));

// Dibujar gráfico inicialmente
chart.draw(data, options);

database.ref('compostaje/estado_actual/tempera_compos').on('value', function(snapshot) {
  var compostData = snapshot.val();  
  data.setValue(0, 1, compostData);  
  chart.draw(data, options);  
});
}

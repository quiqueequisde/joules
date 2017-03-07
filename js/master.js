$(window).load(function() {
  $("#splashScreenLoader").addClass("animated fadeOut");
  setTimeout(function(){
      $("#splashScreen").addClass("animated slideOutDown");
      setTimeout(function(){
          $("#dedication").addClass("animated fadeOutDown");
      }, 2000);
  }, 2000);
});

function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

$(document).ready(function(){
  $('.collapsible').collapsible();
});

function calcular(){
  var masa = $("#masa").val();
  var gravedad = $("#gravedad").val();
  var altura = $("#altura").val();
  var espacio = $("#espacio").val();
  var tiempo = $("#tiempo").val();
  console.log("DADAS.");
  console.log("masa= " + masa);
  console.log("gravedad= " + gravedad);
  console.log("altura= " + altura);
  console.log("espacio= " + espacio);
  console.log("tiempo= " + tiempo);

  console.log("CALCULO.");

  // energia potencial
  var energiaPotencial = masa * gravedad * altura;
  console.log("Energia Potencial= " + energiaPotencial);
  $("#energiaPotencial").text(masa + " × " + gravedad + " × " + altura);
  $("#energiaPotencialResultado").text(energiaPotencial);
  $("#energiaPotencialMecanica").text(energiaPotencial);

  // velocidad y velocidad al cuadrado
  var velocidadNormal = espacio /= tiempo;
  var velocidad = velocidadNormal * velocidadNormal;
  console.log("Velocidad²= " + velocidad);

  // energia cinetica
  var mitadMasa = 0.5 * masa;
  var energiaCinetica = mitadMasa * velocidad;
  $("#energiaCinetica").text("½ × " + masa + " × " + velocidadNormal + "²");

  // energia mecanica
  if (isNaN(energiaCinetica) == true){
    var energiaCinetica = 0;
    console.log("Energia Cinetica= NaN");
    $("#energiaCineticaResultado").text("NaN");
    $("#energiaCineticaMecanica").text("NaN");
  } else {
    console.log("Energia Cinetica= " + energiaCinetica);
    $("#energiaCineticaResultado").text(energiaCinetica);
    $("#energiaCineticaMecanica").text(energiaCinetica);
  }
  var energiaMecanica = energiaCinetica += energiaPotencial;
  console.log("Energia Mecanica= " + energiaMecanica);
  $("#energiaMecanicaResultado").text(energiaMecanica);
}

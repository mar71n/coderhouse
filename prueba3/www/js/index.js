var app = {
    //...
    //...,
    initialize: function(){
        document.getElementById("mensage").innerText += "ARRANCO...";
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onBatteryStatus: function(evt) {
        // Manejar el evento
        //document.getElementById("mensage").
        // alert("Carga: " + evt.level + "%; Enchufado: " + evt.isPlugged);
        document.getElementById("mensage").innerText += "Carga: " + evt.level + "%; Enchufado: " + evt.isPlugged;
        document.getElementById('container').style.height=evt.level + "%";
        document.getElementsByTagName('h1')[0].innerHTML=evt.level + "%";
        var p = document.querySelector('.received');
        var status = evt.isPlugged ? "Enchufado" : "Desenchufado";
        p.innerHTML = p.innerHTML + "<br />" + status;
    },
    onBatteryCritical: function(evt) {
        // Que hacer cuando llegue a nivel critico
        document.getElementById("mensage").innerText += "Nivel de bateria critico " + evt.level + "%\nBuscar enchufe!";
    },
    onDeviceReady: function() {
        document.getElementById("mensage").innerText += "arranco...";
        app.receivedEvent('deviceready');
        window.addEventListener('batterystatus', app.onBatteryStatus, false);
        window.addEventListener('batterycritical', app.onBatteryCritical, false);
    },
 }
var app = {
    //...
    //...,
    initialize: function(){
        $.mobile.allowCrossDomainPages = true;
        this.loadTXTDoc();
    },
    loadTXTDoc: function ()
    {
    var retval="nada";
    var xmlhttp;
    if (window.XMLHttpRequest)
        {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
        }
    else
        {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        }
    xmlhttp.onreadystatechange=function() // cuando el open resulta exitoso
        {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
            {
            var txt_provincias = xmlhttp.responseText; // lo que respondio el open
            var provincias = txt_provincias.split(",");
            //alert(txt_provincias);
            document.getElementsByClassName("subtes")[0].innerText = txt_provincias;
            //poner_select("provincias", provincias, "provincias");
            //document.getElementsByName("provincias")[0].onchange = crear_localidades;
            //document.getElementsByName("provincias")[0].focus();
            //document.getElementById("esperando").style.display = "none";
            }
        }
    //document.getElementById("esperando").style.display = "block";
    xmlhttp.open("GET","http://www.metrovias.com.ar/Subterraneos/Estado?site=Metrovias",true);
    xmlhttp.send();
    }
}
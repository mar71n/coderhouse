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
            var txt_subtes = xmlhttp.responseText; // lo que respondio el open
            var html_subtes = "";
            var jsubtes = JSON.parse(txt_subtes);
            for (var j = 0; j < jsubtes.length; j++){
                if (jsubtes[j].LineStatus == "Normal"){
                    html_subtes += "<div style=\'color:green\'> <b>" + jsubtes[j].LineName + "</b> " + jsubtes[j].LineStatus + "</div>  -  Frecuencia: " + jsubtes[j].LineFrequency / 60 + " minutos <p>";
                } else{
                    html_subtes += "<div style=\'color:red\'> <b>" + jsubtes[j].LineName + "</b> " + jsubtes[j].LineStatus + "</div> <p>";
                }
            }
            document.getElementsByClassName("subtes")[0].innerHTML = html_subtes;
            }
        }
    xmlhttp.open("GET","http://www.metrovias.com.ar/Subterraneos/Estado?site=Metrovias",true);
    xmlhttp.send();
    }
}
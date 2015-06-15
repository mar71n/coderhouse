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
            document.getElementsByClassName("subtes")[0].innerText = txt_subtes;
            }
        }
    xmlhttp.open("GET","http://www.metrovias.com.ar/Subterraneos/Estado?site=Metrovias",true);
    xmlhttp.send();
    }
}
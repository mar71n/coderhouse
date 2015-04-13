function loadXMLDoc()
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
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    var txt_provincias = xmlhttp.responseText;
    var provincias = txt_provincias.split(",");
    poner_select("provincias", provincias);
    document.getElementById("esperando").style.display = "none";
    }
  }
document.getElementById("esperando").style.display = "block";
xmlhttp.open("GET","ajax02.txt",true);
xmlhttp.send();
}

function loadXMLDoc()
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
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    var txt_provincias = xmlhttp.responseText;
    var provincias = txt_provincias.split(",");
    poner_select("provincias", provincias, "provincias");
    document.getElementsByName("provincias")[0].onchange = crear_localidades;
    document.getElementsByName("provincias")[0].focus();
    //document.getElementById("esperando").style.display = "none";
    }
  }
//document.getElementById("esperando").style.display = "block";
xmlhttp.open("GET","provincias.txt",true);
xmlhttp.send();
}

function loadXMLDoc_localidades(provincia)
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
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    var json_localidades = xmlhttp.responseText;
    poner_select("localidades", eval(json_localidades), "localidades");
    }
  }
xmlhttp.open("GET","localidades.php?param_prov=" + provincia,true);
xmlhttp.send();
}

function poner_select(nombre, data, donde){
    var txt_select ="<select name='" + nombre + "'>";
    largo = data.length;
    for (j=0; j<largo; j++){
        txt_select += "<option value='" + data[j] + "'>" + data[j] + "</option>";
    }
    txt_select += "</select>";
    document.getElementById(donde).innerHTML = txt_select;
}

function crear_localidades(){
    var provincia = document.getElementsByName("provincias")[0].value;
    document.getElementById("esperando").style.display="inline";
    loadXMLDoc_localidades(provincia);
    setTimeout(function(){document.getElementById("esperando").style.display="none";},200);
}

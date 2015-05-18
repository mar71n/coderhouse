# coderhouse
Ejercicios curso javascript en coderhouse

[https://coderhouse-gba.slack.com/]

Los drivers del Samsung
[http://www.samsung.com/ar/support/usefulsoftware/KIES/]

ANT lo descargo de 
[http://ant.apache.org/index.html]

SDK lo tengo en:

`C:\Program Files (x86)\Android\android-sdk\platform-tools\`

`C:\Program Files (x86)\Android\android-sdk\tools\`

##Configurar el telefono##

####Habilitar modo desarrollador en Android 4.2####
Como tengo 4.1 el menu de desarrollador esta expuesto en:
`Ajustes -> Opciones de desarrollador`
Esto me permite habilitar depuración USB, etc sin mas.

####Habilitar Android para aceptar aplicaciones de origenes desconocidos (no Play Store):####
`Ajustes -> Seguridad -> Fuentes desconocidas`

####Habilitar depuracion por USB####
`Ajustes -> Opciones de desarrollador -> Depuración de USB`

##Versión de Android##
Como quiereo que compile para mi Android 4.1.2, una vez creada la aplicacion en `\[nombreApp]\config.xml` agregar estas lineas
```
    <preference name="android-minSdkVersion" value="16" />
    <preference name="android-maxSdkVersion" value="16" />
    <preference name="android-targetSdkVersion" value="16" />
```
Donde 16 es la version del API en el SDK

##Plugin##

```
#cordova plugin add org.apache.cordova.device
...
WARNING: org.apache.cordova.device has been renamed to cordova-plugin-device.
...
```

```
#phonegap plugin list
cordova-plugin-whitelist 1.0.0 "Whitelist"
org.apache.cordova.device 0.3.0 "Device"
```

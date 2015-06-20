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

## Reinstalar phonegap y cordova con las versiones indicadas
####desinstalar las versiones actuales:####
`$npm uninstall -g phonegap cordova`
####instalar la versión testeadas:####
```
>npm install phonegap@4.2.0-0.26.0
>npm install cordova@4.3.0
```
Después te pide instalar la API 19 con el sdk manager.
Alcanza con instalar **SDK Platform**

Uso el **AVD** (Android Virtual Device / emulador)
`Nexus One, con Android 4.1.2`

####Ver que devices hay conectadas
```
$ adb devices
List of devices attached
emulator-5554   device
4204d898d6b05100        device
```

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
#cordova plugin add cordova-plugin-device
```

```
#phonegap plugin list
cordova-plugin-device 1.0.0 "Device"
cordova-plugin-whitelist 1.0.0 "Whitelist"
```

Configuración manual del proxy en el AVD:

01. Go to Home Screen
02. Click on Menu
03. Click on Settings
04. In Wireless & Networks category, click More…
05. Click Mobile Networks
06. Click Access Point Names
07. Click TelKila
08. Enter Proxy and Port
09. Enter Username and Password if required

## Crear proyecto en blanco con jquery-mobile

```
$ phonegap create prueba8 --id com.coderhouse.prueba8 --name "00 Prueba 8" --template jquery-mobile-starter
```

﻿document.addEventListener("deviceready", onDeviceReady, false);


function CarregaLogin() {
    var usu = jQuery.parseJSON(localStorage.getItem("USUARIO"));
    if (usu != null) {
        jQuery('#EMAIL').val(usu.EMAIL);
        jQuery('#SENHA').val(usu.SENHA);
    }
}

function BuscaLogin() {

    if (jQuery('#EMAIL').val() != '' && jQuery('#SENHA').val() != '') {
        var EMAIL = jQuery('#EMAIL').val();
        var SENHA = jQuery('#SENHA').val();
        var usu = jQuery.parseJSON(Login(EMAIL, SENHA, null, null));
        if (usu != null) {
            CarregaUSUARIO(usu);
            window.location.assign("inicio.html");
        }
        else {
            ExibeMensagem("Usuário ou senha inválidos");
        }
    }
}

function CarregaUSUARIO(data) {

    if (data.ID_USUARIO == '') {
        return false;
    }
    else {
        localStorage.setItem("USUARIO", JSON.stringify(data));
    }
}

function Registrar() {
    window.location.assign("registro.html")
}

function ExibeMensagem(texto) {


    alert(texto);
//    navigator.notification.alert(
//    texto,                  // message
//    alertDismissed,         // callback
//    'Alerta',            // title
//    'Ok'                  // buttonName
//)           ;

}

function CarregaTelaTeste() {

        jQuery('#EMAIL').val('vitorcastro78@gmail.com');
        jQuery('#SENHA').val('lara2308');
    
}


jQuery(document).ready(function myfunction() {

    CarregaTelaTeste();

});


function onDeviceReady() {
    var optionsWatchPosition = { frequency: 3000, enableHighAccuracy: true };
    navigator.geolocation.watchPosition(success, error, optionsWatchPosition);
}

function success(pos) {
    var crd = pos.coords;
    localStorage.setItem('latitude', crd.latitude);
    localStorage.setItem('longitude', crd.longitude);
};
function error(err) {
    alert('Localização desabilitada, favor habilitar a localização');
};

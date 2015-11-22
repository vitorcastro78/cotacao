﻿
var optionsWatchPosition = { frequency: 3000, enableHighAccuracy: true };
navigator.geolocation.watchPosition(success, error, optionsWatchPosition);





function CarregaMenu(pagina) {
    jQuery("#maincontent").load(pagina + '#content');
}

function CarregaTela() {
    var usu = sessionStorage.getItem("Usuario");
    jQuery("#infousu").text(usu);
}

function PreparaSistema(pagina) {
    CarregaMenu(pagina);
    CarregaTela();
    MenuAdmin();
}

function success(pos) {

    var crd = pos.coords;

    localStorage.setItem('latitude', crd.latitude);
    localStorage.setItem('longitude', crd.longitude);
};

function error(err) {
    alert('ERROR(' + err.code + '): ' + err.message);
};

function MenuAdmin() {

        var usu = jQuery.parseJSON(localStorage.getItem("USUARIO"));
        if (usu.ID_TP_USUARIO == '2')
        {
            jQuery("#ADMINAREA").show();
        }
        else {
            jQuery("#ADMINAREA").hide();
        }
}


function ExibeMensagem(texto) {

    navigator.notification.alert(
    texto,                  // message
    alertDismissed,         // callback
    'Atenção',            // title
    'Ok'                  // buttonName
);
}
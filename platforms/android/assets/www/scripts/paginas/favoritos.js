﻿
var data = '';
var ordem = '';
var cpo_tx_venda = 'VALOR_COTACAO';
var cpo_tx_compra = 'VALOR_COTACAO_COMPRA';
var cpo_distancia = 'DISTANCIA';
var ord_distancia = false;
var ord_tx_venda = false;
var ord_tx_compra = false;
var IOF = jQuery.parseJSON(localStorage.getItem('SYSCONFIG'))[0].IOF;


function BuscarEstabelecimento(campo, ordena) {
    BloqueiaTela("Carregando...");
    jQuery('#DIVESTABELECIMENTO').html('');

    var usu = jQuery.parseJSON(localStorage.getItem("USUARIO"));
    data = jQuery.parseJSON(RetornaFavoritosUsuario(usu.ID_USUARIO, null, ERROCONEXAO));
    if (data.length > 0) {
        jQuery.each(data, function () {
                    this.VALOR_COTACAO = calculoVenda(this.TAXA_VENDA, this.VALOR_COTACAO,IOF).toFixed(2);
                    this.VALOR_COTACAO_COMPRA = calculoCompra(this.TAXA_COMPRA, this.VALOR_COTACAO_COMPRA).toFixed(2);
                    this.DISTANCIA = parseFloat(calculoDistancia(this.LATITUDE, this.LONGITUDE));
        });
    }
    CarregaDados(data);
    DesbloqueiaTela();//ordenadistancia
}

function CarregaFiltros() {
    jQuery('#DIVESTABELECIMENTO').append("<p><div>" +
                            "<div class='one-third center-text'>" +
                            "<a onclick='OrdenaBusca(this,cpo_tx_venda,ord_tx_venda);' id='ordenatxvenda'> <label class='contact-text' style='color:white;'> Venda </label> <i class='fa fa-sort-amount-asc' style='font-size:18px; color:white;'></i></a>" +
                            "</div>" +
                            "<div class='one-third center-text'>" +
                            //  "<a onclick='OrdenaBusca(this,cpo_tx_compra,ord_tx_compra);' id='ordenatxcompra'><label class='contact-text' style='color:white;'> Compra </label><i class='fa fa-sort-amount-asc' style='font-size:18px; color:white;'></i></a>" +
                            "</div>" +
                            "<div class='one-third last-column center-text'>" +
                            "<a onclick='OrdenaBusca(this,cpo_distancia,ord_distancia);' id='ordenadistancia'><label class='contact-text' style='color:white;'> Distância </label><i class='fa fa-sort-amount-asc' style='font-size:18px; color:white;'></i></a>" +
                            "</div>" +
                            "</div></p>");
}

function FiltraBusca(campo, ordena) {

    data = OrdenaResultados(campo, ordena, data);
    jQuery('#DIVESTABELECIMENTO').html('');
    //  CarregaFiltros();
    CarregaDados(data);
}

function CarregaDados(data) {
    debugger
    if (data.length > 0) {
        jQuery.each(data, function () {
            jQuery('#DIVESTABELECIMENTO').append(CarregaEstabelecimento(this));
        });
    }
    else {
        jQuery('#DIVESTABELECIMENTO').append(MensagemRetornoVazioBusca());
    }

}

function OrdenaBusca(obj, campo, ordena) {

    FiltraBusca(campo, ordena);

    if (ordena == true) {
        if (obj.id == 'ordenatxvenda') {
            document.getElementById(obj.id).innerHTML = "<label class='contact-text' style='color:white;'> Venda </label><i class='fa fa-sort-amount-desc' style='font-size:18px; color:white;'></i>";
            ord_tx_venda = false;

        }
        if (obj.id == 'ordenatxcompra') {
            //document.getElementById(obj.id).innerHTML = "<label class='contact-text' style='color:white;'> Compra </label><i class='fa fa-sort-amount-desc' style='font-size:18px; color:white;'></i>";
            //ord_tx_compra = false;
        }
        if (obj.id == 'ordenadistancia') {
            document.getElementById(obj.id).innerHTML = "<label class='contact-text' style='color:white;'> Distância </label><i class='fa fa-sort-amount-desc' style='font-size:18px; color:white;'></i>";
            ord_distancia = false;
        }
    }
    else {

        if (obj.id == 'ordenatxvenda') {
            document.getElementById(obj.id).innerHTML = "<label class='contact-text' style='color:white;'> Venda </label><i class='fa fa-sort-amount-asc' style='font-size:18px; color:white;'></i>";
            ord_tx_venda = true;
        }
        if (obj.id == 'ordenatxcompra') {
            //document.getElementById(obj.id).innerHTML = "<label class='contact-text' style='color:white;'> Compra </label><i class='fa fa-sort-amount-asc' style='font-size:18px; color:white;'></i>";
            //ord_tx_compra = true;
        }
        if (obj.id == 'ordenadistancia') {
            document.getElementById(obj.id).innerHTML = "<label class='contact-text' style='color:white;'> Distância </label><i class='fa fa-sort-amount-asc' style='font-size:18px; color:white;'></i>";
            ord_distancia = true;
        }
    }


}

function calculoDistancia(latPara, longPara) {

    var lat = localStorage.getItem('latitude');
    var long = localStorage.getItem('longitude');

    var km = d = GeoCodeCalc.CalcDistance(lat, long, latPara, longPara, GeoCodeCalc.EarthRadiusInKilometers);
    return (km).toString().substring(0, 4);
}

function CarregaEstabelecimento(data) {

    //var html =
    //"<div id='" + data.ID_ESTABELECIMENTO + "' class='big-notification static-notification-white'>" +
    //"<div>" +
    //"<strong><label class='contact-text'>" + data.NOME + "</label></strong> " +
    //"</div>" +
    //"<div class='one-half'>" +
    ////"<label class='contact-text'> " + data.FONE + "</label>" +
    //"<label class='contact-text'>Venda : R$ " + data.VALOR_COTACAO + " </label>" +
    //"<a onclick='MostraMapa(this);' id='" + data.ID_ESTABELECIMENTO + "_" + data.SIMBOLO + "' class='button button-white'><i class='fa fa-map-marker' style='font-size:18px; color:#0489B1;'></i></a>" +
    //"</div>" +
    //"<div class='two-half last-column'>" +
    //"<span class='span-stars'>" +
    //"<i class='fa fa-star'></i>" +
    //"<i class='fa fa-star'></i>" +
    //"<i class='fa fa-star'></i>" +
    //"<i class='fa fa-star'></i>" +
    //"<i class='fa fa-star-o'></i>" +
    //"</span>" +
    //// "<label class='contact-text'>Venda: </label>" +
    ////"<label class='contact-text'>R$ " + data.VALOR_COTACAO + "</label>" +
    //"<label class='contact-text'>Km " + data.DISTANCIA + "</label>" +
    //  "<a onclick='check(this);' id='" + data.ID_ESTABELECIMENTO + "_" + data.SIMBOLO + "' class='button button-white'><i class='fa fa-star' style='font-size:18px; color:#0489B1;'></i></a>" +
    //"</div>" +
    // "<div>" +
    //MontaInfo(data.RETIRADA, data.DELIVERY, data.RECARGA)+//"<label class='contact-text'>" + data.NOME + "</label>" +
    //"</div>" +
    //"</div>";

    //return html;

    var html =
 "<div id='" + data.ID_ESTABELECIMENTO + "' class='big-notification static-notification-white'>" +
 "<div>" +
 "<strong><label>" + data.NOME + "</label></strong> " +
 "</div>" +
 "<div class='one-half'>" +
 "<label>Moeda : " + data.SIMBOLO + "</label>" +
 "<label>Venda : R$ " + data.VALOR_COTACAO + " </label>" +
 //"<label class='contact-text'>Compra : R$ " + data.VALOR_COTACAO_COMPRA + " </label>" +
 //"<label class='contact-text'>R$ " + data.VALOR_COTACAO_COMPRA + "</label>" +// + + data.VALOR_COTACAO + "</label>" +
  //"<label class='contact-text'> " + venda + "</label>" +
 "</div>" +
 "<div class='two-half last-column'>" +
 "<span class='span-stars'>" +
 "<i class='fa fa-star'></i>" +
 "<i class='fa fa-star'></i>" +
 "<i class='fa fa-star'></i>" +
 "<i class='fa fa-star'></i>" +
 "<i class='fa fa-star-o'></i>" +
 "</span>" +
  //"<label class='contact-text'></label>" +
 //"<label class='contact-text'>R$ " + data.VALOR_COTACAO + "</label>" +
 "<label>Km " + data.DISTANCIA + "</label>" +
 "</div>" +
   "<div class='one-half'>" +
   "<a onclick='MostraMapa(this);' id='" + data.ID_ESTABELECIMENTO + "_" + data.SIMBOLO + "' class='button button-white'><i class='fa fa-map-marker' style='font-size:18px; color:#0489B1;'></i></a>" +
   "</div>" +
  "<div class='two-half last-column'>" +
    "<a onclick='check(this);' id='" + data.ID_ESTABELECIMENTO + "_" + data.SIMBOLO + "' class='button button-white'><i class='fa fa-star-o' style='font-size:18px; color:#0489B1;'></i></a>" +
 "</div>" +
 "<div class='static-notification-exchange' style='border-radius: 10px;' onclick='MostraReserva(this)' id='" + data.ID_ESTABELECIMENTO + "_" + data.SIMBOLO + "' >" +
 "<p class='center-text' style='font-size:15px; color:white;'>Comprar</p>" +
 "</div>" +
 "<div>" +
 MontaInfo(data.RETIRADA, data.DELIVERY, data.RECARGA);//"<label class='contact-text'>" + data.NOME + "</label>" +
    "</div>" +
    "</div>";

    return html;

}


function MontaInfo(RETIRADA, DELIVERY, RECARGA) {
    var ret = '';
    if (RETIRADA == 'S') {
        ret += '<a class="base-text one-third"><i class="fa fa-university"></i> Retirada </a>';
    }
    if (DELIVERY == 'S') {
        ret += '<a class="base-text one-third"><i class="fa fa-motorcycle"></i> Delivery </a>'; //'Delivery';
    }
    if (RECARGA == 'S') {
        ret += '<a class="base-text one-third last-column"><i class="fa fa-credit-card"></i> Recarga </a>'//'Recarga'; 
    }
    ret += "";
    return ret;
}


function MostraMapa(obj) {

    localStorage.setItem('VIEWMAP', obj.id)
    CarregaMenu('mapa.html');
}

function estrelas(numeroestrelas) {
    html = '';
    for (var i = 0; i <= numeroestrelas; i++) {
        htm += "<i class='fa fa-star'></i>";
    }

    for (var i = 0; i <= (5 - numeroestrelas) ; i++) {
        html += "<i class='fa fa-star-o'></i>";
    }
    return html;
}

function check(obj) {

    var data = jQuery.parseJSON(localStorage.getItem("USUARIO"));
    var id = obj.id.split("_");

    var ID_USUARIO = data.ID_USUARIO;
    var ID_ESTABELECIMENTO = id[0];
    var SIMBOLO = id[1];

    ExcluiFavorito(ID_USUARIO, ID_ESTABELECIMENTO, SIMBOLO, null, ERROCONEXAO);
    ExibeMensagem("Favorito excluído com sucesso !")
    BuscarEstabelecimento("DISTANCIA", true);
}


jQuery(document).ready(function () {

    EqualizaTamanhoTela();
    BuscarEstabelecimento("DISTANCIA", true);
});



function MensagemRetornoVazioBusca() {
    var html =
 "<div  class='big-notification static-notification-white'>" +
 "<div>" +
 "<strong> Nenhum favorito selecionado </strong> " +
 "</div>" +
 "</div>";

    return html;
}
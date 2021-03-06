﻿var ID_USUARIO = jQuery.parseJSON(localStorage.getItem("USUARIO")).ID_USUARIO;

function BuscarEstabelecimento() {
 //   BloqueiaTela("Carregando...");
    var html = '';    
    var data = jQuery.parseJSON(RetornaOperacaoPorUsuario(ID_USUARIO,0,0,null,ERROCONEXAO));
    if (data.length > 0) {
        jQuery.each(data, function () {
            html+= CarregaDivOperacao(this);
        });
        jQuery('#DIVHISTORICO').html(html);
    }
else {
        jQuery('#DIVHISTORICO').html(MensagemRetornoVazioBUsca());
    }
}

function CarregaDivOperacao(data) {


    var html =
    "<div id='" + data.ID_ESTABELECIMENTO + "' class='big-notification static-notification-white'>" +
    "<div>" +
    "<strong><label class='contact-text'>Cod.Venda: " + data.COD_VENDA + "</label></strong> " +
    "<strong><label class='contact-text'>" + data.NOME + "</label></strong> " +
    "</div>" +
    //"<div class='one-half'>" +
    "<label class='contact-text'>Data:" + data.DATA_VENDA + "</label>" +
    "<label class='contact-text'>Moeda:" + data.SIMBOLO + "</label>" +
    "<label class='contact-text'>Cotação:R$ " + parseFloat(data.VALOR_PRODUTO).toFixed(2) + " </label>" +
    "<label class='contact-text'>Requerido:("+data.SIMBOLO+")" + parseFloat(data.QUANTIDADE).toFixed(2) + " </label>" +
    "<label class='contact-text'>total:R$ " + parseFloat((data.QUANTIDADE * data.VALOR_PRODUTO)).toFixed(2)+ " </label>" +
    "<div>" +
    "<strong><label class='contact-text'>Status:" + data.DESCRICAO + "</label></strong> " +
    "</div>" +
    //"<div class='one-half'>" +
    //"<a onclick='MostraMapa(this);' id='" + data.ID_ESTABELECIMENTO + "_" + data.SIMBOLO + "' class='button button-white'><i class='fa fa-map-marker' style='font-size:18px; color:#0489B1;'></i></a>" +
    //"</div>" +
   //"<div class='two-half last-column'>" +
    //"<a onclick='check(this);' id='" + data.ID_ESTABELECIMENTO + "_" + data.SIMBOLO + "' class='button button-white'><i class='fa fa-star-o' style='font-size:18px; color:#0489B1;'></i></a>" +
    //"</div>" +
    "</div>";

    return  html;

}

jQuery(document).ready(function () {
    EqualizaTamanhoTela();
    BuscarEstabelecimento();
});

function MostraMapa(obj) {
    localStorage.setItem('VIEWMAP', obj.id)
    CarregaMenu('mapa.html');
}


function CarregaDados(data) {

    if (data.length > 0) {
        jQuery.each(data, function () {
            jQuery('#DIVESTABELECIMENTO').append(CarregaEstabelecimento(this));
        });
    }

}

function MensagemRetornoVazioBUsca()
{
    var html =
 "<div  class='big-notification static-notification-white'>" +
 "<div>" +
 "<strong>Nenhuma compra realizada</strong> " +
 "</div>" +
 "</div>";

    return html;
}

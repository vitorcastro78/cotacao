﻿function CarregaSelectEstabelecimentos() {
    jQuery('#ESTABELECIMENTO').append('<option value="" selected> Que estabelecimento você procura? </option>');
    var data = jQuery.parseJSON(RetornaListaEstabelecimentos(null, null));
    if (data.length > 0) {
        jQuery.each(data, function () {
            MontaSelectEstabelecimento('ESTABELECIMENTO', this.ID_ESTABELECIMENTO, this.NOME);
        });
    }
}

function PreencheSelectMoeda() {
    jQuery('#MOEDA').append('<option value="" selected> Que moeda você procura? </option>');
    var data = MOEDA;
    if (data.length > 0) {
        jQuery.each(data, function () {
            MontaSelect('MOEDA', this.CODIGO, this.NOME, this.PAIS);
        });
    }
}

function MontaSelect(OBJETO, CODIGO, NOME, PAIS) {

    jQuery('#' + OBJETO + '').append('<option value=' + CODIGO + '>' + NOME + ' ( ' + PAIS + ' )</option>');
}


function MontaSelectEstabelecimento(OBJETO, CODIGO, NOME) {

    jQuery('#' + OBJETO + '').append('<option value=' + CODIGO + '>' + NOME + ' </option>');
}



function PreencheTransacaoProcura() {
    jQuery('#TRANSACAO').append('<option value="" selected>O que você quer fazer?</option>');
    var data = TRANSACAO;
    if (data.length > 0) {
        jQuery.each(data, function () {
            jQuery('#TRANSACAO').append('<option value=' + this[0] + '>' + this[1] + '</option>');
        });
    }
}

function CarregaEstabelecimento(data) {

    var html =
    "<div id='" + data.ID_ESTABELECIMENTO + "' class='big-notification static-notification-white'>" +
    "<strong><label class='busca-text'>" + data.NOME + "</label></strong> " +
    "<div class='one-half'>" +
    "<label class='contact-text'> " + data.FONE + "</label>" +
    "<label class='contact-text'>R$: 10,00 </label>" +// + + data.VALOR_COTACAO + "</label>" +
    "</div>" +
    "<div class='two-half last-column'>" +
    "<label class='contact-text'></label>" +
    "</div>" +
     "<div>" +
    "</div>" +
    "</div>" +
    "</br>";

    return html;
}

function RetornaEstabelecimento(ID_ESTABELECIMENTO) {
    var data = jQuery.parseJSON(RetornaEstabelecimentoPorId(ID_ESTABELECIMENTO, null, null));
    if (data.length > 0) {
        jQuery.each(data, function () {
            CarregaEstabelecimento(data);
        });
    }
}

function AdicionaMoeda(ID_ESTABELECIMENTO) {

    var ID_MOEDA = '';
    var CODIGO = '';
    var NOME = '';
    jQuery.each(MOEDA, function () {
        if (this.CODIGO == jQuery('#MOEDA').val()) {
            ID_MOEDA = this.ID_MOEDA;
            CODIGO = this.CODIGO;
            NOME = this.NOME;
        }
    });

    var dt = new Date();

    InsereMoedaEstabelecimento(ID_ESTABELECIMENTO, ID_MOEDA, CODIGO, NOME, null, null);
    InsereCotacaoEstabelecimento(ID_ESTABELECIMENTO, ID_MOEDA, jQuery('#PERCENTUAL').val(), dt.getDate(), (dt.getMonth() + 1), dt.getFullYear(), null, null);


    PreencheMoedasTrabalhadas(ID_ESTABELECIMENTO);
}

function CarregaMoedasTrabalhadas(ID_ESTABELECIMENTO) {

}

function PreencheMoedasTrabalhadas(ID_ESTABELECIMENTO) {

    var html = '';
    var data = jQuery.parseJSON(RetornaListaMoedaEstabelecimento(ID_ESTABELECIMENTO), null, null);
    if (data.length > 0) {
        jQuery.each(data, function () {
            html += MontaMoedasTrabalhadas(this);
        });

        jQuery('#DIVESTABELECIMENTO').html(html);
    }


}

function MontaMoedasTrabalhadas(data) {
    //var ret = RetornaCotacaoEstabelecimento(data.ID_ESTABELECIMENTO, data.ID_MOEDA,null,null);
    //   var cotaca = jQuery.parseJSON( );
    var html =
   "<div id='" + data.ID_ESTABELECIMENTO_MOEDA + "' class='big-notification static-notification-white'>" +
   "<strong><label class='busca-text'>Moeda:" + data.NOME + "</label></strong> " +
   "<div class='one-half'>" +
   "<label class='contact-text'> Cod.:" + data.CODIGO + "</label>" +
   "<label class='contact-text'>Status:" + verificaAtivo(data.ATIVO) + "</label>"
    //"<label class='contact-text'>Status : " + cotaca.VALOR_COTACAO + "</label>" +
    "</div>" +
    "<div class='two-half last-column'>" +
    "<label class='contact-text'></label>" +
    "</div>" +
     "<div>" +

    "</div>" +
    "</div>";

    return html;

}

jQuery(document).ready(function () {

    CarregaSelectEstabelecimentos();
    PreencheSelectMoeda();
    PreencheTransacaoProcura();

});

function verificaAtivo(ATIVO) {

    var ret = '';

    if (ATIVO == true)
        ret = 'ATIVO';
    else
        ret = 'DESATIVADO';

    return ret;

}
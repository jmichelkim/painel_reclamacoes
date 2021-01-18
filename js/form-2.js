function montaTr(unidade) {
    var unidadeTr = document.createElement("tr");
    unidadeTr.classList.add("unidade");

    unidadeTr.appendChild(montaTd(unidade.cgc, "info-cgc"));
    unidadeTr.appendChild(montaTd(unidade.unidade, "info-unidade"));
    unidadeTr.appendChild(montaTd(unidade.bacen, "info-bancen"));
    unidadeTr.appendChild(montaTd(unidade.procon, "info-procon"));
    unidadeTr.appendChild(montaTd(unidade.ouvidoria, "info-ouvidoria"));
    unidadeTr.appendChild(montaTd(unidade.sac, "info-sac"));

    return unidadeTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}


function adicionaUnidadeNaTabela(unidade) {
    var UnidadeTr = montaTr(unidade);
    var tabela = document.querySelector("#tabela-unidades");
    tabela.appendChild(UnidadeTr);
}

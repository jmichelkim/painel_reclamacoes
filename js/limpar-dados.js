function limpar() {

    var tabelaUnidades = document.querySelector("#tabela-unidades");

    var tabelaDados = tabelaUnidades.querySelectorAll(".unidade");
    for (var i = 0; i < tabelaDados.length; i++) {
        tabelaDados[i].innerHTML = null
    }

    var dataDoRelatorio = document.querySelector("#dataDoRelatorio");
    dataDoRelatorio.innerHTML = null;

    let btnBuscar = document.querySelector("#exibir-dados");
    btnBuscar.classList.remove("disabled");

    let desabilitaBtn = true;
    let btnJson = document.querySelector("#limpar-dados");
    btnJson.disabled = desabilitaBtn;

    var tabela = document.querySelector("#tabelaDados");
    tabela.classList.add("invisivel");

    document.getElementById("textoPrincipal").innerHTML = "Utlizar o botão acima Exibir Dados para geração de relatório.";
    document.getElementById("textoPrincipal-2").innerHTML = "Para maiores informações, entrar em contato com a administradora do sistema - GEATE.";

    
}

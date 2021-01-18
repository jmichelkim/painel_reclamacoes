var botaoAdicionar = document.querySelector("#exibir-dados");

botaoAdicionar.addEventListener("click", function() {

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "json/dados.json");

    xhr.addEventListener("load", function() {

        var erroAjax = document.querySelector("#erro-ajax");

        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            var resultado = xhr.responseText;
            var unidades = JSON.parse(resultado);

            var tabela = document.querySelector("#tabelaDados");
            tabela.classList.remove("invisivel");

            let desabilitaBtn = false;
            let btnJson = document.querySelector("#limpar-dados");
            btnJson.disabled = desabilitaBtn;

            let btnBuscar = document.querySelector("#exibir-dados");
            btnBuscar.classList.add("disabled");

            document.getElementById("textoPrincipal").innerHTML = null;
            document.getElementById("textoPrincipal-2").innerHTML = null;

                var data = new Date();
                var dia = data.getDate();
                if (dia.toString().length == 1)
                    dia = "0" + dia;
                var mes = data.getMonth() + 1;
                if (mes.toString().length == 1)
                    mes = "0" + mes;
                var ano = data.getFullYear();
                document.getElementById("dataDoRelatorio").innerHTML = "Relatório gerado em: " + dia + "/" + mes + "/" + ano + ". Fonte: Geate." ;               

            unidades.forEach(function(unidade) {
                adicionaUnidadeNaTabela(unidade);

            });
        } else {
            console.log('erro');
            

            erroAjax.classList.remove("invisivel");
            
        }
    });

    xhr.send();
});
function newFunction() {
    return "dataDoRelatorio";
}


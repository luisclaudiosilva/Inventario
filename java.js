function validaForm(){
    //validar nome
    d = document.formulario;
    if (d.codigo.value == ""){
        alert("Digite o código com números de 1 à 10");
        d.codigo.focus();
        return false;
    }


    if (d.localizacao.value == 0){
        alert("Escolha um ítem de localização válida");
        d.quant.focus();
        return false;
    } 


    if (d.quant.value == ""){
        alert("Digite uma quantidade válida");
        d.quant.focus();
        return false;
    }

    if (d.date.value == 0){
        alert("Escolha uma data válida no calendário");
        d.quant.focus();
        return false;
    }


    criar_tabela();
}

function criar_tabela(){
	// Captura a referência da tabela com id “minhaTabela”
            var table = document.getElementById("idTabela");
            // Captura a quantidade de linhas já existentes na tabela
            var linhaTabela = table.rows.length;
            // Captura a quantidade de colunas da última linha da tabela
            var colunaTabela = table.rows[linhaTabela-1].cells.length;

            // Insere uma linha no fim da tabela.
            var inserirLinha = table.insertRow(linhaTabela);
 
            // Faz um loop para criar as colunas
            for (var j = 0; j < colunaTabela; j++) {
                // Insere uma coluna na nova linha 
                novaColuna = inserirLinha.insertCell(j);
                // Insere um conteúdo na coluna
                if (j == 0) {
                    novaColuna.innerHTML = codigo.value;
            	};

            	if (j == 1) {
            		novaColuna.innerHTML = localizacao.value;
            	};

            	if (j == 2) {
            		novaColuna.innerHTML = quant.value;
            	};

            	if (j == 3) {
            		novaColuna.innerHTML = date.value;
            	};

            	if (j == 4) {
            		novaColuna.innerHTML = nome.value;
            	};

                if (j == 5) {
                    novaColuna.innerHTML = obs.value;
                };

                if (j == 6) {
                    novaColuna.innerHTML = '<a href=""><img src="write.png"></a>';
                };
			}


}


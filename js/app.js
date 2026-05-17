

function comprar() {

    let tipo = document.getElementById("tipo-ingresso");
    let quantidade = parseInt(document.getElementById("qtd").value);

     if (quantidade <= 0) {
        alert("Quantidade inválida. Por favor, insira uma quantidade válida.");
        return; 
    }

    if (tipo.value == "pista") {
        comprarPista(quantidade);
    }

    if (tipo.value == "superior") {
        comprarCadeiraSuperior(quantidade);
    }

    if (tipo.value == "inferior") {
        comprarCadeiraInferior(quantidade);
    }

    if (tipo.value == "vip") {
        comprarCamarimVIP(quantidade);
    }

}

function comprarPista(quantidade) {
    let quantidadePista = parseInt(document.getElementById("qtd-pista").textContent);
    if (quantidade > quantidadePista) {
        alert("Quantidade de ingressos insuficentes!");
    } else { 
        quantidadePista = quantidadePista - quantidade;
       document.getElementById("qtd-pista").textContent = quantidadePista;
        alert("Compra realizada com sucesso!");
    }
    
}


function comprarCadeiraSuperior(quantidade) {
    let quantidadeSuperior = parseInt(document.getElementById("qtd-superior").textContent);
    if (quantidade > quantidadeSuperior) {
        alert("Quantidade de ingressos insuficentes!");
    } else { 
        quantidadeSuperior = quantidadeSuperior - quantidade;
       document.getElementById("qtd-superior").textContent = quantidadeSuperior;
        alert("Compra realizada com sucesso!");
    }
    }

function comprarCadeiraInferior(quantidade) {

    let quantidadeInferior = parseInt(document.getElementById("qtd-inferior").textContent);
    if (quantidade > quantidadeInferior) {
        alert("Quantidade de ingressos insuficentes!");
    } else { 
        quantidadeInferior = quantidadeInferior - quantidade;
       document.getElementById("qtd-inferior").textContent = quantidadeInferior;
        alert("Compra realizada com sucesso!");
    }
    
}

function comprarCamarimVIP(quantidade) {

    let quantidadeVIP = parseInt(document.getElementById("qtd-vip").textContent);
    if (quantidade > quantidadeVIP) {
        alert("Quantidade de ingressos insuficentes!");
    } else { 
        quantidadeVIP = quantidadeVIP - quantidade;
       document.getElementById("qtd-vip").textContent = quantidadeVIP;
        alert("Compra realizada com sucesso!");
    }

}
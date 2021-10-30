function insert(num){
    let numero = document.getElementById("resultado").innerHTML//pega o elemento pelo id resultado do html e joga na variavel numero
    document.getElementById(`resultado`).innerHTML = numero + num//pega oque ja tenho(numero) e adiciono o parametro num
    
}

function clean(){//antes era clear, mas e algum metodo do html e deu conflito
    document.getElementById(`resultado`).innerHTML=``;
}

function back(){
    let resultado = document.getElementById("resultado").innerHTML;
    document.getElementById(`resultado`).innerHTML = resultado.substring(0,resultado.length -1)///O método substring() com .length remove os ultimos caracteres

}

function calcular(){
    let resultado = document.getElementById(`resultado`).innerHTML;
    if(resultado){
        document.getElementById(`resultado`).innerHTML = eval(resultado);
    }else{
        document.getElementById(`resultado`).innerHTML = `nada para calcular`
    }
}

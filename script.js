

let prato, bebida, sobremesa, p1, p2, p3, soma;


function escolherFarofa() {

document.getElementById("farofa").style.border = "2px solid green";
document.getElementById("arroz").style.border = "white";
document.getElementById("prato").style.border = "white";
prato="Farofa";
p1 = 10;

}

function escolherArroz () {
    document.getElementById("farofa").style.border = "2px solid white";
    document.getElementById("arroz").style.border = "2px solid green";
    document.getElementById("prato").style.border = "2px solid white";
    prato = "Arroz";
   p1 = 12;
    

}

function escolherPrato () {
    document.getElementById("farofa").style.border= "2px solid white";
    document.getElementById("arroz").style.border = "2px solid white";
    document.getElementById("prato").style.border = "2px solid green";
    prato = "Prato-feito";
    p1 = 10;
   


}

function escolherSuco () {
    document.getElementById("suco").style.border = "2px solid green";
    document.getElementById("coca").style.border = "2px solid white";
    document.getElementById("chopp").style.border = "2px solid white";
    bebida = "Suco";
   p2 = 5;

}

function escolherCoca () {

    document.getElementById("suco").style.border = "2px solid white";
    document.getElementById("coca").style.border = "2px solid green";
    document.getElementById("chopp").style.border = "2px solid white";
    bebida = "Coca-Cola"
    p2 = 3;
    
}

function escolherChopp () {

    document.getElementById("suco").style.border = "2px solid white";
    document.getElementById("chopp").style.border = "2px solid green";
    document.getElementById("coca").style.border = "2px solid white";
    bebida = "Chopp"
    p2 = 7;
    
}


function escolherPudim(){
    document.getElementById("pudim").style.border = "2px solid green";
    document.getElementById("sorvete").style.border = "2px solid white";
    document.getElementById("cup").style.border = "2px solid white";
    sobremesa = "Pudim";
    p3 = 4.50;
    
}

function escolherCup(){
    document.getElementById("cup").style.border = "2px solid green";
    document.getElementById("sorvete").style.border = "2px solid white";
    document.getElementById("pudim").style.border = "2px solid white";
    sobremesa = "Cupcake";
    p3 = 4.5
    
}

function escolherSorvete (){
    document.getElementById("pudim").style.border = "2px solid white";
    document.getElementById("sorvete").style.border = "2px solid green";
    document.getElementById("cup").style.border = "2px solid white";
    sobremesa = "Sorvete";
    p3 = 2;
    

}




function finalizarPedido () {
    let msg;
    let soma = p1 + p2 + p3;
    msg = "Eu gostaria de pedir: " + prato  + ", " + bebida + " e " + sobremesa +". " +"Totalizando = " + " R$ ";
    window.open("https://wa.me/+5587999999999?text=" + msg + soma);
   
   
}




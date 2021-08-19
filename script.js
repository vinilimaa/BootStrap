let prato, bebida, sobremesa;


function escolherFarofa() {

document.getElementById("farofa").style.border = "2px solid green";
document.getElementById("arroz").style.border = "white";
document.getElementById("prato").style.border = "white";
prato="Farofa";


}

function escolherArroz () {
    document.getElementById("farofa").style.border = "2px solid white";
    document.getElementById("arroz").style.border = "2px solid green";
    document.getElementById("prato").style.border = "2px solid white";
    prato = "Arroz";
   
    

}

function escolherPrato () {
    document.getElementById("farofa").style.border= "2px solid white";
    document.getElementById("arroz").style.border = "2px solid white";
    document.getElementById("prato").style.border = "2px solid green";
    prato = "Prato-feito";
   


}

function escolherSuco () {
    document.getElementById("suco").style.border = "2px solid green";
    document.getElementById("coca").style.border = "2px solid white";
    document.getElementById("chopp").style.border = "2px solid white";
    bebida = "Suco";
   

}

function escolherCoca () {

    document.getElementById("suco").style.border = "2px solid white";
    document.getElementById("coca").style.border = "2px solid green";
    document.getElementById("chopp").style.border = "2px solid white";
    bebida = "Coca-Cola"
    
}

function escolherChopp () {

    document.getElementById("suco").style.border = "2px solid white";
    document.getElementById("chopp").style.border = "2px solid green";
    document.getElementById("coca").style.border = "2px solid white";
    bebida = "Chopp"
    
}


function escolherPudim(){
    document.getElementById("pudim").style.border = "2px solid green";
    document.getElementById("sorvete").style.border = "2px solid white";
    document.getElementById("cup").style.border = "2px solid white";
    sobremesa = "Pudim";
    
}

function escolherCup(){
    document.getElementById("cup").style.border = "2px solid green";
    document.getElementById("sorvete").style.border = "2px solid white";
    document.getElementById("pudim").style.border = "2px solid white";
    sobremesa = "Cupcake";
    
}

function escolherSorvete (){
    document.getElementById("pudim").style.border = "2px solid white";
    document.getElementById("sorvete").style.border = "2px solid green";
    document.getElementById("cup").style.border = "2px solid white";
    sobremesa = "Sorvete";
    

}

function finalizarPedido () {
    let msg;
    msg = "Eu gostaria de pedir: " + prato  + ", " + bebida + " e " + sobremesa +".";
    window.open("https://wa.me/+5587999999999?text=" + msg);
   
   
}




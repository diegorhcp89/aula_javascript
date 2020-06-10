
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por Clicar</b>";
    
   // alert("Obrigado por clicar")
}

function redirecionar(){
    window.open("https://www.globo.com/");
    //window.location.href = "https://www.globo.com/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse"
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o Mouse Aqui";
    elemento.innerHTML = "Passe o Mouse Aqui"
}

function load(){
    alert("Pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

/*
function soma(n1, n2){
    return n1 + n2;
}

function validade(idade){
    var validar;
    if (idade >=18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade");
console.log(validade(idade));
*/

/*
var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
/*

/*
var count;
for(count=0; count <= 5; count++){
    alert(count);
};
*/

/*
var count = 0;
while (count <=20){
    console.log(count);
    alert(count);
    count++;
};
*/

/*
var idade = prompt("Qual sua idade");
//var idade = 18;
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}
*/

/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["maça", "péra", "Laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista);
//console.log(lista.toString())
//console.log(lista.length);
//console.log(lista.reverse());


//var nome = "Diego Amaral";
//var idade = 34;
//var idade2 = 34;
//var frase = "Dragon Ball é o melhor anime"
//alert(nome + " tem " + idade + " anos ");
//alert(idade + idade2);
//console.log(nome);
//console.log(idade + idade2);
//console.log(frase.toUpperCase());
//console.log(frase.toLowerCase());
//console.log(frase.replace("Dragon Ball", "Cavaleiros do Zodiaco"));
//alert(frase.replace("Dragon Ball", "Cavaleiros do Zodiaco"));
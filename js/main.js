
//Definição de variáveis javascript;
//var nome="Levi Lucas "; //variável do tipo String;
//var idade= 25; // variável do tipo número Inteiro, porém quando se inclui o sinal de "" ele é passado como string;
//var frase= "Eu sou Levi Lucas, e estou aprendendo o desenvolvimento da linguagem JavaScript";

//alert(idade + idade2);

//Comando de alerta;
//alert(nome + "tem " + idade + " anos");
//alert(frase);

//Atributo "replace" é utilizado para alterar conteúdo exibido no console.
//console.log(frase.replace("Levi Lucas", "Akácia"));
// Atributo "UpperCase" é utilizado para alterar letra minúscula para maiúscula.
//console.log(frase.toUpperCase());
// Atributo "UpperCase" é utilizado para alterar letra maiúscula para minúscula.
//console.log(frase.toLowerCase());
//alert(frase.replace("Levi Lucas", "Akácia"));

//Comando utilizado para acompanhamento do desenvolvimento.
//console.log(nome);

//Utilizando Arrays
//var lista= ["maça", "pêra", "laranja"];

//lista.push("uva");//Inserindo mais um item na lista (array);

//lista.pop();//Retirando item na lista (array);

//console.log(lista[0]);//Comando console para exibir apenas posição 0;
//console.log(lista.toString()[0]);//Comando console para exibir posição 0 em forma de String (texto);

//console.log(lista.length);//Atributo no comando console para exibir tamanho da lista;

//console.log(lista.reverse());//Atributo no comando console para exibir item da lista de trás para frente;

//console.log(lista);//Comando console para exibir lista;

//console.log(lista);//Comando console para exibir lista completa;

//console.log(lista.toString());//Atributo no comando console para exibir lista em forma de String (texto);

//console.log(lista.join(" | "));//Atributo no comando console para exibir sinal de "hífen" para separar os elementos da lista;

//alert(lista[1]);//Exibindo posição 1;

//Utilizando Dicionário em JavaScript
//var fruta = {nome:"maça", cor:"vermelha"}
//console.log(fruta);//Comando console para exibir nome da fruta e cor;
//console.log(fruta.nome);//Comando console para exibir nome da fruta;
//alert(fruta.cor);//Comando de alerta para exibir a cor da fruta;

//Dicionário com mais de uma posição;
//var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]

//console.log(frutas);//Comando console exibe dicionário com mais de uma posição;
//alert(frutas[1].nome);//Comando alerta imprime posição 1 + nome da fruta;

//Utilizando - Condicionais, laços de repetição e Date
//var idade = 18;//declaração da variável;

//solicita ao usuário para informar sua idade;
//var idade = prompt("Qual sua idade?");

//Instrução condicional "if e else";
/*if (idade >= 18) {
	alert("Maior de idade");
	} else {
	alert ("Menor de idade");	
	}*/
	
//Utilizando laço de repetição WHILE
/*var count = 0;
while (count <= 5){
	console.log(count);
	//count = count + 1;
	alert(count);
	count++;
};*/

//Utilizando laço de repetição FOR
/*var count;
for(count=0; count <=5; count++) {
	alert(count);
};*/

//Utilizando Date;
var d = new Date();
//alert (d);
//alert (d.getDay());
//alert (d.getHours());
//alert (d.getMinutes());

//Utilizando funções

/*function soma(n1, n2){
	return n1 + n2;
	}
	alert (soma(5, 10));*/
	
/*function validaIdade(idade){
	var validar;
	if(idade>=18) {
		validar=true
	} else {
			validar=false
	}
	return validar;
}
var idade = prompt("Qual a sua idade?");
console.log(validaIdade(idade)); */

function clicou(){
	/*Comando utilizando o elemento que resgata conteúdo 
	da variável.*/
	document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
	//console.log(document.getElementById("agradecimento"));
	//alert("Obrigado por clicar aqui!");
}

function redirecionar(){
	window.open('https://www.google.com');
	//window.location.href = "https://www.google.com";
}

function trocar(elemento){
	//document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!";
	elemento.innerHTML = "Obrigado por passar o mouse!";
	//alert("Trocar texto");
}

function voltar(elemento){
	elemento.innerHTML = "Passe o mouse aqui";
	//document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
}

function load(){
	alert("Página carregada!");
}

function funcaoChange(elemento){
	console.log(elemento.value);
}






















































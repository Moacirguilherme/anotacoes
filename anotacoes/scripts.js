/*string

 const temperature = 46

if( temperature === 38) {
    console.log("voce esta saudavel")
}
    else if (temperature > 38 && temperature <= 45) {
        console.log("esta com febre")
    }
    else if (temperatura => 46)
    { console.log ("voce esta com Muita FEBRE...")}
    else  { 
        console.log("esta com hiportermia")
    }
*/
/* const salario = 1.999

/*if(salario < 3.000) {
    console.log("salrio junior")}
    else {
        console.log("salario senior")
    }
*/

/* IF/ELSE TERNARIO (?:)  salario < 2.999 ? console.log("salario junior") : console.log("salario senior")*/

/*if (salario < 3.000) {
    console.log("salario JR ")}
            else if (salario >= 3.000 && salario < 10.000) {
        console.log("salario senior")
    }
    else {
        console.log("salario diretor pk")
    }
*/

/*salario < 2.999 ? console.log("salario JR ") : salario >= 3.000 && salario < 10.000 ? console.log("salario senior") : console.log("salario diretor pk") */

/*const temperatura = 135
switch (temperatura) {
    case 10:
        console.log("ta frio")
        break
    case 15:
        console.log("Morno")
        break
    case 20:
        console.log("quente")
        break
    case 25:
        console.log("infernal")
        break

    default:
        console.log("nao tenho palavras")
        break

}*/
//cronometro 
/*setTimeout(function() {
    alert("EXECUTTA");    
}, 3000);*/

/*let i = 0 

for(let i = 0; i < 10; i++ ){
    console.log(i)
}*/

/*for(let i = 20; i < 25; i++) {
console.log(i)

}*/
/*for
const users = ["maria", "mario","jaoa", "pedro", "Jose", "Joana",]

console.log( users.length)
// length = possição das coisas do array...arrays, que são listas de coisas (como uma lista de nomes, números, ou qualquer outra coisa), o length é como se fosse o "tamanho" da lista. Ele conta quantos itens tem dentro da lista.

for (let i= 0; i < users.length; i++ ) {
console.log(users[i])
}*/
/*
const users = ["maria", "mario","jaoa", "pedro", "Jose", "Joana",]
for (let index = 0; index < users.length; index++) {
    console.log(users[index])
    
}*/

/*
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenCount = 0;  // Para contar os números pares
let oddNumbers = [];  // Para armazenar os números ímpares

for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] % 2 === 0) {
    evenCount++;  // Contando os números pares
  } else {
    oddNumbers.push(numbers[index]);  // Adicionando números ímpares ao array
  }
}

console.log("Total de números pares:", evenCount);
console.log("Números ímpares:", oddNumbers.join(", "));  // Exibe os números ímpares, separados por vírgula

/*forof
const myName = 'Moacir'
const users = ['João', 'Maria', 'Leticia']
 
for (const myName of myName) {
    console.log(myName)
}
*/

/*forin

const users = {name: 'Pedro', age: 9, street: "Rua dos alegres"}

for (const key in users) {
 
  console.log(`${key} : ${users[key]}`)
        
    }
*/
// while
/*let i = 0
do {
    i++;
console.log(i)
} while (i <= 30)


const users = [
    {name: 'Moacir', age: '40', conatact: '(42) 94358-3554'},
    {name: 'Perdro', age: '9', conatact: '(42) 9135-243535'},
    {name: 'Camila', age: '36', conatact: '(42) 413515-351'},
    {name: 'Pompom', age: '9', conatact: '(42) 3135-254554'},
    {name: 'Iara', age: '0,6', conatact: '(42) 3135-357854'},
]

let finalValue = 0 

users.forEach(value => {
   finalValue = finalValue + value
   
    console.log(finalValue)
    
});
*/
/*
users.forEach((item) => {
    console.log(`${1} Nome: ${item.name}, Idade: ${item.age}, Cell: ${item.conatact}`)
});


function saymayname(name){

    console.log(`nome é: ${name}`)
}
saymayname("Joao")
saymayname("Maria Joao")
saymayname("Joao Pedro")
*/
/*
function sum (number1,number2){
console.log(number1+number2)
}
sum (4,3)

function sum (n1,n2){
console.log(n1 + n2)

}
sum(4,3)
sum(7,1)
*/
/*function sum (value1 , value2) {
console.log(value1 + value2)

}*/

/*
function sum (n1 , n2) {
return n1 + n2
}
function showresult(){
    const resultado = sum(2,3)
    console.log("o resultado da soma é: " + resultado )
}
showresult()

/*
function sub(n,m){
console.log(n-m)
}
sub(1,2)

let a = 2
let b = 5
function time(a = 2,b = 5){ 
   if (a<=2 && b<6) {
console.log("condição verdadeira")
   } else {
    console.log("a condição é falsa")
   }
    console.log(a*b)
}
time();

let a = "Olá,"
function saudacao(a, nome) {
console.log(a + nome)

}
saudacao(a,"Moacir");


function calcularIdade(anoNascimento){
const ano = 2024
const idade = ano - anoNascimento
console.log(`A idade é : ${idade} anos.`)
}
calcularIdade(1984)

function sum (number1,number2){
    console.log(" a resposta "+(number1+number2))
    }
    sum (3,7)

     
    function sum(number1, number2) {
        return number1 + number2;
    }
        const resultado = sum(3, 7); 
    console.log(`${resultado}+ " é a resposta"`);


    const v = "doidera"
    console.log(v)

    function displayName(name) {
console.log(name)

    }
    displayName("Moacir")

    function sum () {
        return "n1 + n2"
         
    }
    console.log(sum () + " resuldado" )

const cart = [10, 244, 99, 2, 20, 33, 250];

let finalValue = 0
let valuewhitoutdiscout = 0 
// total da compra...
cart.forEach(Element => {
    valuewhitoutdiscout += Element
    
});
// calculo do desconto
function calculateDiscount(value, discount) {
    const result = value * discount
    return result
}
// desconto de 10%
cart.forEach(value => {

    if (value > 30) {
        const discount = calculateDiscount(value, 0.90)
        finalValue += discount

    } else {
        finalValue += value
    }
   });
console.log(`Valor final da compra foi R$ ${valuewhitoutdiscout.toFixed(2)}
Cliente especial ganhou um desconto R$ ${(valuewhitoutdiscout-finalValue).toFixed(2)}
Total da Compra R$ ${finalValue.toFixed(2)}`)

//arrow function
//função comum...
function saymyname (name){
    return `seu nome é ${name}`
}

//arrow function

const  saymyname2 = (name) => `seu nome ainda é ${name}`

console.log(saymyname("Moacir"))
console.log(saymyname2("Pedro"))

const saudar = (name) => `Olá, ${name}`
console.log(saudar ("Moacir"))


const multiplicarPorDez = (number) => number * 10 
console.log(multiplicarPorDez(5)); 

const verificarMaioridade = (idade) => {
    if (idade >= 18){
        console.log("maior de idade true")
    }
    else{
        console.log("menor de idade false...")
    }
    return idade >= 18;
};
console.log(verificarMaioridade(18))
console.log(verificarMaioridade(5))

const verificarMaioridade = (idade) => {
    return `Idade: ${idade} - ${idade>= 18 ? "Maior de idade " : "Menor de idade"}`;}

console.log(verificarMaioridade(18)); // true
console.log(verificarMaioridade(5));  // false*/


// Map
/*
const number = [1,2,3,4,5,6,7,8,9,10]

const double = number.map(item => {
    const newItem = item * 10
    return newItem
})
console.log(number)
console.log(double)


const number = [3,5,7,2,8]

const SunFive = number.map((item, index, arrayOriginal) => {
console.log("item " + item," = index " + index)
const newItem = item + ''
return newItem
})
console.log("Novo Array ficou tudo String", (SunFive))
console.log("ArrayOriginal = " + number)

const list = [
    { name: 'Moacir', vip: true },
    { name: 'Pedro', vip: false },
    { name: 'Camila', vip: false },
    { name: 'Joao', vip: true },
    { name: 'Maria', vip: true },
    { name: 'Ana', vip: false },
    { name: 'Carla', vip: true },
]

const newList = list.map( user => {
    const newUser = {
        name: user.name,
        braceletColor: user.vip ? 'black' : 'green'
    }
    return newUser
})
console.log(newList)

const estudantes = [
    { nome: "Lucas", testGrade: 0 },
    { nome: "Mariana", testGrade: 10 },
    { nome: "João", testGrade: 6 },
    { nome: "Ana", testGrade: 7 },
    { nome: "Pedro", testGrade: 5 },
    { nome: "Fernanda", testGrade: 2 },
    { nome: "Clara", testGrade: 4 },
  ];

  const newList = estudantes.map (user => {
    return {
        nome: user.nome,
        resultGrade:~
        user.testGrade ===0 ? 'Reprovado':
        user.testGrade < 4 ? 'Recuperação' :
        user.testGrade < 7 ? 'Media' : 'Aprovado'
    }
      })
      console.log(newList)

      
REDUCE
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const sum = number.reduce((acumulador, valoratual) => {
    return acumulador + valoratual

}, 0)
console.log(sum)

const list = [1,3,2,2,15]

const subtracao = list.reduce((acumulador, valoratual) => {
    console.log('R$ ' + acumulador + ',00 acc')
    console.log('R$ ' + valoratual + ',00 valor atual')
    return acumulador * valoratual

},-1)
console.log(subtracao)


const carrinho = [
    {   productName: 'Abóbora', pricePerKg: 5, kg: 1},
    {   productName: 'Pepino', pricePerKg: 3.55, kg: 1.3},
    {   productName: 'Limão', pricePerKg: 1.2, kg: 2},
    {   productName: 'Abacate', pricePerKg: 5.4, kg: 1.67},
    {   productName: 'Morango', pricePerKg: 11.9, kg: 3}
]

const totalCarrinho = carrinho.reduce((acumulador , valoratual) => {
    console.log(acumulador)
    console.log(valoratual.pricePerKg)
    console.log(valoratual.kg)
        return acumulador + ( valoratual.pricePerKg * valoratual.kg) 
},0)
console.log('Total: R$' + totalCarrinho.toFixed(2))*/


const companias = [
    { name: 'Sansung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 },
]

const newCompanies = companias.map(company => {
return {
    name: company.name,
    marketValue: (company.marketValue * 1.1).toFixed(0),
    CEO: company.CEO,
    foundedOn: company.foundedOn
    
    }
})
console.log(newCompanies)
//exercios mapfilterresult
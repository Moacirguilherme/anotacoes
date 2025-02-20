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
/*

const companias = [
    { name: 'Sansung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 },
]

/*
const addvaluecompany = companias
.map(company => {
  company.marketValue = (company.marketValue * 1.15)
    return company
}).filter(company => {
    return company.foundedOn < 1990
}).reduce((acc, company) => {
return acc + company.marketValue
},0)
console.log(addvaluecompany.toFixed(2))


const newCompanies = companias
.map(company => {
    company.marketValue = (company.marketValue * 1.1)
    return company
}).filter(company => {
    return company.foundedOn < 1990
}).reduce((acc, company) => {
    return acc + company.marketValue
},0)
console.log(newCompanies.toFixed(1))

const newCompanies = companias
    .map(company => {
        company.marketValue = (company.marketValue * 0.9)
        return company
    }).filter(company => {
        return company.foundedOn > 1980
    }).reduce((acc, company) => {
        return acc + company.marketValue
    }, 0)
console.log(newCompanies)



const produtos = [
    { id: 1, nome: "Notebook", preco: 3500 },
    { id: 2, nome: "Smartphone", preco: 2000 },
    { id: 3, nome: "Tablet", preco: 1500 }
  ];
   
  const nomesMaiusculos = produtos.map(produt => ({
   ...produt,
    nome: produt.nome.toUpperCase(),
    preco: (produt.preco*0.9)
  }))
  
  console.log(nomesMaiusculos);
   
  const produtos = [
    { nome: "Camiseta", preco: 30 },
    { nome: "Calça", preco: 60 },
    { nome: "Tênis", preco: 120 }
  ]

  const changeProduts = produtos.map(produt =>{
    return{
    nome: produt.nome,
    preco: (produt.preco * 1.1)
    }
  })
  console.log(changeProduts)
  
  const produtos = [
    { nome: "Notebook", preco: 5000 },
    { nome: "Smartphone", preco: 3000 },
    { nome: "Tablet", preco: 1500 }
];

const newProdutsDescount = produtos.map(produt =>{
return {
    nome: produt.nome,
    preco: (produt.preco * 0.90)
}
    })
    console.log(newProdutsDescount)
    
    const nomes = ["Ana", "Carlos", "Maria", "João"];

    const saudacoes = nomes.map(nome => {
      return `Olá, ${nome}!`;  // Criando a saudação personalizada
    });
    
    console.log(saudacoes);

    const produtos = [
        { nome: "Mouse", preco: 50 },
        { nome: "Teclado", preco: 120 },
        { nome: "Monitor", preco: 899.99 }
    ];
    
    const produtCurrency = produtos.map(produt =>{

        return {
            nome: produt.nome,
            preco: new Intl.NumberFormat("pt-BR",{
                style:"currency",
                currency:"BRL"}).format(produt.preco)
         }})
        
    
    console.log(produtCurrency);

    const nomes = ["ana", "joão", "maria", "pedro", "lucas"];

    const nomesMaiusculos = nomes.map(item =>{
                return{ 
                    nome: item.toUpperCase()}
         })
    console.log(nomesMaiusculos)

const produtos = [
    { nome: "Notebook", preco: 5000 },
    { nome: "Smartphone", preco: 3000 },
    { nome: "Tablet", preco: 1500 }
];
produtos.push({nome: "Neobook", preco: 1000})

const produtDescount = produtos.map(produt => {

    return {

        nome: produt.nome,
        preco: new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(produt.preco * 0.90)
    }
   
})
console.log(produtDescount);

const produtos = [
    { nome: "Notebook", preco: 5000, estoque: 5, fabricacao: 2022, cor: "Prata", categoria: "Informática", desconto: 10 },
    { nome: "Smartphone", preco: 3000, estoque: 30, fabricacao: 2023, cor: "Preto", categoria: "Celular", desconto: 15 },
    { nome: "Tablet", preco: 1500, estoque: 60, fabricacao: 2021, cor: "Branco", categoria: "Informática", desconto: 5 }
];


const produtosModificados = produtos.map(produto => ({
   
    ...produto,
   preco: new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
}).format(produto.preco * (1- produto.desconto/100)),
statusEstoque:
produto.estoque < 10 ? "Estoque Baixo" :
produto.estoque <=50 ? "Estoque Medio" : "Estoque Alto",
AnoGarantia: produto.fabricacao >= 2023? "Garantia Ativa" : "Garantia Expirada"

}))
console.log(produtosModificados)

const usuario = [{
    nome: "Carlos",
    idade: 30,
    cidade: "São Paulo",
    profissão: "Designer"
  }];

  const changeUser = usuario.map(changes => ({
    ...changes,
    idade: changes.idade + 1,
    profissão: "Desenvolvedor"
  }))
  console.log(changeUser)

  const usuarios = [
    { nome: "Carlos", idade: 30 },
    { nome: "Ana", idade: 25 },
    { nome: "Pedro", idade: 40 }
  ];

  const newAge = usuarios.map(plusAge => ({
    ...plusAge,
    idade: plusAge.idade + 1,
  }))
  console.log(newAge)*/

const formatarPreco = valor => new Intl.NumberFormat("pt-BR", { //funcao formatar preco sera chamanda em outras alteracoes de array
    style: "currency",
    currency: "BRL"
}).format(valor)

const produtosVestuario = [
    { nome: "Camiseta", preco: 30, quantidade: 100 },
    { nome: "Calça", preco: 60, quantidade: 80 },
    { nome: "Tênis", preco: 120, quantidade: 50 }
]
const estoqueAtualizadoVestuario = produtosVestuario.map(estoqueVestuario => ({
    ...estoqueVestuario,
    preco: formatarPreco(estoqueVestuario.preco), // funcao formatarPreco chamada
    quantidade: estoqueVestuario.quantidade + 5
}))

const produtosEletro = [
    { nome: "Teclado", preco: 150, quantidade: 10 },
    { nome: "Mouse", preco: 100, quantidade: 5 },
    { nome: "Monitor", preco: 1200, quantidade: 2 }
];

const estoqueAtualizadoEletro = produtosEletro.map(estoqueEletro => ({
    ...estoqueEletro,
    preco: formatarPreco(estoqueEletro.preco), // funcao formatarPreco chamada.
    quantidade: estoqueEletro.quantidade + 7

}))

console.log(estoqueAtualizadoVestuario)
console.log(estoqueAtualizadoEletro)
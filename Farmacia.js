

const loja = "Farmacia dia e noite";


const produtos = [];

const produto = {
    nome: "Dipirona",
    categoria: "s/receita",
    preco: 2.00,
    quantidade: 25,
    vendidos: 35
};

produtos.push(produto);

produtos.push({
    nome: "Dorflex",
    categoria: "s/receita",
    preco: 1.50,
    quantidade: 4,
    vendidos: 35
});

produtos.push({
    nome: "Salonpas",
    categoria: "s/receita",
    preco: 7.00,
    quantidade: 5,
    vendidos: 30
});

produtos.push({
    nome: "Testosterona",
    categoria: "c/receita",
    preco: 150.00,
    quantidade: 3,
    vendidos: 55
});

produtos.push({
    nome: "Sonrisal",
    categoria: "s/receita",
    preco: 1.50,
    quantidade: 2,
    vendidos: 25
});

produtos.push({
    nome: "Eno",
    categoria: "s/receita",
    preco: 3.00,
    quantidade: 37,
    vendidos: 35
});

function listaprodutos(lista) {
    lista.forEach(function (item) {
        console.log(
          "Nome :" + item.nome + "|"  +  item.categoria + " | " + item.preco + " | " + item.quantidade + " | " + item.vendidos
        );
    });
}



function cadastrarProduto(produtos,nome,categoria,preco,quantidade){
    const produto = {
        nome: nome,
        categoria: categoria,
        preco: preco,
        quantidade: quantidade,
        vendidos: 0
        
        
    };

    produtos.push(produto);
    console.log("Produtos Cadastrados, agora a farmacia tem "+ produtos.length + "produtos");
    
    
};

function calcularValorEstoque(produtos){
    let valor_estoque = 0;
    produtos.forEach( function(item){
        valor_estoque = valor_estoque + (item.preco*item.quantidade);
        

    });

     console.log("Valor do estoque: R$ " + calcularValorEstoque(produtos));
};

   
function buscarProduto(produtos, nomeBuscado) {
    
       for(const item of lista) {
           if(item.nome.toLowercase().includes(nomeBuscado.toLowercase)){
               return item;
           }

            
       }

       return null;
       
}





 





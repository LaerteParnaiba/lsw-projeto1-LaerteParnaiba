

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
    for(let i = 0; i<lista.length; i++){
        const item = lista[i];
        console.log(`${i+1}. ${item.nome} | ${item.categoria} | R$ ${item.preco} | ${item.quantidade} un| ${item.vendidos} vendidos`);

    }
}



function cadastrarProduto(lista,nome,categoria,preco,quantidade){
    const produto = {
        nome: formatarNome(nome),
        categoria: categoria,
        preco: preco,
        quantidade: quantidade,
        vendidos: 0
        
        
    };

    lista.push(produto);
    console.log("Produtos Cadastrados, agora a farmacia tem "+ lista.length + " produtos");
    
    
};

function calcularValorEstoque(lista){
    let valor_estoque = 0;
    lista.forEach( function(item){
        valor_estoque = valor_estoque + (item.preco*item.quantidade);
        

    });

    return valor_estoque;
}

   
 function buscarProduto(lista, nomeBuscado) {
    
       for(const item of lista) {
           if(item.nome.toLowerCase().includes(nomeBuscado.toLowerCase())){
               return item;
           }

            
       }
        
       return null;
       
 }

 function produtosEmfalta(lista,minimo){
    let emFalta  = [];
    for (const item of lista){
        if(item.quantidade<minimo){
            emFalta.push(item);
        }
        
    }

       
     return emFalta;

       
 }

 function aplicarDesconto(lista,categoria,percentual){
    let cont = 0;
    for(const item of lista){
        if(item.categoria.toLowerCase()===categoria.toLowerCase()){
            let novo_preco = item.preco - (item.preco * (percentual/100));
            item.preco = novo_preco;
            ++cont;
        }
    }
       
       
       return cont;
       
 }

 function registrarvenda(lista,nome,quantidade){
    const item = buscarProduto(lista,nome);
    if(item === null || item.quantidade < quantidade){
        return false;
    }

     item.quantidade = item.quantidade - quantidade;
     item.vendidos = item.vendidos + quantidade;
     return true;

 }

function formatarNome(texto) {
    const limpo = texto.trim();                                 
    return limpo.charAt(0).toUpperCase() + limpo.slice(1).toLowerCase();
}

function converterParaJSON(lista) {
    return JSON.stringify(lista);
}

function lerJSON(texto) {
    return JSON.parse(texto);
}



 function gerarRelatorio(nome,lista){
    console.log("======RELATÓRIO:"+nome+"=======");
    console.log("produtos cadastrados:"+lista.length);
    console.log("O valor total em estoque é de: ", calcularValorEstoque(lista)+ " R$");
    const baixos = produtosEmfalta(lista,5);
    console.log("Produtos com estoque baixo"+baixos.length);
    for(const item of baixos){
        console.log(item.nome+"(" +item.quantidade+ "un)");
    }
   
 }

console.log("=======Tarefa 2: Listar========");
listaprodutos(produtos);
console.log("=======Tarefa 3: Cadastrar=====");
cadastrarProduto(produtos,"Agua","s/receita",3.50,32);
console.log("========Tarefa 4: Valor do estoque=====");
console.log("valor do estoque "+calcularValorEstoque(produtos)+"R$");
console.log("=========Tarefa 5: buscar======");
const achado = buscarProduto(produtos, "DIPIRONA");
if (achado !== null) {
    console.log("Encontrado: " + achado.nome + " - R$ " + achado.preco);
} else {
    console.log("Produto não encontrado.");
}
const Naoachado = buscarProduto(produtos, "Diclofenaco");
if (Naoachado !== null) {
    console.log("Encontrado: " + Naoachado.nome + " - R$ " + Naoachado.preco);
} else {
    console.log("Produto não encontrado.");
}
console.log("===========Tarefa 6: em falta========");
const faltando = produtosEmfalta(produtos,5);
console.log("A quantidade de produtos com menos de 5 unidades:"+faltando.length);
console.log("===========Tarefa 7: desconto=========");
console.log(+aplicarDesconto(produtos,"c/receita",10)+" produtos receberam desconto.");
console.log("Novo preço da Test0: R$"+buscarProduto(produtos,"Testosterona").preco);
console.log("========Tarefa 8: registrar venda======");
if (registrarvenda(produtos, "Dipirona", 3)) {
    const c = buscarProduto(produtos, "Dipirona");
    console.log("Venda realizada! " + c.nome + ": " + c.quantidade + " un. em estoque, " + c.vendidos + " vendidos.");
}
if (!registrarvenda(produtos, "Testosterona", 5)) {
    console.log("Venda não realizada: estoque insuficiente ou produto inexistente.");
}

console.log("=======Tarefa 9: formatar nome=======");
console.log(formatarNome("    eNo     "));

console.log("========Tarefa 10: JSON=======");
const json = converterParaJSON(produtos);
console.log(typeof json);
const recuperados = lerJSON(json);
console.log("Itens recuperados: " + recuperados.length + " | Primeiro: " + recuperados[0].nome);

console.log("--- Tarefa 11: relatório ---");
gerarRelatorio("Farmacia Dia e Noite", produtos);


//terminei aqui!.















  





 





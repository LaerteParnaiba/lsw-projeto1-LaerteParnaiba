# Minha Loja - Farmácia Dia e Noite 💊
 
**Aluno:** Laerte Parnaiba Soares
**Matrícula:** 202522010010
 
## Sobre o projeto
 
Este projeto é o sistema de uma pequena farmácia, feito em JavaScript. Ele guarda os produtos em uma lista e permite cadastrar, procurar, vender, dar desconto e até gerar um relatório com a situação do estoque.
 
Cada produto tem cinco informações: o **nome**, a **categoria** (com ou sem receita), o **preço**, a **quantidade** em estoque e quantos já foram **vendidos**.
 
## Como executar
 
Com o Node.js instalado, abra o terminal na pasta do projeto e rode:
 
```
node loja.js
```
 
O programa executa todas as funções em sequência e mostra o resultado de cada uma na tela.
 
## O que cada função faz
 
### Cadastro e consulta
 
- **`listarProdutos(lista)`**: mostra todos os produtos, um por linha, numerados a partir de 1, com nome, categoria, preço, quantidade e vendidos.
- **`cadastrarProduto(lista, nome, categoria, preco, quantidade)`**: adiciona um produto novo à lista. Ele começa com 0 vendidos e o nome já é arrumado automaticamente.
- **`buscarProduto(lista, termo)`**: procura o primeiro produto que tenha o termo no nome, sem se importar com maiúsculas ou minúsculas. Se não achar nenhum, devolve `null`.
### Estoque e vendas
 
- **`calcularValorEstoque(lista)`**: soma o valor de tudo o que está guardado (preço × quantidade de cada produto) e devolve o total.
- **`produtosEmFalta(lista, minimo)`**: separa os produtos que estão acabando, ou seja, com menos unidades que o mínimo informado. Devolve uma lista nova e não mexe na original.
- **`registrarVenda(lista, nome, quantidade)`**: faz a venda, tirando as unidades do estoque e somando nos vendidos. Se o produto não existir ou não tiver estoque suficiente, a venda não acontece e a função devolve `false`.
- **`aplicarDesconto(lista, categoria, percentual)`**: baixa o preço de todos os produtos de uma categoria e informa quantos foram alterados.
### Ferramentas auxiliares
 
- **`formatarNome(texto)`**: deixa o nome organizado, sem espaços sobrando nas pontas e só com a primeira letra maiúscula. Por exemplo, `"   bORRACHA branca  "` vira `"Borracha branca"`.
- **`converterParaJSON(lista)`**: transforma a lista de produtos em um texto no formato JSON, que pode ser salvo.
- **`lerJSON(texto)`**: faz o caminho contrário e recupera a lista a partir do texto JSON.
### Relatório
 
- **`gerarRelatorio(nome, lista)`**: reúne as informações principais em um só lugar: quantos produtos existem, o valor total do estoque e quais produtos estão com estoque baixo.

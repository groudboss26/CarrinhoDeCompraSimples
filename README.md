
# 🛒 Projeto Carrinho de Compras Simples

## Descrição

Este projeto implementa um **carrinho de compras simples** usando HTML, JavaScript e DOM.
Ele permite **adicionar, excluir e finalizar pedidos** de produtos, exibindo mensagens dinâmicas para cada ação e um resumo do pedido final. Após finalizar, é possível reiniciar automaticamente para um novo pedido.

---

## Funcionalidades

1. **Adicionar produtos**

   * Cada produto possui um input de quantidade.
   * Ao clicar em "Adicionar", a quantidade informada é somada ao carrinho.
   * Uma mensagem aparece indicando o total do produto após a adição.

2. **Excluir produtos**

   * É possível remover unidades de um produto existente no carrinho.
   * Mensagens dinâmicas informam a quantidade restante.

3. **Finalizar pedido**

   * Exibe todas as unidades adicionadas por produto.
   * Calcula o **total acumulado** do pedido.
   * Adiciona um botão **"Fechar"** que permite reiniciar o carrinho para um novo pedido.

4. **Reiniciar carrinho**

   * Limpa o objeto `carrinho`.
   * Remove o resumo final da tela.
   * Limpa todos os inputs de quantidade.
   * Mostra uma mensagem rápida de aviso: "O carrinho foi reiniciado! Você pode começar um novo pedido."

---

## Estrutura do Projeto

```
/projeto-carrinho
│
├─ index.html      # HTML com inputs e botões para cada produto
└─ java.js         # Lógica JavaScript do carrinho
```

### index.html

* Estrutura básica HTML com inputs numéricos para cada produto.
* Botões: **Adicionar**, **Excluir**, **Finalizar**.
* Container principal: `<div id="father">` que armazena mensagens e resumo final.

### java.js

* Objeto `carrinho = {}` para armazenar as quantidades de cada produto.
* Funções principais:

  * `add(produtoId, produtoNome)` → adiciona unidades de um produto ao carrinho.
  * `excluir(produtoId, produtoNome)` → remove unidades de um produto do carrinho.
  * `mensagem(produtoNome, valorTotal, tipo)` → exibe mensagens dinâmicas individuais por produto.
  * `finalizar()` → mostra o resumo do pedido e adiciona botão para reiniciar.
  * `reiniciar()` → reseta carrinho, limpa inputs e mensagens.

---

## Observações Técnicas

* Cada mensagem de produto tem **um ID único** (`msg-ProdutoX`) para que não se sobreponha a outra.
* Para remover todas as mensagens antes do resumo, usa-se:

  ```js
  let mensagens = document.querySelectorAll('[id^="msg-"]')
  mensagens.forEach(msg => msg.remove())
  ```
* O botão de reinício é criado dinamicamente dentro do resumo final, usando:

  ```js
  resumo += `<button onclick="reiniciar()">Fechar</button>`
  ```

---

## Fluxo de Uso

1. O usuário insere a quantidade de cada produto.
2. Clica **Adicionar** ou **Excluir**.
3. O sistema exibe mensagens separadas por produto.
4. Ao clicar em **Finalizar**:

   * Aparece o resumo do pedido.
   * Exibe o total por produto e o total acumulado.
   * Botão **Fechar** permite reiniciar o carrinho.
5. Ao clicar em **Fechar**:

   * O carrinho é reiniciado.
   * Inputs e mensagens antigas são apagados.
   * Uma mensagem rápida informa que o carrinho foi reiniciado.

---

## Autor

**Guilherme Duarte da Silva**

Aluno de Desenvolvimento de Software



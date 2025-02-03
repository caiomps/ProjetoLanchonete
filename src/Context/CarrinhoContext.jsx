import React, { createContext, useState } from "react";

export const CarrinhoContext = createContext();

export const CarrinhoProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [produtosCarrinho, setProdutosCarrinho] = useState([]);

  const adicionarAoCarrinho = (produto) => {
    const produtoExistente = produtosCarrinho.find(
      (item) => item.id === produto.id
    );

    if (produtoExistente) {
      // Atualiza a quantidade do produto já existente
      const novoCarrinho = produtosCarrinho.map((item) =>
        item.id === produto.id
          ? { ...item, quantidade: item.quantidade + 1 }
          : item
      );
      setProdutosCarrinho(novoCarrinho);
    } else {
      // Adiciona um novo produto ao carrinho
      setProdutosCarrinho([...produtosCarrinho, { ...produto, quantidade: 1 }]);
    }
  };
  console.log(produtosCarrinho);

  let removerDoCarrinho = (produto) => {
    setCount(count - 1);
    setProdutosCarrinho(
      produtosCarrinho.filter((elemento) => {
        return elemento !== produto;
      })
    );
  };

  return (
    <CarrinhoContext.Provider
      value={{
        produtosCarrinho,
        setProdutosCarrinho,
        adicionarAoCarrinho,
        count,
        setCount,
        removerDoCarrinho,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};

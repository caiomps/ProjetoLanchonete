import React, { createContext, useState } from "react";

export const CarrinhoContext = createContext();

export const CarrinhoProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [produtosCarrinho, setProdutosCarrinho] = useState([]);

  let adicionarAoCarrinho = (produto) => {
    setProdutosCarrinho([...produtosCarrinho, produto]);
    console.log(produtosCarrinho);
  };

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

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "incrementar":
//       return { count: state.count + 1 };
//       break;
//     case "adicionar":
//       return { ...state, produto: [...produtos, action.payload] };
//   }
// };

// const CarrinhoProvider = ({ children }) => {
//   let stateInitial = { count: 0, produtos: [] };

//   const [state, dispatch] = useReducer(reducer, stateInitial);

//   return (
//     <CarrinhoContext.Provider value={{ state, dispatch }}>
//       {children}
//     </CarrinhoContext.Provider>
//   );
// };

// export default CarrinhoProvider;

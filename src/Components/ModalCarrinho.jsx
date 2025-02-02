import React, { useState } from "react";
import { useContext } from "react";
import { CarrinhoContext } from "../Context/CarrinhoContext";
import fechar from "../assets/fechar.png";

const ModalCarrinho = ({ setIsActive }) => {
  const { produtosCarrinho, removerDoCarrinho } = useContext(CarrinhoContext);
  // valor total dos produtos
  let valor = 0;

  const [input, setInput] = useState("");

  // Listar pedidos no carrinho de compra
  let allProducts = produtosCarrinho.map((produto) => {
    valor += produto.preco;

    return (
      <li
        key={produto.id}
        className="border-b-2 py-1 flex justify-between items-center min-h-[50px]"
      >
        <div className="max-w-72">
          <h1 className="font-bold">
            {produto.nome} - {produto.preco} R$
          </h1>
          <h3>{produto.descricao}</h3>
        </div>
        <div className="h-full flex justify-center items-center">
          <img
            onClick={() => removerDoCarrinho(produto)}
            src={fechar}
            alt=""
            className="w-8 h-8 cursor-pointer"
          />
        </div>
      </li>
    );
  });

  // Excluir Produto da lista
  let handleDelete = (key) => {
    console.log(allProducts);
  };

  // array com os nomes dos pedidos
  let todosNames = produtosCarrinho.map((produto) => {
    return `• ${produto.nome}`;
  });

  // Fechar Modal
  let fecharModal = () => {
    setIsActive(false);
    console.log(todosNames);
  };

  // Finalizar pedido
  let handleSubmit = (e) => {
    e.preventDefault();
    const numero = "5583986812407";
    const mensagem = `Olá!\nGostaria de fazer um pedido com os seguintes itens:\n${todosNames}\nEndereço de entrega:\n${input}`;

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    todosNames === true ? window.open(url, "_blank") : "";
  };

  return (
    <div className="w-screen h-screen fixed top-0  backdrop-blur-md flex items-center justify-center overflow-y-hidden">
      {/* modal   */}
      <div className="w-4/5 max-w-3xl h-[30em] bg-white border-4 border-black">
        <h1 className="text-center font-bold text-4xl">Seu Carrinho</h1>
        <div className="mx-3 flex flex-col gap-4">
          <div className="h-70 max-h-75 overflow-y-auto">
            {/*este e o container que tem os allProducts */}
            <ul>{allProducts}</ul>
          </div>
          <div className="">
            <h2 className="font-bold">Total: {valor} R$</h2>
            <form onSubmit={handleSubmit}>
              <label className="flex flex-col mb-2">
                <span className="font-bold">Endereco de Entrega</span>
                <input
                  className="border-2"
                  type="text"
                  placeholder="Digite seu Endereco"
                  onChange={(e) => setInput(e.target.value)}
                />
              </label>
              <div className="flex justify-between">
                <p
                  onClick={fecharModal}
                  className="bg-red-500 hover:bg-red-700 px-2 py-1 font-bold text-white cursor-pointer rounded-md"
                >
                  fechar
                </p>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-2 py-1 cursor-pointer rounded-md">
                  Finalizar pedido
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* modal */}
    </div>
  );
};

export default ModalCarrinho;

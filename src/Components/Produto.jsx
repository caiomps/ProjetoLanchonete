import addCarrinho from "../assets/addCarrinho.png";
// useContext
import { CarrinhoContext } from "../Context/CarrinhoContext";
import { useContext } from "react";

// Componente Produto
const Produto = ({ id, nome, preco, descricao, img, quantidade }) => {
  // desestruturando o array do useContext
  const { count, setCount, adicionarAoCarrinho } = useContext(CarrinhoContext);

  // quando clicar no icone no card adiciona no carrinho do context
  let adicionarCarrinho = () => {
    const produto = {
      id,
      nome,
      preco,
      descricao,
      quantidade: 0,
    };

    setCount(count + 1);
    adicionarAoCarrinho(produto);
  };

  return (
    <div className="flex gap-2 max-w-[90%] mx-auto shadow-gray-800">
      {/* imagem do produto */}
      <div className="flex items-end">
        <img src={img} alt="foto do Produto" className="w-40 h-25 rounded-md" />
      </div>
      {/* lateral do produto com descricao de tudo */}
      <div className="w-full">
        <h1 className="font-bold text-2xl">{nome}</h1>
        <h3 className="max-w-2xs">{descricao}</h3>

        <div className=" w-full flex justify-between">
          <h1 className="font-bold text-2xl">{preco}R$</h1>
          <button className="cursor-pointer px-2 py-1">
            <img
              onClick={adicionarCarrinho}
              src={addCarrinho}
              alt=""
              className="w-6"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Produto;

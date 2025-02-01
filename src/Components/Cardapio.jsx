// lista de objetos

import produtos from "../produtos";
//componentes
import Produto from "./Produto";

const Cardapio = () => {
  const listaProdutos = produtos.map((produto) => {
    return (
      <li key={produto.id}>
        <Produto
          nome={produto.nome}
          preco={produto.preco}
          descricao={produto.descricao}
          img={produto.img}
        />
      </li>
    );
  });

  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-4">
        Conheca nosso Cardapio
      </h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {listaProdutos}
      </ul>

      <h1 className="text-4xl font-bold text-center my-4">Bebidas</h1>
    </div>
  );
};

export default Cardapio;

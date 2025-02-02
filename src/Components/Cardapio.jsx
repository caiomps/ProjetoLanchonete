// lista de objetos
import produtos from "../produtos";
import { bebidas } from "../produtos";
//componentes
import Produto from "./Produto";
//imagens
import logoLanches from "../assets/logoLanches.png";
import logoBebidas from "../assets/logoBebidas.png";
import logoSobremesas from "../assets/logoSobremesas.png";

const Cardapio = () => {
  //listar produtos de comer
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

  //listar bebidas
  const listaBebidas = bebidas.map((bebidas) => {
    return (
      <li key={bebidas.id}>
        <Produto
          nome={bebidas.nome}
          preco={bebidas.preco}
          descricao={bebidas.descricao}
          img={bebidas.img}
        />
      </li>
    );
  });

  return (
    // esse mb-20 foi colocado para o componente carrinhoDeCompras ficar em cima dos produtos
    <main className="mb-20 overscroll-auto">
      <h1 className="text-4xl font-bold text-center my-5">
        Conheca nosso Cardapio
      </h1>
      {/* container com as categorias */}
      <div className="w-full flex justify-around mb-5">
        <a
          onClick={(e) => e.preventDefault}
          href="#lanches"
          className="border-2 rounded-full p-5"
        >
          <img src={logoLanches} alt="logoLanches" className="w-15" />
        </a>

        <a
          onClick={(e) => e.preventDefault}
          href="#bebidas"
          className="border-2 rounded-full p-5"
        >
          <img src={logoBebidas} alt="logoBebidas" className="w-15" />
        </a>

        <a
          onClick={(e) => e.preventDefault}
          href="#"
          className="border-2 rounded-full p-5"
        >
          <img src={logoSobremesas} alt="logoSobremesas" className="w-15" />
        </a>
      </div>
      <div className="flex flex-col gap-10">
        <section id="lanches">
          <h1 className="text-4xl font-bold text-center mt-8 mb-10">Lanches</h1>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {listaProdutos}
          </ul>
        </section>

        <section id="bebidas">
          <h1 className="text-4xl font-bold text-center my-4">Bebidas</h1>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {listaBebidas}
          </ul>
        </section>
      </div>
    </main>
  );
};

export default Cardapio;

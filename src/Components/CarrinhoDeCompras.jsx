import { CarrinhoContext } from "../Context/CarrinhoContext";
import { useContext, useState } from "react";
import ModalCarrinho from "./ModalCarrinho";

const CarrinhoDeCompras = () => {
  const { count } = useContext(CarrinhoContext);
  const [isActive, setIsActive] = useState(false);

  let handleModal = () => {
    setIsActive(!isActive);
    console.log(isActive);
  };

  return (
    <>
      <div
        onClick={handleModal}
        className="bg-red-500 fixed bottom-0 h-15 min-w-screen cursor-pointer flex justify-center items-center"
      >
        <h1 className="text-center text-white font-bold text-xl">
          ( {count} ) Veja Meu Carrinho
        </h1>
      </div>
      {isActive && <ModalCarrinho setIsActive={setIsActive} />}
    </>
  );
};

export default CarrinhoDeCompras;

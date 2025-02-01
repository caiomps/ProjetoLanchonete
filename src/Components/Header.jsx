import logo from "../assets/logoBurguer.jpg";
const Header = () => {
  return (
    <header className="bg-black h-60 flex flex-col items-center justify-center gap-3">
      <div>
        <img src={logo} alt="logo do hambuguer" className="w-30 rounded-full" />
      </div>
      <h1 className="text-white font-bold">Restaurante: HAMBUGUERIA</h1>
    </header>
  );
};

export default Header;

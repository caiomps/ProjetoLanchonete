import hamburguer from "./assets/hamburguer.jpg";
import fantaLaranja from "./assets/fantaLaranja.png";
import sucoDeLaranja from "./assets/sucoDeLaranja.png";
import guarana from "./assets/guarana.png";

const produtos = [
  {
    id: 0,
    nome: "Cheese Smash",
    preco: 22,
    descricao: "Smash burguer com queijo derretido e molho especial",
    img: hamburguer,
    quantidade: 0,
  },
  {
    id: 1,
    nome: "Bacon Smash",
    preco: 32,
    descricao: "Smash burguer com bacon crocante e queijo",
    img: hamburguer,
    quantidade: 0,
  },
  {
    id: 2,
    nome: "Duplo Smash",
    preco: 42,
    descricao: "Dois smash burguers suculentos com queijo",
    img: hamburguer,
    quantidade: 0,
  },
  {
    id: 3,
    nome: "Smash Extra Queijo",
    preco: 52,
    descricao: "Smash burguer com uma generosa camada extra de queijo",
    img: hamburguer,
    quantidade: 0,
  },
  {
    id: 4,
    nome: "Clássico Smash",
    preco: 62,
    descricao: "O tradicional smash burguer com um toque especial",
    img: hamburguer,
    quantidade: 0,
  },
];

export const bebidas = [
  {
    id: 1,
    nome: "Guarana",
    preco: 8,
    descricao: "",
    img: guarana,
    quantidade: 0,
  },
  {
    id: 2,
    nome: "Suco de Laranja",
    preco: 10,
    descricao: "",
    img: sucoDeLaranja,
    quantidade: 0,
  },
  {
    id: 3,
    nome: "Fanta Laranja",
    preco: 52,
    descricao: "",
    img: fantaLaranja,
    quantidade: 0,
  },
];

export default produtos;

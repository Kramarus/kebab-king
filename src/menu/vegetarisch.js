import convertToMenu from "./convertToMenu";

let vegetarischList = [
  {
    id: "38",
    category: "Vegetarisch",
    name: "Falafel-Tasche",
    comment: "mit 3 Stück Falafel, Fladenbrot, gem. Salat & Sauce",
    price: 6.5,
  },
  {
    id: "39",
    category: "Vegetarisch",
    name: "Falafel gerollt",
    comment: "mit 4 Stück Falafel, gem. Salat & Sauce",
    price: 7,
  },
  {
    id: "40",
    category: "Vegetarisch",
    name: "Falafel-Teller",
    comment: "mit 6 Stück Falafel, gem. Salat, Pommes & Sauce",
    price: 10,
  },
  {
    id: "41",
    category: "Vegetarisch",
    name: "Salat-Tasche",
    comment: "mit gem. Salat, Fladenbrot, Weichkäse & Sauce",
    price: 6,
  },
  {
    id: "42",
    category: "Vegetarisch",
    name: "Salat-Rollo",
    comment: "mit gem.Salat, Weichkäse & Sauce",
    price: 6.5,
  },
  {
    id: "43",
    category: "Vegetarisch",
    name: "Vegetarische-Tasche",
    comment: "mit gebratenen Gemüsen, gem. Salat & Sauce",
    price: 7,
  },
  {
    id: "44",
    category: "Vegetarisch",
    name: "Vegetarische-Rollo",
    comment: "mit gebratenen Gemüsen, gem. Salat & Sauce",
    price: 7.5,
  },
  {
    id: "46",
    category: "Vegetarisch",
    name: "Pommes-Tasche",
    comment: "mit gem. Salat, Fladenbrot, Pommes & Sauce",
    price: 6.5,
  },
  {
    id: "47",
    category: "Vegetarisch",
    name: "Pommes-Rollo",
    comment: "mit gem.Salat, Pommes & Sauce",
    price: 7,
  },
];

let vegetarischMenu = convertToMenu(vegetarischList);

export default vegetarischMenu;

import convertToMenu from "./convertToMenu";

let drinksList = [
  {
    id: "48",
    category: "Getränke",
    name: "Softdrink 0,33L",
    comment: "Cola | Fanta | Sprite | Mezzo-Mix",
    price: 2.2,
  },
  {
    id: "49",
    category: "Getränke",
    name: "Softgrink 1L",
    comment: "Cola | Fanta | Sprite | Mezzo-Mix",
    price: 3.5,
  },
  {
    id: "50",
    category: "Getränke",
    name: "Wasser 0,33L",
    comment: null,
    price: 2.2,
  },
  {
    id: "51",
    category: "Getränke",
    name: "Multi 0,33L",
    comment: null,
    price: 2.2,
  },
  {
    id: "52",
    category: "Getränke",
    name: "Uludag gazoz 0,33L",
    comment: null,
    price: 2.2,
  },
  {
    id: "53",
    category: "Getränke",
    name: "Ayran 0,2L",
    comment: null,
    price: 1.5,
  },
  {
    id: "54",
    category: "Getränke",
    name: "Vita Malz 0,33L",
    comment: null,
    price: 2.5,
  },
  {
    id: "55",
    category: "Getränke",
    name: "Krombacher 0,33L",
    comment: null,
    price: 2.5,
  },
  {
    id: "56",
    category: "Getränke",
    name: "Kaffee | Cappuccino | Milchkaffee",
    comment: null,
    price: 2,
  },
];

let drinksMenu = convertToMenu(drinksList);

export default drinksMenu;

import convertToMenu from "./convertToMenu";

let imbissList = [
  {
    id: "24",
    category: "Imbiss",
    name: "Bratwurst",
    comment: "einfach",
    price: 3,
  },
  {
    id: "25",
    category: "Imbiss",
    name: "Bratwurst",
    comment: "mit kleiner Pommes",
    price: 5.5,
  },
  {
    id: "26",
    category: "Imbiss",
    name: "Currywurst",
    comment: "einfach",
    price: 4.5,
  },
  {
    id: "27",
    category: "Imbiss",
    name: "Currywurst",
    comment: "mit kleiner Pommes",
    price: 7,
  },
  {
    id: "28",
    category: "Imbiss",
    name: "Currywurst",
    comment: "mit großer Pommes",
    price: 8,
  },
  {
    id: "29",
    category: "Imbiss",
    name: "Currywurst",
    comment: "mit kleiner Pommes Spezial",
    price: 8,
  },
  {
    id: "30",
    category: "Imbiss",
    name: "Currywurst",
    comment: "mit großer Pommes Spezial",
    price: 9,
  },
  {
    id: "31A",
    category: "Imbiss",
    name: "Chicken Nuggets (6 Stück)",
    comment: null,
    price: 4.5,
  },
  {
    id: "31B",
    category: "Imbiss",
    name: "Chicken Nuggets (9 Stück)",
    comment: null,
    price: 7,
  },
  {
    id: "31C",
    category: "Imbiss",
    name: "Chicken Nuggets (12 Stück)",
    comment: null,
    price: 9,
  },
];

const imbissMenu = convertToMenu(imbissList);

export default imbissMenu;
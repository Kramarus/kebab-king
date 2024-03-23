import convertToMenu from "./convertToMenu";

let schnitzelList = [
  {
    id: "13",
    category: "Schnitzel",
    name: "Schnitzel",
    comment: "mit Pommes, gem. Salat & Sauce",
    price: 10.0
  },
  {
    id: "14",
    category: "Schnitzel",
    name: "Jägerschnitzel",
    comment: "mit Pommes, gem. Salat & Sauce",
    price: 11.0
  },
  {
    id: "15",
    category: "Schnitzel",
    name: "Paprikaschnitzel Balkan Art",
    comment: "mit Pommes, gem. Salat & Sauce",
    price: 11.0
  },
  {
    id: "16",
    category: "Schnitzel",
    name: "Schnitzel Hollandaise",
    comment: "mit Pommes, gem. Salat & Sauce",
    price: 11.0
  }
]

let schnitzelMenu = convertToMenu(schnitzelList);
  
export default schnitzelMenu;

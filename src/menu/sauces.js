import convertToMenu from "./convertToMenu";

let sausecList = [
    {
        id: "57",
        name: "Mayo | Ketchup | Curry | Joghurt | Tzatziki | Cocktail",
        category: "Sauces",
        comment: null,
        price: 0.7,
    },
    {
        id: "58",
        name: "Jägersauce | Paprikasauce Balkan Art | Hollandaise",
        category: "Sauces",
        comment: null,
        price: 1.0,
    }
];

let saucesMenu = convertToMenu(sausecList);

export default saucesMenu;
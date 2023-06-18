import convertToMenu from "./convertToMenu";

let sausecList = [
    {
        id: "57",
        name: "Sauces",
        category: "Sauces",
        comment: "Mayo | Ketchup | Curry | Joghurt | Tzatziki | Cocktail",
        price: 0.7,
    },
    {
        id: "58",
        name: "Sauces",
        category: "Sauces",
        comment: "Jägersauce | Paprikasauce Balkan Art | Hollandaise",
        price: 1.0,
    }
];

let saucesMenu = convertToMenu(sausecList);

export default saucesMenu;
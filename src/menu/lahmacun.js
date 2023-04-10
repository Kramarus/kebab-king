import convertToMenu from "./convertToMenu";

let lahmacunList = [
    {
        id: "11",
        category: "Lahmacun",
        name: "Lahmacun",
        comment: "mit gem. Salat & Sauce",
        price: 6.0
    },
    {
        id: "12",
        category: "Lahmacun",
        name: "Lahmacun (Döner)",
        comment: "mit gem. Salat & Sauce",
        price: 8.0
    }
];

let lahmacunMenu = convertToMenu(lahmacunList);
    
export default lahmacunMenu;
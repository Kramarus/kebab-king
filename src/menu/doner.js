import convertToMenu from "./convertToMenu";

const donerList = [
    {
        id: '1',
        category: "Döner",
        name: "Döner Tasche",
        comment: "mit gem. Salat & Sauce",
        price: 7.5
    },
    {
        id: '2',
        category: "Döner",
        name: "Mega-Döner",
        comment: "(extra Fleisch) mit gem. Salat & Sauce",
        price: 8.5
    },
    {
        id: '3',
        category: "Döner",
        name: "Dürüm Döner",
        comment: "(gerollt) mit gem. Salat & Sauce",
        price: 8.0
    },
    {
        id: '4',
        category: "Döner",
        name: "Mega-Rollo",
        comment: "(extra Fleisch) mit gem. Salat & Sauce",
        price: 9.0
    },
    {
        id: '5',
        category: "Döner",
        name: "Döner-Box",
        comment: "(Pomm-Döner) mit Pommes, Dönerfleisch & Sauce",
        price: 8.0
    },
    {
        id: '6',
        category: "Döner",
        name: "Döner-Teller",
        comment: "mit Pommes, Dönerfleisch & Sauce",
        price: 11.00
    },
    {
        id: '7',
        category: "Döner",
        name: "Döner-Teller",
        comment: "mit gem. Salat, Dönerfleisch & Sauce",
        price: 11.00
    },
    {
        id: '8',
        category: "Döner",
        name: "Döner-Teller (komplett)",
        comment: "mit Pommes gem. Salat & Sauce",
        price: 12.00
    },
    {
        id: '9',
        category: "Döner",
        name: "Taxi-Teller",
        comment: "mit Dönerfleisch, Currywurst, Pommes & Sauce",
        price: 11.5
    },
    {
        id: '10',
        category: "Döner",
        name: "Döner Überbacken",
        comment: "mit Tomatensauce, Paprika, Hollandaise, Käse überbacken",
        price: 10.0
    }
]

let donerMenu = convertToMenu(donerList);

export default donerMenu;

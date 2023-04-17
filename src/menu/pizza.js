const pizzaList = [
  {
    id: "17",
    category: "Pizza",
    name: "Margherita",
    comment: "mit Tomatensauce, Goudakäse & Oregano",
    price: {
      small: 6.5,
      big: 7.5,
    },
  },
  {
    id: "18",
    category: "Pizza",
    name: "Vegetarier",
    comment: "mit Spinat, Brokkoli, Paprika, Champignons",
    price: {
      small: 8,
      big: 10,
    },
  },
  {
    id: "19A",
    category: "Pizza",
    name: "Calzone",
    comment: "mit Dönerfleisch & Tomatensauce",
    price: {
      small: null,
      big: 9,
    },
  },
  {
    id: "19B",
    category: "Pizza",
    name: "Calzone",
    comment: "mit Thunfisch & Mais",
    price: {
      small: null,
      big: 9,
    },
  },
];

const pizzaExtras = [
  {
    name: "Ananas",
    price: {
      small: 0.5,
      big: 1,
    },
  },
  {
    name: "Artischockenherzen",
    price: {
      small: 0.5,
      big: 1,
    },
  },
  {
    name: "Blattspinat",
    price: {
      small: 0.5,
      big: 1,
    },
  },
  {
    name: "Brokkoli",
    price: {
      small: 0.5,
      big: 1,
    },
  },
  {
    name: "Dönerfleisch",
    price: {
      small: 0.5,
      big: 1,
    },
  },
  {
    name: "Ei",
    price: {
      small: 0.5,
      big: 1,
    },
  },
  {
    name: "Fr. Champignons",
    price: {
      small: 0.5,
      big: 1,
    },
  },
  {
    name: "Hinterkochschinken",
    price: {
      small: 0.5,
      big: 1,
    },
  },
  {
    name: "Hollandaise (Sauce)",
    price: {
      small: 0.5,
      big: 1,
    },
  },
  {
    name: "Jalapeños",
    price: {
      small: 0.5,
      big: 1,
    },
  },
  {
    name: "Mais",
    price: {
      small: 0.5,
      big: 1,
    },
  },
  {
    name: "Mozzarella",
    price: {
      small: 0.5,
      big: 1,
    },
  },
  {
    name: "Peperoni (mild)",
    price: {
      small: 0.5,
      big: 1,
    },
  },
  {
    name: "Rote Paprika",
    price: {
      small: 0.5,
      big: 1,
    },
  },
  {
    name: "Salami",
    price: {
      small: 0.5,
      big: 1,
    },
  },
  {
    name: "Sardellen",
    price: {
      small: 0.5,
      big: 1,
    },
  },
  {
    name: "Schwarze Oliven",
    price: {
      small: 0.5,
      big: 1,
    },
  },
  {
    name: "Thunfisch",
    price: {
      small: 0.5,
      big: 1,
    },
  },
  {
    name: "Weichkäse",
    price: {
      small: 0.5,
      big: 1,
    },
  },
  {
    name: "Zwiebeln",
    price: {
      small: 0.5,
      big: 1,
    },
  },
];

const pizzaExtras2 = [
  {
    name: "Meeresfrüchte",
    price: {
      small: 1,
      big: 1.5,
    },
  },
  {
    name: "Schrimps",
    price: {
      small: 1,
      big: 1.5,
    },
  },
  {
    name: "Sucuk",
    price: {
      small: 1,
      big: 1.5,
    },
  },
];

let pizzaMenu = (
  <>
    <table>
      <tr>
        <td>
          
        </td>
        <td>
          
        </td>
        <td>
          <h4>
            klein <br />
            (24 cm)
          </h4>
        </td>
        <td>
          <h4>
            groß <br />
            (30 cm)
          </h4>
        </td>
      </tr>
      {pizzaList.map((item) => (
        <tr>
          <td className="menu-id">
            <h3>{item.id}</h3>
          </td>
          <td>
            <div>
              <h3 className="menu-item">{item.name}</h3>
              <p className="menu-comment">{item.comment}</p>
            </div>
          </td>
          <td>
            <h3>{item.price.small ? item.price.small.toFixed(2) + "€" : ""}</h3>
          </td>
          <td>
            <h3>{item.price.big ? item.price.big.toFixed(2) + "€" : ""} </h3>
          </td>
        </tr>
      ))}
      <tr>
        <td><h3>Extra</h3></td>
        <td>
          <p>{pizzaExtras.map((item) => item.name + " | ")}</p>
        </td>
        <td><h3>0.50€</h3></td>
        <td><h3>1.00€</h3></td>
      </tr>
      <tr>
        <td><h3>Extra</h3></td>
        <td>
          <p>{pizzaExtras2.map((item) => item.name + " | ")}</p>
        </td>
        <td><h3>1.00€</h3></td>
        <td><h3>1.50€</h3></td>
      </tr>
    </table>
  </>
);

export default pizzaMenu;

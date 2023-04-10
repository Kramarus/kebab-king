import convertToMenu from "./convertToMenu";

let salateList = [
  {
    id: "35",
    category: "Salate",
    name: "Thunfisch Salat",
    comment: "Gemischter Salat mit Thunfisch und schwarzen Oliven",
    price: {
      small: 8,
      big: 9,
    },
  },
  {
    id: "36",
    category: "Salate",
    name: "King Salat",
    comment: "Gemischter Salat mit schwarzen Oliven, Mais und Weichkäse",
    price: {
      small: 6.5,
      big: 7.5,
    },
  },
  {
    id: "37",
    category: "Salate",
    name: "Kleiner Beilagen-Salat",
    comment: null,
    price: {
      small: 2.5,
      big: null,
    },
  },
];

let extraSalate = {
  message:
    "Alle Salate gibt es wahlweise mit Essig-Olivenöl-Dressing, Tzatziki, Joghurtsauce, Cocktailsauce oder Balsamico-Essig.",
  message2: "Salate servieren wir mit Brot.",
};

let salateMenu = (
  <>
    <table>
      <tr>
        <td>
          <h4>Nummer</h4>
        </td>
        <td>
          <h4>Pizza</h4>
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
      {salateList.map((item) => (
        <tr>
          <td>
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
        <td colSpan="4">
          <p>{extraSalate.message}</p>
          <p>{extraSalate.message2}</p>
        </td>
      </tr>
    </table>
  </>
);

export default salateMenu;

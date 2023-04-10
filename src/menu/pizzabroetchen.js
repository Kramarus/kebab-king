let pizzabrotchenList = [
  {
    id: "20",
    category: "Pizzabrötchen",
    name: "Pizzabrötchen (8 Stück)",
    comment:
      "mit Kräuterbutter | Tzatziki | Cocktailsauce | Joghurtsauce | Aioli",
    price: 5,
  },
  {
    id: "21",
    category: "Pizzabrötchen",
    name: "Pizzabrötchen mit Käse (8 Stück)",
    comment:
      "mit Kräuterbutter | Tzatziki | Cocktailsauce | Joghurtsauce | Aioli",
    price: 6,
  },
];

let extraPB = {
  name: "Jede weitere Füllung oder Sauce",
  comment:
    "extra Käse | Kräuterbutter | Tzatziki | Cocktailsauce | Joghurtsauce | Aioli",
  price: 1,
};

let pizzabrotchenMenu = (
  <table>
    {pizzabrotchenList.map((item) => (
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
          <h3>{item.price.toFixed(2)} €</h3>
        </td>
      </tr>
    ))}
    <tr>
      <td>
        <h3>Extra</h3>
      </td>
      <td>
        <div>
          <h3>{extraPB.name}</h3>
          <p>{extraPB.comment}</p>
        </div>
      </td>
      <td><h3>1.00 €</h3></td>
    </tr>
  </table>
);

export default pizzabrotchenMenu;

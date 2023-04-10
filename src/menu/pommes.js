let pommesList = [
  {
    id: "22",
    category: "Pommes",
    name: "Pommes",
    comment: null,
    price: {
      small: 2.5,
      big: 4.5,
    },
  },
  {
    id: "23",
    category: "Pommes",
    name: "Pommes Spezial",
    comment: "mit Mayo, Currysauce, frische oder geröstete Zwibeln",
    price: {
      small: 4.5,
      big: 6.5,
    },
  },
];

let pommesMenu = (
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
              klein
            </h4>
          </td>
          <td>
            <h4>
              groß
            </h4>
          </td>
        </tr>
        {pommesList.map((item) => (
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
      </table>
  );

export default pommesMenu;

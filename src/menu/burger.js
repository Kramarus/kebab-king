let burgerList = [
  {
    id: "32",
    category: "Burger",
    name: "Hamburger (groß)",
    price: 5,
  },
  {
    id: "33",
    category: "Burger",
    name: "Cheeseburger (groß)",
    price: 5.5,
  },
  {
    id: "34",
    category: "Burger",
    name: "Chickenburger (groß)",
    price: 4.5,
  },
];



function convertToMenu(list) {
  return (
    <table>
      {list.map((item) => (
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
    </table>
  );
}

let burgerMenu = convertToMenu(burgerList);

export default burgerMenu;

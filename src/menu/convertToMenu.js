export default function convertToMenu(list) {
    return (
      <table>
        {list.map((item) => (
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
              <h3>{item.price.toFixed(2)}€</h3>
            </td>
          </tr>
        ))}
      </table>
    );
  }
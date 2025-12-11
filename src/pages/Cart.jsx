import { CartProd } from "../components";
import { useCart } from "../contexts";

const Cart = () => {
  const { cart, dispatch } = useCart();
  return (
    <div className="py-5 space-y-4">
      <table className="table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Line total</th>
          </tr>
        </thead>
        <tbody>
          {cart.items.map((prod) => (
            <CartProd key={prod.id} prod={prod} />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th></th>
            <th>
              <button
                onClick={() => {
                  dispatch({ type: "Empty_Cart" });
                }}
                className="btn btn-error"
              >
                Empty Cart
              </button>
            </th>
            <th>
              {" "}
              <button
                onClick={() => alert("please log in!")}
                className="btn btn-neutral"
              >
                Chectout: {cart.total}
              </button>
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
export default Cart;

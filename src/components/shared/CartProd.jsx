import { useCart } from "../../contexts";
import formatCurrency from "./formatCurrency";

const CartProd = ({ prod }) => {
  const { dispatch } = useCart();
  return (
    <tr>
      <td width="30%">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src={prod.image} className="!object-contain" />
            </div>
          </div>
          <div>
            <div className="font-bold">{prod.title}</div>
            <div className="text-sm, opacity-50">
              Unit Price: {formatCurrency(prod.price)}
            </div>
          </div>
        </div>
      </td>
      <td width="50%">{prod.description}</td>
      <td width="10%">
        <div className="flex items-center">
          <button
            onClick={() => {
              dispatch({ type: "Add_To_Cart", payload: prod });
            }}
            className="btn btn-accent"
          >
            +
          </button>
          <p className="px-4">{prod.quantity}</p>
          <button
            onClick={() => {
              dispatch({ type: "Remove_From_Cart", payload: prod });
            }}
            className="btn btn-accent"
          >
            -
          </button>
        </div>
      </td>
      <td width="10%">{formatCurrency(prod.price * prod.quantity)}</td>
    </tr>
  );
};
export default CartProd;

import formatCurrency from "./formatCurrency";
import { useCart } from "../../contexts";

const ProductCard = ({ prod }) => {
  const { cart, dispatch } = useCart();
  const existInCart = cart.items.find((item) => item.id === prod.id);

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="bg-white h-48 p-3">
        <img
          src={prod.image}
          alt={prod.category}
          className="object-contain h-full w-full"
        />
      </figure>
      <div className="card-body bg-neutral text-accent">
        <h2 className="card-title truncate ">{prod.title}</h2>
        <p>{formatCurrency(prod.price)}</p>
        <div className="card-actions justify-end">
          {!existInCart && (
            <button
              onClick={() => {
                dispatch({ type: "Add_To_Cart", payload: prod });
              }}
              className="btn btn-accent"
            >
              Add to Cart
            </button>
          )}
          {existInCart && (
            <div className="flex items-center">
              <button
                onClick={() => {
                  dispatch({ type: "Add_To_Cart", payload: prod });
                }}
                className="btn btn-accent"
              >
                +
              </button>
              <p className="px-4">{existInCart.quantity}</p>
              <button
                onClick={() => {
                  dispatch({ type: "Remove_From_Cart", payload: prod });
                }}
                className="btn btn-accent"
              >
                -
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProductCard;

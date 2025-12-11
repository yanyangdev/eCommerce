import { useReducer } from "react";
import { formatCurrency } from "../components";
import { CartContex } from "./CartContex";

const getInitialCart = () => {
  const items = JSON.parse(localStorage.getItem("cart")) || [];
  const total = formatCurrency(
    items.reduce((acc, item) => acc + item.price * item.quantity, 0)
  );
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);
  return { items, total, itemCount };
};
const ACTIONS = {
  ADD_TO_CART: "Add_To_Cart",
  REMOVE_FROM_CART: "Remove_From_Cart",
  EMPTY_CART: "Empty_Cart",
};
const cartReducer = (state, action) => {
  const recalculateCart = (items) => {
    const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);
    const total = formatCurrency(
      items.reduce((acc, item) => acc + item.price * item.quantity, 0)
    );
    return { ...state, items, itemCount, total };
  };
  switch (action.type) {
    case ACTIONS.ADD_TO_CART: {
      const existProduct = state.items.find(
        (item) => item.id === action.payload.id
      );
      let newItems;
      if (existProduct) {
        newItems = state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        newItems = [{ ...action.payload, quantity: 1 }, ...state.items];
      }

      localStorage.setItem("cart", JSON.stringify(newItems));

      return recalculateCart(newItems);
    }
    case ACTIONS.REMOVE_FROM_CART: {
      const findProduct = state.items.find(
        (item) => item.id === action.payload.id
      );
      let newItems;
      if (findProduct.quantity === 1) {
        newItems = state.items.filter((item) => item.id !== action.payload.id);
      } else {
        newItems = state.items.map((item) =>
          item.id === findProduct.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
      localStorage.setItem("cart", JSON.stringify(newItems));
      return recalculateCart(newItems);
    }
    case ACTIONS.EMPTY_CART: {
      const newItems = {
        items: [],
        total: formatCurrency(0),
        itemCount: 0,
      };
      localStorage.setItem("cart", JSON.stringify(newItems));
      return newItems;
    }
    default:
      state;
  }
};
const CartState = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, undefined, getInitialCart);
  return <CartContex value={{ cart, dispatch }}>{children}</CartContex>;
};
export default CartState;

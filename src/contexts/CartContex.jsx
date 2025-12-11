import { createContext, useContext } from "react";

export const CartContex = createContext();

export const useCart = () => {
  const context = useContext(CartContex);
  if (!context)
    throw new Error("useCart muss sich in einem Provider befinden!");
  return context;
};

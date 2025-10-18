import React, { createContext, useEffect, useState } from "react";

export const AllContext = createContext();

export const AllProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState();
  useEffect(() => {
    const sum = cart.reduce((acc, item) => acc + parseFloat(item.price), 0);
    setTotal(sum);
  }, [cart]);

  return (
    <AllContext.Provider value={{ cart, setCart, total, setTotal }}>
      {children}
    </AllContext.Provider>
  );
};

import React, { createContext, useState, useEffect } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface ProductContextProps {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
}

export const ProductContext = createContext<ProductContextProps>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const addToCart = (product: Product) => {
    const updatedCartItems = [...cartItems, product];
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const removeFromCart = (productId: number) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  return (
    <ProductContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </ProductContext.Provider>
  );
};

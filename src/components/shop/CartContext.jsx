import { createContext, useContext, useEffect, useMemo, useReducer } from "react";

const CartContext = createContext(null);
const STORAGE_KEY = "brewnora-cart";

// 1) The reducer: every way the cart can change lives here, in one place.
function cartReducer(items, action) {
  switch (action.type) {
    case "ADD": {
      const { id, name, image, price } = action.product;
      const existing = items.find((item) => item.id === id);

      // Already in the cart? Just bump the quantity.
      if (existing) {
        return items.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }
      return [...items, { id, name, image, price, quantity: 1 }];
    }

    case "SET_QUANTITY": {
      const { id, quantity } = action;
      if (quantity <= 0) return items.filter((item) => item.id !== id);
      return items.map((item) =>
        item.id === id ? { ...item, quantity } : item,
      );
    }

    case "REMOVE":
      return items.filter((item) => item.id !== action.id);

    case "CLEAR":
      return [];

    default:
      return items;
  }
}

// 2) Load the saved cart once, when the app starts.
function loadCart() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

// 3) The provider: wrap your app with this once.
export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, [], loadCart);

  // Save to localStorage every time the cart changes.
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // storage can be full or blocked; the cart still works in memory
    }
  }, [items]);

  const value = useMemo(
    () => ({
      items,
      totalItems: items.reduce((sum, item) => sum + item.quantity, 0),
      subtotal: items.reduce((sum, item) => sum + item.price * item.quantity, 0),
      addItem: (product) => dispatch({ type: "ADD", product }),
      updateQuantity: (id, quantity) =>
        dispatch({ type: "SET_QUANTITY", id, quantity }),
      removeItem: (id) => dispatch({ type: "REMOVE", id }),
      clearCart: () => dispatch({ type: "CLEAR" }),
    }),
    [items],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// 4) The hook: any component calls this to read or change the cart.
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside <CartProvider>");
  }
  return context;
}

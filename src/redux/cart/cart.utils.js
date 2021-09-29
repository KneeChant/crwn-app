export const addItemToCart = (cartItems, newItem) => {
  const existingCart = cartItems.find(cartItem => cartItem.id === newItem.id);

  if (existingCart) {
    return cartItems.map(cartItem =>
      cartItem.id === newItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...newItem, quantity: 1 }];
};

import { useContext } from 'react';
import { CartContext, CartContextValues } from './CartContext';

export function useCart(): CartContextValues {
  const values = useContext(CartContext);
  if (!values)
    throw new Error('useCart can only be used inside a CartProvider');
  return values;
}

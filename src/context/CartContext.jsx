import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export const useCart =()=>useContext(CartContext)

export function CartProvider ({children}) {
    const [cartItems, setCartItems] = useState([])
    const [wishlistItems, setWishlistItems] = useState([])

    const addToCart = (product) => {
        setCartItems((prev) => {
            const existing = prev.find((item)=> Number(item.id) === Number(product.id))
            if (existing){
                return prev.map((item) => Number(item.id) === Number(product.id)
             ? {...item, quantity: item.quantity + 1} : item)
            }
            return [...prev, {...product, quantity: 1}]
        })
    }

    const removeFromCart = (id) =>{
        setCartItems((prev) => prev.filter((item)=> item.id !== id))
    }

    const updateQuantity = (id, qty) => {
        setCartItems((prev) =>
            prev.map((item) =>
                Number(item.id) === Number(id)
                    ? { ...item, quantity: qty }
                    : item
            )
        )
    }

    const isInWishlist = (id) => {
        return wishlistItems.some((item) => Number(item.id) === Number(id))
    }

    const toggleWishlist = (product) => {
        setWishlistItems((prev) => {
            const exists = prev.some((item) => Number(item.id) === Number(product.id))
            if (exists) {
                return prev.filter((item) => Number(item.id) !== Number(product.id))
            }
            return [...prev, product]
        })
    }

    const removeFromWishlist = (id) => {
        setWishlistItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)))
    }
  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        wishlistItems,
        toggleWishlist,
        removeFromWishlist,
        isInWishlist,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}


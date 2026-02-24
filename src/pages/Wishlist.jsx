import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FiShoppingCart, FiTrash2 } from 'react-icons/fi'
import { useCart } from '../context/CartContext'

const Wishlist = () => {
  const navigate = useNavigate()
  const { wishlistItems, addToCart, removeFromWishlist } = useCart()

  return (
    <div className="min-h-screen px-6 py-10 bg-[radial-gradient(circle_at_top_left,_#eef2ff_25%,_#f8fafc_45%,_#eef2ff_100%)]">
      <h2 className="text-3x1 font-bold mb-6">Your Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p className="text-gray-500">Wishlist is empty.</p>
      ) : (
        <div className="space-y-6">
          {wishlistItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded-x1 shadow">
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="h-20 w-20 object-cover rounded"
                />
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-blue-600 font-bold">Rs. {item.price}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => addToCart(item)}
                  className="bg-blue-600 text-white px-3 py-2 rounded flex items-center gap-2"
                >
                  <FiShoppingCart />
                  Add to Cart
                </button>
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="bg-red-500 text-white px-3 py-2 rounded flex items-center gap-2"
                >
                  <FiTrash2 />
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <button
        className="mt-6 bg-gray-900 text-white px-4 py-2 rounded"
        onClick={() => navigate('/')}
      >
        Continue Shopping
      </button>
    </div>
  )
}

export default Wishlist

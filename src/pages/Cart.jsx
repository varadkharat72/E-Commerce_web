import React from 'react'
import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'
import { FiCreditCard, FiTrash2 } from 'react-icons/fi'

const Cart = ({ globalDiscount }) => {
  const { cartItems, removeFromCart, updateQuantity } = useCart()
  const navigate = useNavigate()

  const calculateDiscountedPrice = (price) => price - (price * globalDiscount) / 100

  const total = cartItems.reduce(
    (acc, item) => acc + calculateDiscountedPrice(item.price) * item.quantity,
    0
  )

  return (
    <div className="min-h-screen px-6 py-10 bg-[radial-gradient(circle_at_top_left,_#eef2ff_25%,_#f8fafc_45%,_#eef2ff_100%)]">
      <h2 className="text-3x1 font-bold mb-6">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded-x1 shadow">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.name} width={80} height={80} className="h-20 w-20 object-cover rounded" />
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-blue-600 font-bold">Rs. {calculateDiscountedPrice(item.price).toFixed(0)}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  className="w-16 border rounded px-2 py-1"
                  onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                />
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded flex items-center gap-2"
                >
                  <FiTrash2 />
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="text-right text-x1 font-bold">Total: Rs. {total.toFixed(0)}</div>
        </div>
      )}
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2"
        onClick={() => navigate('/checkout')}
      >
        <FiCreditCard />
        Proceed to Checkout
      </button>
    </div>
  )
}

export default Cart

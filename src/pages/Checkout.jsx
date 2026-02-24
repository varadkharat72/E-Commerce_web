import React, { useMemo, useState } from 'react'
import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'
import { FiCheckCircle, FiLogIn } from 'react-icons/fi'

const Checkout = () => {
  const { cartItems, setCartItems } = useCart()
  const navigate = useNavigate()

  const [paymentMethod, setPaymentMethod] = useState('Credit Card')
  const [customerInfo, setCustomerInfo] = useState({
    fullName: '',
    phone: '',
    address: '',
    city: '',
  })
  const [cardInfo, setCardInfo] = useState({
    cardNumber: '',
    cardHolderName: '',
    expiryDate: '',
    cvv: '',
  })

  const isLoggedIn = useMemo(() => localStorage.getItem('isLoggedIn') === 'true', [])

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)

  const handleInfoChange = (e) => {
    const { name, value } = e.target
    setCustomerInfo((prev) => ({ ...prev, [name]: value }))
  }
  const handleCardInfoChange = (e) => {
    const { name, value } = e.target
    setCardInfo((prev) => ({ ...prev, [name]: value }))
  }

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty!')
      return
    }

    const hasInfo = Object.values(customerInfo).every((value) => value.trim() !== '')
    if (!hasInfo) {
      alert('Please fill all checkout information fields.')
      return
    }
    const isCardPayment = paymentMethod === 'Credit Card' || paymentMethod === 'Debit Card'
    if (isCardPayment) {
      const hasCardInfo = Object.values(cardInfo).every((value) => value.trim() !== '')
      if (!hasCardInfo) {
        alert(`Please fill all ${paymentMethod} details.`)
        return
      }
    }

    const newOrder = {
      id: Date.now(),
      date: new Date().toLocaleString(),
      items: cartItems,
      customerInfo,
      paymentMethod,
      cardInfo: paymentMethod === 'Cash on Delivery' ? null : cardInfo,
      total: Number(total.toFixed(2)),
      status: 'Placed',
    }
    const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]')
    localStorage.setItem('orders', JSON.stringify([newOrder, ...existingOrders]))
    window.dispatchEvent(new Event('orders-changed'))

    alert(`Order placed successfully using ${paymentMethod}!`)
    setCartItems([])
    navigate('/')
  }

  return (
    <div className="min-h-screen p-6 bg-[radial-gradient(circle_at_top_left,_#eef2ff_25%,_#f8fafc_45%,_#eef2ff_100%)]">
      <h2 className="text-3x1 font-bold mb-6">Checkout</h2>

      {isLoggedIn ? (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-x1 font-semibold mb-4">Customer Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={customerInfo.fullName}
                onChange={handleInfoChange}
                className="border rounded px-3 py-2"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={customerInfo.phone}
                onChange={handleInfoChange}
                className="border rounded px-3 py-2"
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={customerInfo.address}
                onChange={handleInfoChange}
                className="border rounded px-3 py-2 md:col-span-2"
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={customerInfo.city}
                onChange={handleInfoChange}
                className="border rounded px-3 py-2 md:col-span-2"
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-x1 font-semibold mb-4">Order Summary</h3>
            {cartItems.map((item) => (
              <div className="flex justify-between mb-2" key={item.id}>
                <span>
                  {item.name} x {item.quantity}
                </span>
                <span>₹{(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <hr className="my-3" />
            <h4 className="text-lg font-bold">Total: ₹{total.toFixed(2)}</h4>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-x1 font-semibold mb-4">Payment Method</h3>
            <label className="block mb-2">
              <input
                type="radio"
                value="Credit Card"
                checked={paymentMethod === 'Credit Card'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <span className="ml-2">Credit Card</span>
            </label>
            <label className="block mb-2">
              <input
                type="radio"
                value="Debit Card"
                checked={paymentMethod === 'Debit Card'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <span className="ml-2">Debit Card</span>
            </label>
            <label className="block mb-2">
              <input
                type="radio"
                value="Cash on Delivery"
                checked={paymentMethod === 'Cash on Delivery'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <span className="ml-2">Cash on Delivery</span>
            </label>

            {(paymentMethod === 'Credit Card' || paymentMethod === 'Debit Card') && (
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number"
                  value={cardInfo.cardNumber}
                  onChange={handleCardInfoChange}
                  className="border rounded px-3 py-2 md:col-span-2"
                />
                <input
                  type="text"
                  name="cardHolderName"
                  placeholder="Card Holder Name"
                  value={cardInfo.cardHolderName}
                  onChange={handleCardInfoChange}
                  className="border rounded px-3 py-2 md:col-span-2"
                />
                <input
                  type="text"
                  name="expiryDate"
                  placeholder="Expiry Date (MM/YY)"
                  value={cardInfo.expiryDate}
                  onChange={handleCardInfoChange}
                  className="border rounded px-3 py-2"
                />
                <input
                  type="password"
                  name="cvv"
                  placeholder="CVV"
                  value={cardInfo.cvv}
                  onChange={handleCardInfoChange}
                  className="border rounded px-3 py-2"
                />
              </div>
            )}
          </div>

          <button
            onClick={handlePlaceOrder}
            className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 flex items-center gap-2"
          >
            <FiCheckCircle />
            Place Order
          </button>
        </div>
      ) : (
        <div className="bg-white p-6 rounded shadow max-w-xl">
          <p className="text-gray-700 mb-4">Please login first to proceed with payment.</p>
          <button
            onClick={() => navigate('/login')}
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 flex items-center gap-2"
          >
            <FiLogIn />
            Go to Login
          </button>
        </div>
      )}
    </div>
  )
}

export default Checkout

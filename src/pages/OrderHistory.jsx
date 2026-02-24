import React, { useEffect, useState } from 'react'
import { FiPackage } from 'react-icons/fi'

const OrderHistory = () => {
  const [orders, setOrders] = useState(() => JSON.parse(localStorage.getItem('orders') || '[]'))

  useEffect(() => {
    const syncOrders = () => {
      setOrders(JSON.parse(localStorage.getItem('orders') || '[]'))
    }

    window.addEventListener('orders-changed', syncOrders)
    window.addEventListener('auth-changed', syncOrders)
    window.addEventListener('storage', syncOrders)

    return () => {
      window.removeEventListener('orders-changed', syncOrders)
      window.removeEventListener('auth-changed', syncOrders)
      window.removeEventListener('storage', syncOrders)
    }
  }, [])

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_#eef2ff_25%,_#f8fafc_45%,_#eef2ff_100%)] px-6 py-10">
      <h2 className="text-3x1 font-bold mb-6">Order History</h2>

      {orders.length === 0 ? (
        <div className="bg-white rounded shadow p-6 text-gray-600">No orders yet.</div>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded shadow p-6">
              <div className="flex items-center justify-between mb-3">
                <p className="font-semibold flex items-center gap-2">
                  <FiPackage />
                  Order #{order.id}
                </p>
                <span className="text-sm text-gray-500">{order.date}</span>
              </div>

              <p className="text-sm text-gray-700 mb-2">Payment: {order.paymentMethod}</p>
              <p className="text-sm text-gray-700 mb-3">Status: {order.status}</p>

              <div className="border rounded p-3 mb-3">
                {order.items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm mb-1">
                    <span>{item.name} x {item.quantity}</span>
                    <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <p className="font-bold">Total: ₹{order.total.toFixed(2)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default OrderHistory

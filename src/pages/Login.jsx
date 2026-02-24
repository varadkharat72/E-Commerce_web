import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

const Login = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleLogin = (e) => {
    e.preventDefault()

    const hasAnyInput = Object.values(formData).some((value) => value.trim() !== '')

    if (!hasAnyInput) {
      alert('Enter your information!')
      return
    }

    localStorage.setItem('isLoggedIn', 'true')
    localStorage.setItem('demoUser', JSON.stringify(formData))
    window.dispatchEvent(new Event('auth-changed'))
    navigate('/checkout')
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_#eef2ff_25%,_#f8fafc_45%,_#eef2ff_100%)] px-6 py-10">
      <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-3x1 font-bold mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 flex items-center justify-center gap-2">
            <FiLogIn />
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login

import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa';
import { FiCheck, FiEye, FiHeart, FiShoppingCart } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({product, globalDiscount}) => {
    const [added, setAdded] = useState(false);
    const [hovered, setHovered] = useState(false)
    const {addToCart, toggleWishlist, isInWishlist} = useCart()
    const navigate = useNavigate()

    const finalDiscount =
    globalDiscount > 0 ? globalDiscount : product.discount;

    const discountedPrice = Math.round(
        product.price - (product.price * finalDiscount) / 100
    )
    
    const handleAdd = () => {
        setAdded(true);
        setTimeout(() => setAdded(false), 1500);
    }

  return (
    <div onMouseEnter={()=> setHovered(true)}
        onMouseLeave={()=> setHovered(false)}
        className='bg-white rounded-x1 shadow-md hover:shadow-x1 transition duration-300 overflow-hidden relative'>
          <div className="absolute top-3 left-3 z-20">
              <span className='bg-red-500 text-white text-xs font-semibold px-3
              py-1 rounded-full animate-pulse shadow-lg '>
                {finalDiscount}% OFF</span>
          </div>
          <button
            onClick={() => toggleWishlist(product)}
            className={`absolute top-3 right-3 z-20 p-2 rounded-full ${
              isInWishlist(product.id) ? 'bg-pink-600 text-white' : 'bg-white text-pink-600'
            } shadow`}
          >
            <FiHeart />
          </button>
      <img src={product.image} alt={product.name} width={400} height={300} className={`h-48 w-full object-contain transition-transform duration-500
        ${hovered ? "scale-105" : "scale-100"}`}/>
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-x1 font-semibold ">{product.name}</h2>
        <p className="text-gray-500 text-sm">{product.category}</p>
        <div className="flex items-center gap-1 mt-2">
            {Array.from({ length: 5 }).map((_, starIndex) => (
              <FaStar
                key={starIndex}
                className={starIndex < Math.round(product.rating) ? "text-black" : "text-black/25"}
              />
            ))}
            <span className="text-sm text-gray-700 ml-1">{product.rating}</span>
        </div>
        <div className="mt-2">
            <span className="text-blue-600 font-bold text-lg">₹{discountedPrice}</span>
            <span className="text-gray-400 line-through ml-2">₹{product.price}</span>
        </div>
        <button onClick={()=>addToCart(product)} className='mt-4 w-full flex items-center justify-center gap-2 
                bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition'>
          {added ? <FiCheck /> : <FiShoppingCart/>}
          {added ? "Added" : "Add to Cart"}
        </button>

        <button onClick={()=> navigate(`/product/${product.id}`)} 
          className='flex-1 mt-2 border border-blue-600 py-2 text-blue-600 rounded hover:bg-blue-700 hover:text-white transition flex items-center justify-center gap-2'>
          <FiEye />
          View Details
        </button>
      </div>
    </div>
  )
}

export default ProductCard

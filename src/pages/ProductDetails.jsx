import { useParams } from "react-router-dom";
import products from "../../data";
import { useState } from "react";
import { FiCheck, FiHeart, FiShoppingCart } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const ProductDetails = ({ globalDiscount }) => {
  const { id } = useParams();
      const [added, setAdded] = useState(false);
      const {addToCart, toggleWishlist, isInWishlist} = useCart()
  
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <div className="text-center mt-20">Product Not Found</div>;
  }

  const finalDiscount =
    globalDiscount > 0 ? globalDiscount : product.discount;

  const discountedPrice = Math.round(
    product.price - (product.price * finalDiscount) / 100
  );
  const reviews = product.reviews || [];

  const handleAdd = () => {
        setAdded(true);
        setTimeout(() => setAdded(false), 1500);
    }

  return (
    <div className="min-h-screen p-6 -mb-15 bg-[radial-gradient(circle_at_top_left,_#eef2ff_25%,_#f8fafc_45%,_#eef2ff_100%)]">
    <div className="max-w-6xl mx-auto p-6 mt-10 ">
      <div className="grid md:grid-cols-2 gap-10 ">

        <img
          src={product.image}
          alt={product.name}
          width={450}
          height={350}
          className="rounded-xl shadow-lg w-full h-85 max-w-md object-contain bg-white"
          />

        <div>
          <h1 className="text-3xl font-bold mb-4">
            {product.name}
          </h1>

          <p className="text-gray-500 mb-4">
            {product.category}
          </p>
                
            <p className="text-gray-500 mb-4">
            {product.detail}
          </p>
          <div className="flex items-center gap-1 mt-2">
            {Array.from({ length: 5 }).map((_, starIndex) => (
              <FaStar
              key={starIndex}
              className={starIndex < Math.round(product.rating) ? "text-black" : "text-black/25"}
              />
            ))}
            <span className="text-sm text-gray-700 ml-1">{product.rating}</span>
          </div>
          <div className="mb-6">
            <span className="text-3xl font-bold text-blue-600">
              ₹ {discountedPrice}
            </span>

            <span className="ml-3 text-gray-400 line-through">
              ₹ {product.price}
            </span>

            <span className="ml-3 text-red-500 font-semibold">
              {finalDiscount}% OFF
            </span>
          </div>

            <div className="mt-4 flex items-center gap-3">
              <button onClick={()=>addToCart(product)} className='w-full flex items-center justify-center gap-2 
                bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition'>
                {added ? <FiCheck /> : <FiShoppingCart/>}
                {added ? "Added" : "Add to Cart"}</button>
              <button
                onClick={() => toggleWishlist(product)}
                className={`px-4 py-2 rounded-lg border transition flex items-center gap-2 ${
                  isInWishlist(product.id)
                  ? 'bg-pink-600 text-white border-pink-600'
                  : 'bg-white text-pink-600 border-pink-600 hover:bg-pink-50'
                }`}
                >
                <FiHeart />
                {isInWishlist(product.id) ? 'Wishlisted' : 'Wishlist'}
              </button>
            </div>
        </div>

      </div>

      <div className="mt-10 bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-bold mb-5">Customer Reviews</h2>
        <div className="space-y-4">
          {reviews.map((review, index) => (
            <div key={`${review.name}-${index}`} className="border rounded-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-3">
                  <img
                    src={review.profileImg}
                    alt={review.name}
                    className="h-10 w-10 rounded-full object-cover"
                    />
                  <p className="font-semibold">{review.name}</p>
                </div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <FaStar
                    key={starIndex}
                    className={starIndex < review.rating ? "text-black" : "text-black/25"}
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  );
};

export default ProductDetails;

import { NavLink } from "react-router-dom";
import { FiShoppingCart, FiMenu, FiX, FiLogIn, FiLogOut, FiCreditCard, FiClock, FiHeart } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem("isLoggedIn") === "true");
    const { cartItems, wishlistItems } = useCart();
    const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const wishlistCount = wishlistItems.length;

    const linkClass = "relative px-3 py-2 transition duration-300 hover:text-blue-500";

    useEffect(() => {
        const syncAuth = () => {
            setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
        };

        window.addEventListener("storage", syncAuth);
        window.addEventListener("auth-changed", syncAuth);
        return () => {
            window.removeEventListener("storage", syncAuth);
            window.removeEventListener("auth-changed", syncAuth);
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("demoUser");
        localStorage.removeItem("orders");
        setIsLoggedIn(false);
        window.dispatchEvent(new Event("auth-changed"));
        window.dispatchEvent(new Event("orders-changed"));
    };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7x1 mx-auto px-4">
        <div className="flex justify-between items-center h-16">
            <NavLink to="/" className="text-2x1 font-bold text-blue-600">BharatBajar</NavLink>
            <div className="hidden md:flex items-center space-x-6">
                <NavLink to="/" className={({isActive}) => 
                    `${linkClass} ${isActive ? "text-blue-600 font-semibold" : ""}`}>Home</NavLink>
                <NavLink to="/cart" className="relative">
                    <FiShoppingCart size={22}/>
                    {cartCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-s w-5 h-5 flex
                            items-center justify-center rounded-full">{cartCount}</span>
                    )}
                </NavLink>
                <NavLink to="/wishlist" className="relative">
                    <FiHeart size={22}/>
                    {wishlistCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs w-5 h-5 flex
                            items-center justify-center rounded-full">{wishlistCount}</span>
                    )}
                </NavLink>
                <NavLink to="/checkout" className={({isActive}) => 
                    `${linkClass} ${isActive ? "text-blue-600 font-semibold" : ""}`}>
                  <span className="flex items-center gap-2"><FiCreditCard />Checkout</span>
                </NavLink>
                <NavLink to="/order-history" className={({isActive}) => 
                    `${linkClass} ${isActive ? "text-blue-600 font-semibold" : ""}`}>
                  <span className="flex items-center gap-2"><FiClock />Order History</span>
                </NavLink>
                



                {isLoggedIn ? (
                    <button onClick={handleLogout}
                        className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full hover:bg-gray-200 shadow-md">
                            <FiLogOut/>
                            Logout
                        </button>
                ) : (
                    <NavLink to="/login" className="flex items-center gap-2 bg-blue-600 text-white px-4 py-1 rounded-full hover:bg-blue-700">
                      <FiLogIn />
                      Login
                    </NavLink>
                )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
                <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 rounded hover:bg-gray-100">
                    {menuOpen ? <FiX size={24}/>: <FiMenu size={24}/>}
                </button>
            </div>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4 space-y-3">
          <NavLink to="/" className="block py-2" onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/cart" className="block py-2" onClick={() => setMenuOpen(false)}>Cart</NavLink>
          <NavLink to="/wishlist" className="flex items-center gap-2 py-2" onClick={() => setMenuOpen(false)}>
            <FiHeart />
            Wishlist
          </NavLink>
          <NavLink to="/checkout" className="flex items-center gap-2 py-2" onClick={() => setMenuOpen(false)}>
            <FiCreditCard />
            Checkout
          </NavLink>
          <NavLink to="/order-history" className="flex items-center gap-2 py-2" onClick={() => setMenuOpen(false)}>
            <FiClock />
            Order History
          </NavLink>
          {isLoggedIn ? (
            <button
              onClick={() => {
                handleLogout();
                setMenuOpen(false);
              }}
              className="flex items-center gap-2 py-2"
            >
              <FiLogOut />
              Logout
            </button>
          ) : (
            <NavLink to="/login" className="flex items-center gap-2 py-2" onClick={() => setMenuOpen(false)}>
              <FiLogIn />
              Login
            </NavLink>
          )}
        </div>
      )}
    </nav>
  )
}

export default Navbar

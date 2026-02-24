import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            BharatBajar
          </h2>
          <p className="text-sm leading-6">
            Premium ecommerce store delivering high quality
            products at unbeatable prices. Shop smart. Shop fast.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <FaFacebookF className="cursor-pointer hover:text-white transition" />
            <FaInstagram className="cursor-pointer hover:text-white transition" />
            <FaTwitter className="cursor-pointer hover:text-white transition" />
            <FaLinkedin className="cursor-pointer hover:text-white transition" />
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
            <li><Link to="/cart" className="hover:text-white transition">Cart</Link></li>
            <li><Link to="/login" className="hover:text-white transition">Login</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Customer Support</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white transition cursor-pointer">Help Center</li>
            <li className="hover:text-white transition cursor-pointer">Returns</li>
            <li className="hover:text-white transition cursor-pointer">Shipping Info</li>
            <li className="hover:text-white transition cursor-pointer">Track Order</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Newsletter</h3>
          <p className="text-sm mb-4">
            Subscribe to get special offers and updates.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Enter email"
              className="w-full px-3 py-2 rounded-l-md border border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-700 placeholder:text-blue-300"
            />
            <button className="bg-blue-600 px-4 py-2 rounded-r-md text-white hover:bg-blue-700 transition flex items-center gap-2">
              <FiSend />
              Subscribe
            </button>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-700 text-center py-6 text-sm">
        © {new Date().getFullYear()} BharatBajar. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;

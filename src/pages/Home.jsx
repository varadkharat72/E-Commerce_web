import { useEffect, useMemo, useRef, useState } from 'react'
import products from '../../data'
import ProductCard from '../components/ProductCard'
import OfferBanner from '../components/OfferBanner'
import { FiCheck, FiChevronDown, FiFilter, FiSearch } from 'react-icons/fi'

const Home = ({ globalDiscount }) => {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [isCategoryOpen, setIsCategoryOpen] = useState(false)
  const productsSectionRef = useRef(null)
  const categoryDropdownRef = useRef(null)

  const categories = useMemo(() => ['All', 'Electronics', 'Fashion', 'Accessories', 'Perfume'], [])

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchSearch = product.name.toLowerCase().includes(search.toLowerCase())
      const matchCategory = category === 'All' || product.category === category
      return matchSearch && matchCategory
    })
  }, [search, category])

  const handleExploreClick = () => {
    productsSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (categoryDropdownRef.current && !categoryDropdownRef.current.contains(event.target)) {
        setIsCategoryOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [])

  return (
    <div className="min-h-screen -mb-16 text-slate-900 bg-[radial-gradient(circle_at_top_left,_#eef2ff_25%,_#f8fafc_45%,_#eef2ff_100%)]">
      <OfferBanner globalDiscount={globalDiscount} onExplore={handleExploreClick} />
      <section ref={productsSectionRef} className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-5xl font-semibold mb-3 text-center tracking-tight">
          Curated Luxury Collection
        </h1>
        <p className="text-center text-slate-600 mb-8 max-w-2xl mx-auto">
          Discover premium picks with exclusive pricing, refined quality, and timeless design.
        </p>

        <div className="relative z-30 mb-10 rounded-2xl border border-slate-200/80 bg-white/75 backdrop-blur-sm shadow-[0_10px_30px_rgba(15,23,42,0.08)] p-4 md:p-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 relative">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
                className="w-full rounded-xl border border-slate-200 bg-white text-slate-900 pl-11 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-slate-400 transition"
              />
            </div>

            <div className="relative z-40" ref={categoryDropdownRef}>
              <FiFilter className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600 pointer-events-none z-10" />
              <button
                type="button"
                onClick={() => setIsCategoryOpen((prev) => !prev)}
                className="w-full rounded-xl border border-slate-200 bg-white text-slate-900 pl-11 pr-11 py-3 text-left focus:outline-none focus:ring-2 focus:ring-blue-400 transition flex items-center justify-between"
              >
                <span>{category === 'All' ? 'All Categories' : category}</span>
                <FiChevronDown className={`text-slate-500 transition-transform ${isCategoryOpen ? 'rotate-180' : ''}`} />
              </button>

              {isCategoryOpen && (
                <div className="absolute z-50 mt-2 w-full rounded-xl border border-slate-200 bg-white shadow-[0_16px_35px_rgba(15,23,42,0.14)] overflow-hidden">
                  {categories.map((cat) => {
                    const isSelected = cat === category
                    return (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => {
                          setCategory(cat)
                          setIsCategoryOpen(false)
                        }}
                        className={`w-full px-4 py-3 text-left flex items-center justify-between transition ${
                          isSelected ? 'bg-blue-50 text-blue-700 font-medium' : 'text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <span>{cat === 'All' ? 'All Categories' : cat}</span>
                        {isSelected && <FiCheck />}
                      </button>
                    )
                  })}
                </div>
              )}
            </div>
          </div>

          <p className="mt-3 text-sm text-slate-500">Filter by category and search instantly.</p>
        </div>

        <div className="relative z-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} globalDiscount={globalDiscount} />
          ))}
        </div>
        {filteredProducts.length === 0 && (
          <p className="text-center mt-8 text-slate-600">No products found for selected filters.</p>
        )}
      </section>
    </div>
  )
}

export default Home

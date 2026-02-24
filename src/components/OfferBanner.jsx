import { useEffect, useState } from 'react'
import { FiArrowRight, FiClock } from 'react-icons/fi'

const OfferBanner = ({ globalDiscount, onExplore }) => {
  const offerDurationMs = 6 * 60 * 60 * 1000
  const [offerEnd] = useState(() => Date.now() + offerDurationMs)
  const [timeLeft, setTimeLeft] = useState(offerEnd - Date.now())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(Math.max(offerEnd - Date.now(), 0))
    }, 1000)

    return () => clearInterval(timer)
  }, [offerEnd])

  const hours = String(Math.floor((timeLeft / (1000 * 60 * 60)) % 24)).padStart(2, '0')
  const minutes = String(Math.floor((timeLeft / (1000 * 60)) % 60)).padStart(2, '0')
  const seconds = String(Math.floor((timeLeft / 1000) % 60)).padStart(2, '0')

  return (
    <section className="relative overflow-hidden mt-2 rounded-2xl border border-amber-300/25 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800 text-white px-6 py-14 md:px-12 md:py-16 shadow-2xl">
      <div className="pointer-events-none absolute -top-24 -left-16 h-52 w-52 rounded-full bg-amber-300/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-16 h-52 w-52 rounded-full bg-cyan-300/10 blur-3xl" />

      <div className="relative z-10 grid items-center gap-8 md:grid-cols-2">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-amber-300/35 bg-amber-300/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-200">
            Premium Limited Deal
          </p>
          <h1 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight">
            Today only: up to <span className="text-amber-300">{globalDiscount}% OFF</span>
          </h1>
          <p className="mt-3 text-slate-200 max-w-xl">
            Curated best-sellers at exclusive prices. Once the timer ends, offers return to regular price.
          </p>
          <button
            onClick={onExplore}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber-300 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-amber-200"
          >
            Explore Premium Deals
            <FiArrowRight />
          </button>
        </div>

        <div className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm">
          <p className="mb-4 flex items-center gap-2 text-sm font-medium text-slate-200">
            <FiClock />
            Offer Ends In
          </p>
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="rounded-xl border border-white/10 bg-black/20 py-4">
              <p className="text-2xl md:text-3xl font-bold text-amber-300">{hours}</p>
              <p className="text-xs uppercase tracking-widest text-slate-300">Hours</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/20 py-4">
              <p className="text-2xl md:text-3xl font-bold text-amber-300">{minutes}</p>
              <p className="text-xs uppercase tracking-widest text-slate-300">Minutes</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/20 py-4">
              <p className="text-2xl md:text-3xl font-bold text-amber-300">{seconds}</p>
              <p className="text-xs uppercase tracking-widest text-slate-300">Seconds</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OfferBanner

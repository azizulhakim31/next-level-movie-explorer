import { Link } from "react-router-dom";
import { FaArrowRight, FaFilm, FaMagnifyingGlass, FaStar } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="bg-slate-950">
      <section className="relative flex min-h-[calc(100vh-64px)] items-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=2000&q=80"
            alt="Cinema"
            className="h-full w-full object-cover" />

          <div className="absolute inset-0 bg-slate-950/80" />
          <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/70 to-transparent" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 text-cyan-400 font-semibold uppercase tracking-widest">
              Welcome to Movie Explorer
            </p>

            <h1 className="mb-6 text-4xl font-black leading-tight sm:text-6xl lg:text-7xl">
              Discover Your
              <span className="text-cyan-400"> Favourite </span>
              Movie
            </h1>

            <p className="mb-8 max-w-2xl text-lg text-slate-300 sm:text-xl">
              Explore and discover your favourite movies from around the world.
            </p>

            <Link
              to="/movies"
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-400"  >
              Explore Now
              <FaArrowRight className="text-sm" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="mb-2 font-semibold text-cyan-400">WHY MOVIE EXPLORER?</p>
            <h2 className="text-3xl font-bold sm:text-4xl">Everything You Need</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-700 bg-slate-800 p-6 text-center">
              <div className="mb-4 flex justify-center text-4xl text-cyan-400">
                <FaMagnifyingGlass />
              </div>
              <h3 className="mb-2 text-xl font-bold">Search Easily</h3>
              <p className="text-slate-400">
                Find your favorite movies and shows using the search
                functionality.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-800 p-6 text-center">
              <div className="mb-4 flex justify-center text-4xl text-cyan-400">
                <FaFilm />
              </div>
              <h3 className="mb-2 text-xl font-bold">Explore Shows</h3>
              <p className="text-slate-400">
                Browse a large collection of shows provided by TVMaze.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-800 p-6 text-center">
              <div className="mb-4 flex justify-center text-4xl text-cyan-400">
                <FaStar />
              </div>
              <h3 className="mb-2 text-xl font-bold">View Details</h3>
              <p className="text-slate-400">
                Get ratings, genres, summaries and other information about each
                show.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
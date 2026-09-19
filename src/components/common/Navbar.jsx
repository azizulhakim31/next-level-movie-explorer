import { FaFilm } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  function navStyle({ isActive }) {
    return isActive
      ? "text-cyan-400 transition"
      : "text-slate-300 transition hover:text-white";
  }

  return (
    <header className="sticky top-0 z-40 border-b border-slate-600 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold sm:text-2xl">
            <FaFilm className="text-cyan-400" />
            <span>
              <span className="text-cyan-400">Movie</span>Explorer
            </span>
          </Link>

          <nav className="flex items-center gap-4 sm:gap-8">
            <NavLink to="/" className={navStyle}>
              Home
            </NavLink>

            <NavLink to="/movies" className={navStyle}>
              Movies
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
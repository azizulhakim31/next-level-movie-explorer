import { useEffect, useState } from "react";
import { FaFilm, FaMagnifyingGlass } from "react-icons/fa6";

import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";

const API_URL = "https://api.tvmaze.com";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(function loadMoviesWhenSearchChanges() {
    let ignore = false;

    async function loadMovies() {
      setLoading(true);
      setError("");

      try {
        const query = searchTerm.trim();

        let results = [];

        if (query) {
          const response = await fetch(
            `${API_URL}/search/shows?q=${encodeURIComponent(query)}`
          );

          if (!response.ok) {
            throw new Error("Failed to fetch movies");
          }

          const data = await response.json();

          results = data
            .map(function getShow(item) {
              return item.show;
            })
            .filter(function isExactMatch(show) {
              return (
                show &&
                show.name &&
                show.name.toLowerCase() === query.toLowerCase()
              );
            });
        } else {
          const response = await fetch(`${API_URL}/shows`);

          if (!response.ok) {
            throw new Error("Failed to fetch movies");
          }

          results = await response.json();
        }

        if (ignore) {
          return;
        }

        setMovies(results);
      } catch {
        if (!ignore) {
          setError("Unable to load movies. Please try again.");
          setMovies([]);
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    loadMovies();

    return () => {
      ignore = true;
    };
  }, [searchTerm]);

  function handleSearchChange(event) {
    const value = event.target.value;

    setSearch(value);

    if (value.trim() === "") {
      setSearchTerm("");
    }
  }

  function handleSearch() {
    setSearchTerm(search);
  }

  function handleMovieDetails(movie) {
    setSelectedMovie(movie);
  }

  function closeMovieModal() {
    setSelectedMovie(null);
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <section className="border-b border-slate-800 bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="mb-2 font-semibold text-cyan-400">EXPLORE</p>

          <h1 className="mb-4 text-3xl font-bold sm:text-5xl">
            Discover Movies & Shows
          </h1>

          <p className="max-w-2xl text-slate-400">
            Search through thousands of shows and discover something new to
            watch.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="relative mx-auto max-w-3xl">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-cyan-400">
              <FaMagnifyingGlass />
            </span>

            <input
              type="text"
              value={search}
              onChange={handleSearchChange}
              placeholder="Search for a movie..."
              className="w-full rounded-xl border border-slate-700 bg-slate-900 py-4 pl-12 pr-4 text-white outline-none transition focus:border-cyan-500 placeholder:text-slate-500" />

            <button
              type="button"
              onClick={handleSearch}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400" >
              Search
            </button>
          </div>
        </div>

        {!loading && !error && (
          <div className="mb-6 flex items-center justify-between gap-4">
            <h2 className="text-xl font-bold">
              {searchTerm ? `Search results for "${searchTerm}"` : "All Shows"}
            </h2>

            <span className="text-sm text-slate-500 border border-cyan-200 rounded-lg py-2 px-3">{movies.length} results</span>
          </div>
        )}

        {loading && (
          <div className="flex justify-center py-20">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-slate-700 border-t-cyan-400" />
          </div>
        )}

        {!loading && error && (
          <div className="py-20 text-center">
            <p className="mb-4 text-red-400">{error}</p>
          </div>
        )}

        {!loading && !error && movies.length === 0 && (
          <div className="py-20 text-center">
            <div className="mb-4 flex justify-center text-5xl text-cyan-400">
              <FaFilm />
            </div>

            <h2 className="mb-2 text-2xl font-bold">No shows found</h2>

            <p className="text-slate-400">Try searching with another title.</p>
          </div>
        )}

        {!loading && !error && movies.length > 0 && (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onDetails={handleMovieDetails} />
            ))}
          </div>
        )}
      </main>

      <MovieModal
        movie={selectedMovie}
        onClose={closeMovieModal} />
    </div>
  );
}

export default Movies;

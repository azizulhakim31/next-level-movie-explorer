import { FaCalendarDays, FaClock, FaStar, FaXmark } from "react-icons/fa6";

const MovieModal = ({ movie, onClose }) => {
  if (!movie) {
    return null;
  }

  const year = movie.premiered ? movie.premiered.substring(0, 4) : "N/A";
  const rating = movie.rating?.average ?? "N/A";
  const summary = movie.summary
    ? movie.summary.replace(/<[^>]*>/g, "")
    : "No summary available.";

  function handleModalClick(event) {
    event.stopPropagation();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
      onClick={onClose} >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-slate-700 bg-slate-900 shadow-2xl shadow-cyan-950/20"
        onClick={handleModalClick} >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-slate-950/70 text-lg text-white transition cursor-pointer hover:bg-slate-950"
          aria-label="Close modal" >
          <FaXmark />
        </button>

        <div className="relative h-64 sm:h-80">
          {movie.image?.original ? (
            <img
              src={movie.image.original}
              alt={movie.name}
              className="h-full w-full object-cover" />
          ) : (
            <div className="h-full w-full bg-slate-800" />
          )}

          <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/10 to-transparent"></div>
        </div>

        <div className="relative -mt-10 p-6 sm:p-8">
          <h2 className="mb-4 text-3xl font-black text-white sm:text-4xl">
            {movie.name}
          </h2>

          <div className="mb-6 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-800 px-3 py-1.5 text-sm text-slate-200">
              <FaStar className="text-amber-400" /> {rating}
            </span>

            <span className="inline-flex items-center gap-2 rounded-full bg-slate-800 px-3 py-1.5 text-sm text-slate-200">
              <FaCalendarDays className="text-cyan-400" /> {year}
            </span>

            {movie.runtime && (
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-800 px-3 py-1.5 text-sm text-slate-200">
                <FaClock className="text-cyan-400" /> {movie.runtime} min
              </span>
            )}

          </div>

          {movie.genres?.length > 0 && (
            <div className="mb-6 flex flex-wrap gap-2">
              {movie.genres.map((genre) => (
                <span
                  key={genre}
                  className="rounded-full border border-cyan-400/30 bg-cyan-500/5 px-3 py-1 text-sm text-cyan-300">
                  {genre}
                </span>
              ))}
            </div>
          )}

          <div>
            <h3 className="mb-3 text-xl font-bold text-white">Overview</h3>
            <p className="leading-7 text-slate-300">{summary}</p>
          </div>

          {movie.language && (
            <div className="mt-6 text-sm text-slate-400">
              <span className="font-medium text-slate-500">Language:</span>{" "}
              <span className="text-slate-200">{movie.language}</span>
            </div>
          )}

          <button
            type="button"
            onClick={onClose}
            className="mt-8 rounded-xl bg-cyan-500 px-5 py-2.5 font-semibold text-slate-950 transition cursor-pointer hover:bg-cyan-400" >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;
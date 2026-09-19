import { FaCalendarDays, FaStar } from "react-icons/fa6";

const MovieCard = ({ movie, onDetails }) => {
  if (!movie) {
    return null;
  }

  const year = movie.premiered ? movie.premiered.substring(0, 4) : "N/A";
  const rating = movie.rating?.average ?? "N/A";

  function handleDetails() {
    onDetails(movie);
  }

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 shadow-lg shadow-slate-950/30 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-cyan-500/10">
      <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/10 to-transparent opacity-90" />

      <div className="relative aspect-2/3 overflow-hidden bg-slate-800">
        {movie.image?.medium ? (
          <img
            src={movie.image.medium}
            alt={movie.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
            No Image
          </div>
        )}
      </div>

      <div className="relative space-y-4 p-4">
        <div>
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Featured
          </p>
          <h3 className="line-clamp-2 text-lg font-bold text-white">
            {movie.name}
          </h3>
        </div>

        <div className="flex items-center justify-between text-sm text-slate-300">
          <span className="inline-flex items-center gap-1 rounded-full bg-slate-800/80 px-2.5 py-1">
            <FaStar className="text-amber-400" /> {rating}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-slate-800/80 px-2.5 py-1">
            <FaCalendarDays className="text-cyan-400" /> {year}
          </span>
        </div>

        <button
          type="button"
          onClick={handleDetails}
          className="w-full rounded-xl bg-cyan-500 px-4 py-2.5 font-semibold text-slate-950 transition cursor-pointer hover:bg-cyan-400" >
          See Details
        </button>
      </div>
    </article>
  );
}

export default MovieCard;

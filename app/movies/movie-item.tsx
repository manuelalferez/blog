import { MovieIMDB } from "@/content/movies/ratings";
import Image from "next/image";
import { formatMovieDuration, getYearFromReleaseDate } from "./utils";
import { getRelativeTime } from "../utils";

export default function MovieItem({
  movie,
  posterUrl,
  summary,
}: {
  movie: MovieIMDB;
  posterUrl: string;
  summary: string;
}) {
  return (
    <div className="max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">
      <div>
        <div>
          <Image
            src={posterUrl}
            alt={movie.title.toString()}
            width={200}
            height={300}
            className="rounded-lg w-full h-80 object-cover m-0"
          />
        </div>

        <h2 className="mt-2 text-xl font-bold dark:text-white">
          {movie.title}
        </h2>

        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {getYearFromReleaseDate(movie.releaseDate)} ·{" "}
          {formatMovieDuration(movie.duration)}
        </span>

        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          Watched: {getRelativeTime(movie.dateRated)}
        </p>

        <p className="mt-2 text-sm text-muted-foreground text-gray-600">
          {summary}
        </p>
      </div>

      <div className="mt-2 flex items-center justify-between">
        <span className="flex items-center justify-center w-fit px-3 p-1 text-sm font-semibold text-yellow-800 bg-yellow-100 rounded-full shadow-md dark:bg-yellow-800 dark:text-yellow-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            className="w-4 h-4"
          >
            <path
              fill="currentColor"
              d="m14.43 10l-1.47-4.84c-.29-.95-1.63-.95-1.91 0L9.57 10H5.12c-.97 0-1.37 1.25-.58 1.81l3.64 2.6l-1.43 4.61c-.29.93.79 1.68 1.56 1.09l3.69-2.8l3.69 2.81c.77.59 1.85-.16 1.56-1.09l-1.43-4.61l3.64-2.6c.79-.57.39-1.81-.58-1.81h-4.45z"
            />
          </svg>
          <span className="ml-1">{movie.yourRating}</span>
        </span>

        <a
          href={movie.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-600 hover:underline dark:text-blue-400"
        >
          View on IMDb
        </a>
      </div>
    </div>
  );
}

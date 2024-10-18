import { MovieIMDB } from "@/content/movies/ratings";
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
    <div className="w-full p-4 bg-white border border-gray-200 rounded-md shadow-md dark:bg-gray-800 dark:border-gray-700 flex">
      <div className="flex-shrink-0">
        <img
          src={posterUrl}
          alt={movie.title.toString()}
          width={100}
          height={150}
          className="rounded-md object-cover md:h-full w-24 md:w-32"
        />
      </div>

      <div className="ml-4 flex-grow">
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

        <div className="mt-2 flex items-center justify-between">
          <span className="inline-flex items-center justify-center px-2 py-1 text-sm font-semibold text-black bg-white border border-gray-300 rounded-md transition-colors">
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
            className="inline-flex items-center justify-center px-2 py-1 text-xs font-semibold text-black bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path
                d="M13.646 10.237c-.057-.032-.16-.048-.313-.048v3.542c.201 0 .324-.041.371-.122s.07-.301.07-.66v-2.092c0-.244-.008-.4-.023-.469a.223.223 0 0 0-.105-.151zm3.499 1.182c-.082 0-.137.031-.162.091c-.025.061-.037.214-.037.46v1.426c0 .237.014.389.041.456c.029.066.086.1.168.1c.086 0 .199-.035.225-.103c.027-.069.039-.234.039-.495V11.97c0-.228-.014-.377-.043-.447c-.032-.069-.147-.104-.231-.104z"
                fill="currentColor"
              />
              <path
                d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM6.631 14.663H5.229V9.266h1.402v5.397zm4.822 0H10.23l-.006-3.643l-.49 3.643h-.875L8.342 11.1l-.004 3.563H7.111V9.266H8.93c.051.327.107.71.166 1.15l.201 1.371l.324-2.521h1.832v5.397zm3.664-1.601c0 .484-.027.808-.072.97a.728.728 0 0 1-.238.383a.996.996 0 0 1-.422.193c-.166.037-.418.055-.754.055h-1.699V9.266h1.047c.678 0 1.07.031 1.309.093c.24.062.422.164.545.306c.125.142.203.3.234.475c.031.174.051.516.051 1.026v1.896zm3.654.362c0 .324-.023.565-.066.723a.757.757 0 0 1-.309.413a.947.947 0 0 1-.572.174c-.158 0-.365-.035-.502-.104a1.144 1.144 0 0 1-.377-.312l-.088.344h-1.262V9.266h1.35v1.755a1.09 1.09 0 0 1 .375-.289c.137-.064.344-.096.504-.096c.186 0 .348.029.484.087a.716.716 0 0 1 .44.549c.016.1.023.313.023.638v1.514z"
                fill="currentColor"
              />
            </svg>
            View on IMDb
          </a>
        </div>
      </div>
    </div>
  );
}

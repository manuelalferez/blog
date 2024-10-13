import React from "react";
import MovieItem from "./movie-item";
import { fetchRatedMovies, getMoviePoster, getSummary } from "./utils";
import { imdbRatings, MovieIMDB } from "@/content/movies/ratings";

export default async function Page() {
  const tmdbMovies = await fetchRatedMovies();

  return (
    <div>
      <h1 className="text-4xl font-extrabold">My ratings</h1>
      <p className="mt-4 text-slate-700 dark:text-slate-200 prose">
        List of movies I have seen (some may be missing). I am planning to
        change my rating system, at the moment they are rated from 1-10; very
        reductionist, I know. I will work to change it.
      </p>
      <hr className="my-4" />
      <p className="mb-4 flex justify-end">{imdbRatings.length} titles</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {imdbRatings.map((movie: MovieIMDB, index) => (
          <MovieItem
            key={index}
            movie={movie}
            posterUrl={getMoviePoster({
              movies: tmdbMovies,
              title: movie.title,
            })}
            summary={getSummary({ movies: tmdbMovies, title: movie.title })}
          />
        ))}
      </div>
    </div>
  );
}

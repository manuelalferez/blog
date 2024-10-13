import React from "react";
import { fetchRatedMovies } from "./utils";
import { imdbRatings } from "@/content/movies/ratings";
import Movies from "./movies";

export default async function Page() {
  const tmdbMovies = await fetchRatedMovies();

  return (
    <div>
      <h1 className="text-4xl font-extrabold">My ratings</h1>
      <p className="mt-4 text-slate-700 dark:text-slate-200 prose">
        List of movies I have seen (some may be missing). I am planning to
        change my rating system, at the moment they are rated from 1-10; very
        reductionist, I know. I will work to change it
      </p>
      <hr className="my-4" />
      <Movies imdbRatings={imdbRatings} tmdbMovies={tmdbMovies} />
    </div>
  );
}

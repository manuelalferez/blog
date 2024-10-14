import React from "react";
import { fetchRatedMovies } from "./utils";
import { imdbRatings } from "@/content/movies/ratings";
import Movies from "./movies";
import WhatToWatch from "./what-to-watch";

export default async function Page() {
  const tmdbMovies = await fetchRatedMovies();

  return (
    <div>
      <h1 className="text-4xl font-extrabold">My ratings</h1>
      <p className="my-4 text-slate-700 dark:text-slate-200 prose">
        List of movies I have seen (some may be missing). I am planning to
        change my rating system, at the moment they are rated from 1-10; very
        reductionist, I know. I will work to change it
      </p>
      <WhatToWatch imdbRatings={imdbRatings} tmdbMovies={tmdbMovies} />
      <hr className="my-4" />
      <Movies imdbRatings={imdbRatings} tmdbMovies={tmdbMovies} />
    </div>
  );
}

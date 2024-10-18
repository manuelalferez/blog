"use client";

import React, { useState } from "react";
import MovieItem from "./movie-item";
import { MovieIMDB } from "@/content/movies/ratings";
import { getMoviePoster, getSummary, MovieTMDB } from "./utils";
import confetti from "canvas-confetti";

interface WhatToWatchProps {
  imdbRatings: MovieIMDB[];
  tmdbMovies: MovieTMDB[];
}

export default function WhatToWatch({
  imdbRatings,
  tmdbMovies,
}: WhatToWatchProps) {
  const [showRecommendations, setShowRecommendations] = useState(false);

  const seed = new Date().toISOString().split("T")[0];
  const randomSeed = seed
    .split("-")
    .map(Number)
    .reduce((a, b) => a + b);

  const getRandomRecommendations = (movies: MovieIMDB[], count: number) => {
    const filteredMovies = movies.filter(
      (movie) => movie.yourRating >= 7 && movie.yourRating <= 10
    );

    const randomMovies = [...filteredMovies];
    for (let i = randomMovies.length - 1; i > 0; i--) {
      const j = (i + randomSeed) % randomMovies.length;
      [randomMovies[i], randomMovies[j]] = [randomMovies[j], randomMovies[i]];
    }

    return randomMovies.slice(0, count);
  };

  const recommendedMovies = getRandomRecommendations(imdbRatings, 3);

  const handleRecommendClick = () => {
    if (!showRecommendations) {
      setShowRecommendations(!showRecommendations);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  };

  return (
    <div>
      <span
        className="hover:cursor-pointer inline-flex items-center justify-center px-2 py-2 text-sm font-semibold text-black bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 transition-colors"
        onClick={handleRecommendClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          className="w-5 h-5 mr-1"
        >
          <g fill="none" fillRule="evenodd">
            <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
            <path
              fill="currentColor"
              d="M6.751 5.343a1 1 0 0 0-1.414 1.414L7.458 8.88a1 1 0 0 0 1.414-1.415l-2.12-2.12Zm4.95 4.95a1 1 0 0 0-1.414 1.414l9.192 9.192a1 1 0 0 0 1.414-1.414zm4.95-4.95a1 1 0 0 1 0 1.414L14.529 8.88a1 1 0 1 1-1.414-1.415l2.121-2.12a1 1 0 0 1 1.415 0Zm-7.779 9.193a1 1 0 0 0-1.414-1.415l-2.121 2.122a1 1 0 1 0 1.414 1.414zM18.994 11a1 1 0 0 1-1 1h-3a1 1 0 1 1 0-2h3a1 1 0 0 1 1 1m-12 1a1 1 0 1 0 0-2h-3a1 1 0 1 0 0 2zm4 7a1 1 0 0 1-1-1v-3a1 1 0 1 1 2 0v3a1 1 0 0 1-1 1m-1-12a1 1 0 1 0 2 0V4a1 1 0 1 0-2 0z"
            />
          </g>
        </svg>
        Recommend something to me
      </span>
      <div
        className={`transition-opacity duration-500 ${
          showRecommendations ? "opacity-100" : "opacity-0 max-h-0"
        } overflow-hidden`}
      >
        <p className="prose my-4">Recommendations for today (more tomorrow):</p>
        <div className="flex flex-col gap-2">
          {recommendedMovies.map((movie, index) => (
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
    </div>
  );
}

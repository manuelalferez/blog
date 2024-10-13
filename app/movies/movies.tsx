"use client";

import React, { useState } from "react";
import MovieItem from "./movie-item";
import { MovieIMDB } from "@/content/movies/ratings";
import { getMoviePoster, getSummary, MovieTMDB } from "./utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

interface MoviesProps {
  imdbRatings: MovieIMDB[];
  tmdbMovies: MovieTMDB[];
}

export default function Movies({ imdbRatings, tmdbMovies }: MoviesProps) {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredByRating = selectedRating
    ? imdbRatings.filter((movie) => movie.yourRating === selectedRating)
    : imdbRatings;

  const filteredMovies = filteredByRating.filter((movie) =>
    movie.title.toString().toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-1 mb-4">
        <div className="flex gap-2 flex-col md:flex-row">
          <Input
            type="text"
            placeholder="Search movie"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-[180px] md:w-[240px]"
          />
          <Select onValueChange={(value) => setSelectedRating(Number(value))}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by rating" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem key={0} value={String(0)}>
                  All
                </SelectItem>
                {[...Array(10)].map((_, i) => (
                  <SelectItem key={i + 1} value={String(i + 1)}>
                    {i + 1}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <p>{filteredMovies.length} titles</p>
      </div>

      <div className="flex justify-center mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filteredMovies.map((movie, index) => (
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

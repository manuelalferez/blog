export interface MovieTMDB {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  rating: number;
}

export async function fetchRatedMovies() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_KEY}`,
    },
  };

  const allRatedMovies: any[] = [];
  let page = 1;
  let totalPages = 1;

  try {
    do {
      const response = await fetch(
        `https://api.themoviedb.org/3/account/21568721/rated/movies?language=en-US&page=${page}&sort_by=created_at.asc`,
        options
      );

      if (!response.ok) {
        throw new Error(`Error fetching movies: ${response.statusText}`);
      }

      const data = await response.json();
      allRatedMovies.push(...data.results);
      totalPages = data.total_pages;
      page++;
    } while (page <= totalPages);

    return allRatedMovies;
  } catch (err) {
    console.error(err);
    return [];
  }
}

export function formatMovieDuration(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  const parts: string[] = [];
  if (hours > 0) {
    parts.push(`${hours}h`);
  }
  if (remainingMinutes > 0) {
    parts.push(`${remainingMinutes}min`);
  }
  return parts.length > 0 ? parts.join(" ") : "0min";
}

export function getYearFromReleaseDate(releaseDate: string): number {
  const dateParts = releaseDate.split("-");
  return dateParts.length === 3 ? parseInt(dateParts[0], 10) : NaN;
}

export function getMoviePoster({
  movies,
  title,
}: {
  movies: MovieTMDB[];
  title: string | number;
}): string {
  const movie = movies.find(
    (movie) => movie.title.toLowerCase() === title.toString().toLowerCase()
  );
  return movie
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://i.imgur.com/P05WZQt.jpeg";
}

export function getSummary({
  movies,
  title,
}: {
  movies: MovieTMDB[];
  title: string | number;
}): string {
  const movie = movies.find(
    (movie) => movie.title.toLowerCase() === title.toString().toLowerCase()
  );

  if (movie) {
    const overview = movie.overview;

    if (overview.length > 200) {
      const lastSpaceIndex = overview.lastIndexOf(" ", 200);
      const truncatedOverview =
        lastSpaceIndex !== -1
          ? overview.substring(0, lastSpaceIndex)
          : overview.substring(0, 200);
      return `${truncatedOverview}...`;
    }

    return overview;
  }

  return "";
}

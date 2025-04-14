const key = `f0c559c70b2257a69cffc3fe3e12b60c`;

const token = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMGM1NTljNzBiMjI1N2E2OWNmZmMzZmUzZTEyYjYwYyIsIm5iZiI6MTczNzQyMzA3Ni40NzEsInN1YiI6IjY3OGVmOGU0ZTkzYmQwNzEzNTViMmE0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a0py7IM8MMAE5a0wig0Z0pAiY2niMmLtUryUCoUkZHo`;

export const request = {
  upcomingMovies: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  pupolermovies: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  discovermovie: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&page=2`,
  nowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
  topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  movieDetails: (id) =>
    `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=eg`,
  trendingmovie: `https://api.themoviedb.org/3/trending/movie/week?api_key=${key}&language=en-US&page=1`,
  movieTrailer: (id) =>
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US`,
  similarMovies: (id) =>
    `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${key}&language=en-US`,
  movieActors: (id) =>
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}`,
  actorsMovies: (id) =>
    `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${key}`,
  movieCategory: (id, page) =>
    `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=${id}&page=${page}`,
  movieCategories: (id, page) =>
    `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=${id}&page=${page}`,

  // --------------- tv show api ---------------------
  popularTv: `https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=1`,
  upcomingTV: `https://api.themoviedb.org/3/tv/upcoming?api_key=${key}&language=en-US&page=1`,
  discovertv: `https://api.themoviedb.org/3/discover/tv?api_key=${key}&language=en-US&page=2`,
  topRatedtv: `https://api.themoviedb.org/3/tv/top_rated?api_key=${key}&language=en-US&page=1`,
  trendingtv: `https://api.themoviedb.org/3/trending/tv/week?api_key=${key}&language=en-US&page=1`,
  tvDetails: (id) =>
    `https://api.themoviedb.org/3/tv/${id}?api_key=${key}&language=eg`,
  tvSeasonTrailer: (seriesId, seasonNumber) =>
    `https://api.themoviedb.org/3/tv/${seriesId}/season/${seasonNumber}/videos?api_key=${apiKey}&language=en-US`,
  tvShowTrailer: (id) =>
    `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${key}&language=en-US`,
  tvSeasons: (seasonNumber, id) =>
    `https://api.themoviedb.org/3/tv/${id}/season/${seasonNumber}?api_key=${key}&language=en-US`,
  tvSeasonEpisodes: (id, seasonNum, episodeNum) =>
    `https://api.themoviedb.org/3/tv/${id}/season/${seasonNum}/episode/${episodeNum}?api_key=${key}&language=en-US`,
  tvEpisodeTrailer: (id, seasonNum, episodeNum) =>
    `https://api.themoviedb.org/3/tv/${id}/season/${seasonNum}/episode/${episodeNum}/videos?api_key=${key}&language=en-US`,
  tvSimilar: (id) =>
    `https://api.themoviedb.org/3/tv/${id}/similar?api_key=${key}&language=en-US`,
  tvActors: (id) =>
    `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${key}`,
  tvActorsTvShows: (id) =>
    `https://api.themoviedb.org/3/person/${id}/tv_credits?api_key=${key}&language=en-US`,
  tvCategory: (id, page) =>
    `https://api.themoviedb.org/3/discover/tv?api_key=${key}&with_genres=${id}&page=${page}`,
  // tvCategories:(id,page)=>`https://api.themoviedb.org/3/discover/tv?api_key=${key}&with_genres=${id}&page=${page}`,

  // ----------------- search api ---------------------
  searchMoviesByName: (search) =>
    `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${search}&page=1&include_adult=false`,
  searchTvByName: (search) =>
    `https://api.themoviedb.org/3/search/tv?api_key=${key}&query=${search}&page=1&include_adult=false`,
};

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[] | string[];
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
};

export type Genre = {
  id: number;
  name: string;
}

export type CarouselData = {
  adult: boolean;
  backdrop_path: string;
  youtube_path: string;
  genre_list: string[];
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
};

export type requestOptions = {
  method: string,
  headers: {
    accept: string,
    Authorization: string,
  },
  cache:RequestCache
};

export type movieVideos=
{
  iso_639_1: string,
  iso_3166_1: string,
  name: string,
  key: string,
  site: string,
  size: number , 
  type: string,
  official: boolean,
    published_at: string,
  id: string
}
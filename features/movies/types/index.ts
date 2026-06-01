export interface Movie {
  id: string;
  title: string;
  image: string;
  category: MovieCategory;
  rating: number;
  year: number;
  duration: string;
  description?: string;
  director?: string;
  cast?: string[];
  trailer?: string;
}

export type MovieCategory =
  | 'Action'
  | 'Comedy'
  | 'Drama'
  | 'Horror'
  | 'Romance'
  | 'Sci-Fi'
  | 'Thriller'
  | 'Animation'
  | 'Documentary';

export interface MovieFilters {
  search: string;
  category: MovieCategory | 'All';
  sortBy: 'rating' | 'year' | 'title';
  sortOrder: 'asc' | 'desc';
}

export interface WatchSession {
  id: string;
  movieId: string;
  hostId: string;
  participants: string[];
  status: 'waiting' | 'playing' | 'paused' | 'ended';
  currentTime: number;
}

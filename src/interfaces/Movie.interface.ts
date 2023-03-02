export interface IMoive {
    poster_path: string;
    backdrop_path: string;
    title: string;
    name: string;
    release_date: string;
    first_air_date: string;
    vote_average: number;
    id: number;
}

export interface IMovieCard {
    movieInfo?: IMoive;
    isLoading?: boolean;
}

export interface IMovieList {
    type: string;
    detail: string;
}

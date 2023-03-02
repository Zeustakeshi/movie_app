import useSWR from "swr";
import { API_KEY } from "../config";
import { useAppContext } from "../contexts/AppProvider";

interface FetcherArgs {
    url: string;
}

const fetcher = (...args: any) => {
    return fetch(args).then((res) => res.json());
};

const useGetMovieData = (
    path: string,
    query?: string,
    page?: string | number
) => {
    const { language } = useAppContext();

    const tmdbEndPoint = "https://api.themoviedb.org/3";

    const createUrl = () => {
        if (!path) return;
        return `${tmdbEndPoint}/${path}?api_key=${API_KEY}&language=${language}${
            query ? `&query=${query}` : ""
        }${page ? `&page=${page}` : ""}`;
    };
    const url = createUrl();
    const { data, error } = useSWR(url, fetcher);
    if (error) {
        console.log(error);
    } else if (!data) {
        return {
            data: {},
            error: error,
        };
    } else {
        return {
            data: data,
            error: error,
        };
    }

    return data || {};
};

export default useGetMovieData;

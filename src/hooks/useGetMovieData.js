import useSWR from "swr";
import { API_KEY, fetcher } from "../config";
import { useAppContext } from "../contexts/AppProvider";

const useGetMovieData = (path, query, page) => {
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

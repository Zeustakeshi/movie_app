export const fetcher = (...args) => {
    return fetch(...args).then((res) => res.json());
};
export const API_KEY = "1a5c4195d358f72fdbec913b288dd9e8";

export const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization:
            `Bearer ${import.meta.REACT_MOVIE_API_TOKEN}`,
    },
};

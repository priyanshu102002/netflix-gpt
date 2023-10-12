export const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization:
            `Bearer ${process.env.REACT_MOVIE_API_TOKEN}`,
    },
};

export const OPTIONS = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization:
            `Bearer ${process.env.REACT_APP_MOVIE_API_TOKEN}`,
    },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/original"

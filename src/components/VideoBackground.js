import { useSelector } from "react-redux";
import useNowPlayingTrailer from "../hooks/useNowPlayingTrailer";

const VideoBackground = ({ movieId }) => {
    const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
    useNowPlayingTrailer(movieId);

    return (
        <div className="w-full h-screen">
            <iframe                
                src={`https://www.youtube.com/embed/${trailerVideo?.key}?modestbranding=1&amp;rel=0&amp;showinfo=0&autoplay=1&mute=1`}
                title="YouTube video player"
                width="100%"
                height="100%"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; mute; picture-in-picture"
                allowFullScreen
                controls
            ></iframe>
        </div>
    );
};

export default VideoBackground;

import React, {} from 'react';
import YouTube from 'react-youtube';

const opts = {
    width: '100%',
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
    },
};

const NowPlaying = (props) => {
    // Declare a new state variable, which we'll call "count"  const [count, setCount] = useState(0);
    return (
        <div>
            <YouTube videoId={props.videoId} opts={opts} />
        </div>
    );
}


export default NowPlaying;
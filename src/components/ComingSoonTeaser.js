import React, {} from 'react';
import {Col} from "react-bootstrap";
import YouTube from "react-youtube";


const style = {
    position: `relative`,
    marginBottom: `25px`,
}

const dateStyle = {
    position: `absolute`,
    right: `0`,
    top: `5px`,
    backgroundColor: `#212529`,
    color: `whitesmoke`,
    padding: `5px 10px`,
    border: `solid thin whitesmoke`,
    fontFamily: `adobe-garamond-pro, serif`,
    zIndex: 5,
}

const statusStyle = {
    position: `absolute`,
    left: `0`,
    bottom: `15px`,
    zIndex: 5,
    marginRight: `0`,
    marginBottom: `15px`,
    padding: `5px 10px`,
    backgroundColor: `#212529`,
    color: `whitesmoke`,
    border: `solid thin whitesmoke`,
    fontFamily: `adobe-garamond-pro, serif`,
    textTransform: `uppercase`
}

const opts = {
    width: '100%',
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
        controls: 0,
        modestbranding: 1,
    },
};

const ComingSoonTeaser = (props) => {
    // Declare a new state variable, which we'll call "count"  const [count, setCount] = useState(0);
    return (
        <Col lg={4} style={style}>
            <h4 style={dateStyle}>{props.startDate}</h4><h5 style={statusStyle}>{props.status}</h5>
            <YouTube videoId={props.videoId} opts={opts} />
        </Col>
    );
}

export default ComingSoonTeaser;
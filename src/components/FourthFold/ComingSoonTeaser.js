import React, {} from 'react';
import 'react-ig-feed/dist/index.css'
import {Col, Container, Row} from "react-bootstrap";
import YouTube from "react-youtube";


const style = {position: `relative`, marginBottom: `25px`}

const dateStyle = {
    position: `absolute`,
    right: `0`,
    backgroundColor: `white`,
    padding: `10px 25px`,
    border: `solid thin black`,
    fontFamily: `adobe-garamond-pro, serif`,
    borderBottomLeftRadius: `25px`,
    zIndex: 5,
}


const statusStyle = {
    position: `absolute`,
    right: `0`,
    bottom: `0`,
    zIndex: 5,
    marginRight: `15px`,
    padding: `5px 10px`,
    backgroundColor: `#212529`,
    color: `whitesmoke`
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
            <h4 style={dateStyle}>October 29th</h4><h5 style={statusStyle}>Pending</h5>
            <YouTube videoId={props.videoId} opts={opts} />
        </Col>
    );
}

export default ComingSoonTeaser;
import React, {} from 'react';
import 'react-ig-feed/dist/index.css'
import {Col, Container, Row} from "react-bootstrap";
import YouTube from "react-youtube";
import ComingSoonTeaser from "./ComingSoonTeaser";

const firstLetterStyles = {
    fontSize: `15vh`,
}

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

const headerStyle = {
    textTransform: `uppercase`,
    lineHeight: `7vh`,
    fontSize: `10vh`,
    textAlign: `center`,
    color: `whitesmoke`,
    fontFamily: `adobe-garamond-pro, serif`,
    fontWeight: `400`,
    fontStyle: `normal`
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

const FourthFold = (props) => {
    // Declare a new state variable, which we'll call "count"  const [count, setCount] = useState(0);
    return (
        <div id="coming-soon" style={{
            minHeight: `100vh`,
            padding: `80px 15px`,
            display: `flex`,
            flexDirection: `column`,
            justifyContent: `start`,
            alignItems: `start`,
        }}>
            <Container>
                <h1 style={headerStyle}>
                    <small style={{marginBottom: `10px`, display: `flex`, flexDirection: `row`}}>
                        <span style={{
                            marginRight: `5px`,
                            marginTop: `3vh`,
                            borderTop: `solid .25vh white`,
                            marginBottom: `3vh`,
                            borderBottom: `solid .25vh white`,
                            width: `auto`,
                            flexGrow: `4`
                        }}/>
                        <span style={{fontSize: `5vh`}}>Coming Soon</span>
                        <span style={{
                            marginLeft: `5px`,
                            marginTop: `3vh`,
                            borderTop: `solid .25vh white`,
                            marginBottom: `3vh`,
                            borderBottom: `solid .25vh white`,
                            width: `auto`,
                            flexGrow: `4`
                        }}/>
                    </small>
                    <span style={firstLetterStyles}>T</span>he <span style={firstLetterStyles}>C</span>entury
                    <br/>
                    <small style={{display: `flex`, flexDirection: `row`}}>
                        <span style={{
                            marginRight: `5px`,
                            marginTop: `3vh`,
                            borderTop: `solid .25vh white`,
                            marginBottom: `3vh`,
                            borderBottom: `solid .25vh white`,
                            width: `auto`,
                            flexGrow: `4`
                        }}/>
                        <span style={{fontSize: `5vh`}}>Theater</span>
                        <span style={{
                            marginLeft: `5px`,
                            marginTop: `3vh`,
                            borderTop: `solid .25vh white`,
                            marginBottom: `3vh`,
                            borderBottom: `solid .25vh white`,
                            width: `auto`,
                            flexGrow: `4`
                        }}/>
                    </small>
                </h1>
            </Container>
            <Container>
                <Row>
                    <ComingSoonTeaser videoId="3u9gLvLBtBQ" />
                    <ComingSoonTeaser videoId="rrwBnlYOp4g" />
                    <ComingSoonTeaser videoId="N_gD9-Oa0fg" />
                    <ComingSoonTeaser videoId="hL6R3HmQfPc" />
                    <ComingSoonTeaser videoId="8I8nMtzN05s" />
                    <ComingSoonTeaser videoId="4plqh6obZW4" />
                </Row>
            </Container>
        </div>
    );
}

export default FourthFold;
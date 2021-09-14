import React, {} from 'react';
import {Container} from "react-bootstrap";
import NowPlaying from "../NowPlaying";
import HeaderSection from "../HeaderSection";


const SecondFold = (props) => {
    // Declare a new state variable, which we'll call "count"  const [count, setCount] = useState(0);
    return (
        <div id="now-playing" style={{
            minHeight: `100vh`,
            padding: `80px 15px`,
            display: `flex`,
            flexDirection: `column`,
            justifyContent: `start`,
            alignItems: `start`
        }}>
            <Container>
                <HeaderSection title="Now Playing" />
            </Container>
            <NowPlaying handleShow={props.handleShow} setModalTitle={props.setModalTitle} setIsMovie={props.setIsMovie}
                        handleRating={props.handleRating} handleRunningTime={props.handleRunningTime}
                        handleDirector={props.handleDirector} handleProducer={props.handleProducer}
                        handlePoster={props.handlePoster} handleTomatoScore={props.handleTomatoScore}
                        handleTomatoLink={props.handleTomatoLink} handleAudienceScore={props.handleAudienceScore}/>
        </div>
    );
}

export default SecondFold;
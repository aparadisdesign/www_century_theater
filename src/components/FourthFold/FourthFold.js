import React, {} from 'react';
import 'react-ig-feed/dist/index.css'
import {Container, Row} from "react-bootstrap";
import ComingSoonContainer from "./ComingSoonContainer";

const firstLetterStyles = {
    fontSize: `15vh`,
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
            <ComingSoonContainer />
        </div>
    );
}

export default FourthFold;
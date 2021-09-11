import React, {} from 'react';
import {Container} from "react-bootstrap";

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

const FirstFold = () => {
    // Declare a new state variable, which we'll call "count"  const [count, setCount] = useState(0);
    return (
        <Container style={{
            minHeight: `100vh`,
            padding: `80px 15px`,
            display: `flex`,
            justifyContent: `right`,
            alignItems: `center`
        }}>
            <h1 style={headerStyle}>
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
    );
}


export default FirstFold;
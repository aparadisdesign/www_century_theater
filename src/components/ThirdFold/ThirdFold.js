import React, {} from 'react';
import InstagramFeed  from 'react-ig-feed'
import 'react-ig-feed/dist/index.css'
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

const ThirdFold = (props) => {
    // Declare a new state variable, which we'll call "count"  const [count, setCount] = useState(0);
    return (
        <div id="insta-feed-century" style={{
            minHeight: `100vh`,
            padding: `80px 15px`,
            display: `flex`,
            flexDirection: `column`,
            justifyContent: `start`,
            alignItems: `start`,
            backgroundColor: `#212529`
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
                        <span style={{fontSize: `5vh`}}>@thecenturytheater</span>
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

            <InstagramFeed token="IGQVJYS19ScExkUUg2dkM4cDF2c0ZAkb2RqbU5xUjlSNVZAsVmFwTkZAzVzN1a2EtMXFIUXNRV0xBbDVKRlQwbjVaejFObDZA0MmctZAlBoTnhPUWRrT1gydHpZAblZAnWTJJMGQ2clFxMXgyclJhXzVNNmJ6ZAAZDZD"  counter="12"/>
        </div>
    );
}

export default ThirdFold;
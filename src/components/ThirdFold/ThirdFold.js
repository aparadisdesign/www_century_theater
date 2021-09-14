import React, {} from 'react';
import InstagramFeed  from 'react-ig-feed'
import 'react-ig-feed/dist/index.css'
import {Container} from "react-bootstrap";
import HeaderSection from "../HeaderSection";

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
                <HeaderSection title="Instagram" />
            </Container>

            <InstagramFeed token={process.env.REACT_APP_INSTAGRAM_TOKEN}  counter="12"/>
        </div>
    );
}

export default ThirdFold;
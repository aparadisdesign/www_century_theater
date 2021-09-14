import React, {} from 'react';
import 'react-ig-feed/dist/index.css'
import {Container} from "react-bootstrap";
import ComingSoonContainer from "../ComingSoonContainer";
import HeaderSection from "../HeaderSection";

const FourthFold = () => {
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
                <HeaderSection title="Coming Soon" />
            </Container>
            <ComingSoonContainer />
        </div>
    );
}

export default FourthFold;
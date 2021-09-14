import React, {} from 'react';
import {Container} from "react-bootstrap";
import HeaderSection from "../HeaderSection";

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
            <HeaderSection firstFold="True" />
        </Container>
    );
}

export default FirstFold;
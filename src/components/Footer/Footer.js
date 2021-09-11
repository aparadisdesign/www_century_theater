import React, {  } from 'react';
import './Footer.css';
import {Container} from "react-bootstrap";


const Footer = () => {
    // Declare a new state variable, which we'll call "count"  const [count, setCount] = useState(0);
    return (
        <footer className="footer">
            <Container className="container">
                <span className="text-muted">© 2021 The Century Theater, All rights reserved.</span>
            </Container>
        </footer>
    );
}


export default Footer;
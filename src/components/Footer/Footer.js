import React, {  } from 'react';
import './Footer.css';
import {Container} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {library} from "@fortawesome/fontawesome-svg-core";

library.add(fab)

const iconStyle = {
    padding: `0 15px`,
}

const Footer = () => {
    // Declare a new state variable, which we'll call "count"  const [count, setCount] = useState(0);
    return (
        <footer className="footer">
            <Container className="container">
                <span className="text-muted">© 2021 The Century Theater, All rights reserved.</span>
                <span style={{ color:`whitesmoke`, float: `right` }}>
                    <a href="https://www.facebook.com/TheCenturyTheater" style={ iconStyle } target="_blank"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
                    <a href="https://m.me/539449256479593" style={ iconStyle } target="_blank"><FontAwesomeIcon icon={['fab', 'facebook-messenger']} /></a>
                     <a href="https://www.instagram.com/thecenturytheater/" style={ iconStyle } target="_blank"><FontAwesomeIcon icon={['fab', 'instagram']}  /></a>

                </span>

            </Container>
        </footer>
    );
}


export default Footer;
import React, {  } from 'react';
import './Footer.css';
import {Container} from "react-bootstrap";
import SocialLink from "./SocialLink/SocialLink";


const Footer = () => {
    // Declare a new state variable, which we'll call "count"  const [count, setCount] = useState(0);
    return (
        <footer className="footer">
            <Container className="container">
                <span className="text-muted">© 2021 The Century Theater, All rights reserved.</span>
                <span style={{ color:`whitesmoke`, float: `right` }}>
                    <SocialLink link="https://www.facebook.com/TheCenturyTheater" icon={['fab', 'facebook-f']} />
                    <SocialLink link="https://m.me/539449256479593" icon={['fab', 'facebook-messenger']} />
                    <SocialLink link="https://www.instagram.com/thecenturytheater/" icon={['fab', 'instagram']} />
                </span>
            </Container>
        </footer>
    );
}


export default Footer;
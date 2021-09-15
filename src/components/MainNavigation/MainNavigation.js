import React, {  } from 'react';
import './MainNavigation.css';
import {Container, Nav, Navbar} from "react-bootstrap";

const MainNavigation = () => {
    // Declare a new state variable, which we'll call "count"  const [count, setCount] = useState(0);
    return (
            <Navbar bg="dark" variant="dark" className="mainNav">
                <Container>
                    <Navbar.Brand href="#home">The Century Theater</Navbar.Brand>
                    <Nav className="justify-content-end">
                        <Nav.Link href="#now-playing" className={["d-none", "d-md-block"]}>Now Playing</Nav.Link>
                        <Nav.Link href="#coming-soon" className={["d-none", "d-md-block"]}>Coming Soon</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
    );
}

export default MainNavigation;
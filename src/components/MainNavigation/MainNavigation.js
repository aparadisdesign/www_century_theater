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
                        {/*<Nav.Link href="#home">Home</Nav.Link>*/}
                        {/*<Nav.Link href="#features">Features</Nav.Link>*/}
                        {/*<Nav.Link href="#pricing">Pricing</Nav.Link>*/}
                    </Nav>
                </Container>
            </Navbar>
    );
}


export default MainNavigation;
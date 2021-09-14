import React, {useState} from 'react';
import {Button, Nav} from "react-bootstrap";
import Offcanvas from 'react-bootstrap/Offcanvas'
import HeaderSection from "./HeaderSection";

const headerStyles = {
    fontSize: `16pt`,
    textTransform: `uppercase`,
    textAlign: `center`,
    color: `black`,
    fontFamily: `adobe-garamond-pro, serif`,
    fontWeight: `400`,
    fontStyle: `normal`
}

const firstLetterStyles = {
    fontSize: `20pt`,
}

const SiteMenu = (props) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch
            </Button>
        <Offcanvas show={show} onHide={handleClose} placement={'end'}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title><HeaderSection styleOverride={headerStyles} firstOverride={firstLetterStyles} /></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Nav defaultActiveKey="/home" className="flex-column">
                    <Nav.Link href="/home">The Century Theater Homepage</Nav.Link>
                    <Nav.Link eventKey="link-1">About The Century Theater</Nav.Link>
                    <Nav.Link eventKey="link-2">Rent The Century Theater</Nav.Link>

                </Nav>
            </Offcanvas.Body>
        </Offcanvas>
        </>
    );
}


export default SiteMenu;


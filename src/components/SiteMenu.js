import React, {useState} from 'react';
import {Button, Nav} from "react-bootstrap";
import Offcanvas from 'react-bootstrap/Offcanvas'
import HeaderSection from "./HeaderSection";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons';
import {library} from "@fortawesome/fontawesome-svg-core";

library.add(fas)

const iconStyle = {
    padding: `0 15px`,
}
const headerStyles = {
    fontSize: `16pt`,
    textTransform: `uppercase`,
    textAlign: `center`,
    color: `black`,
    fontFamily: `adobe-garamond-pro, serif`,
    fontWeight: `400`,
    fontStyle: `normal`,
    width: `160px`,
    margin: `auto`
}

const firstLetterStyles = {
    fontSize: `20pt`,
}

const leftLineStyle = {
    marginRight: `5px`,
    marginTop: `8px`,
    borderTop: `solid .5px black`,
    marginBottom: `23px`,
    borderBottom: `solid .5px black`,
    width: `auto`,
    flexGrow: `4`,
    height: `4px`

}

const rightLineStyle = {
    marginLeft: `5px`,
    marginTop: `8px`,
    borderTop: `solid .5px black`,
    marginBottom: `23px`,
    borderBottom: `solid .5px green`,
    width: `auto`,
    flexGrow: `4` ,
    height: `4px`
}

const menuButton = {
    position: `fixed`,
    right: `10px`,
    bottom: `10px`,
    borderRadius: `5px 20px 5px`,
    zIndex: `14`,
}

const SiteMenu = (props) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow} style={menuButton}>
                <FontAwesomeIcon icon={['fas', 'bars']}  />
            </Button>
        <Offcanvas show={show} onHide={handleClose} placement={'end'}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title style={{width:`100%`}}><HeaderSection styleOverride={headerStyles} firstOverride={firstLetterStyles} leftLineOverride={leftLineStyle} rightLineOverride={rightLineStyle} lowerFontOverride="10px" /></Offcanvas.Title>
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


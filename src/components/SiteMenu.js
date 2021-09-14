import React, {useState} from 'react';
import {Button, Form, Nav} from "react-bootstrap";
import Offcanvas from 'react-bootstrap/Offcanvas'
import HeaderSection from "./HeaderSection";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {fas} from '@fortawesome/free-solid-svg-icons';
import {library} from "@fortawesome/fontawesome-svg-core";

library.add(fas)

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
    flexGrow: `4`,
    height: `4px`
}

const menuButton = {
    position: `fixed`,
    right: `10px`,
    bottom: `10px`,
    borderRadius: `5px 20px 5px`,
    zIndex: `14`,
}

const slideOutFooterStyles = {
    position: `absolute`,
    bottom: `0`,
    left: `0`,
    right: `0`,
    padding: `15px`,
    textAlign: `center`,
    borderTop: `solid medium black`,
    backgroundColor: `rgb(33, 37, 41)`,
    color: `whitesmoke`
}

const SiteMenu = (props) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow} style={menuButton} disabled={false}>
                <FontAwesomeIcon icon={['fas', 'bars']}/>
            </Button>
            <Offcanvas show={show} onHide={handleClose} placement={'end'}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title style={{width: `100%`}}><HeaderSection styleOverride={headerStyles}
                                                                            firstOverride={firstLetterStyles}
                                                                            leftLineOverride={leftLineStyle}
                                                                            rightLineOverride={rightLineStyle}
                                                                            lowerFontOverride="10px"/></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <h5>Website Links <small>(COMING SOON)</small></h5>
                    <Nav defaultActiveKey="/home" className="flex-column">
                        <Nav.Link href="/home" disabled={true}>The Century Theater Homepage</Nav.Link>
                        <Nav.Link eventKey="link-1" disabled={true}>About The Century Theater</Nav.Link>
                        <Nav.Link eventKey="link-2" disabled={true}>Memberships</Nav.Link>
                        <Nav.Link eventKey="link-2" disabled={true}>Our Sponsors</Nav.Link>
                        <Nav.Link eventKey="link-2" disabled={true}>Theater Rentals</Nav.Link>
                    </Nav>
                    <br />
                    <br />
                    <h5>Contact Form <small>(COMING SOON)</small></h5>
                    <Form style={{marginBottom: `135px`}}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control type="text" disabled={true} placeholder="Bob Wehadababyitsaboy" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Your Email Address</Form.Label>
                            <Form.Control type="email" disabled={true} placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Your Message</Form.Label>
                            <Form.Control as="textarea" disabled={true} rows={3} />
                        </Form.Group>
                        <Button variant="dark" type={"submit"} disabled={true}>Submit</Button>
                    </Form>

                    <div style={slideOutFooterStyles}>
                        <h6>The Century Theater</h6>
                        13 Hall St<br/>
                        Fort Kent, Maine 04743<br/>
                        (207) 231-5287
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}


export default SiteMenu;



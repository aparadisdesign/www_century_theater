import React, {useState} from 'react';
import {Button, Modal} from "react-bootstrap";
import ReactHtmlParser from 'react-html-parser';


const MainModal = () => {

    let modal_data = {
        title: "Under Development",
        body: "<h4>We just started building this thing!</h4><p>For now the best place to find showtime and information about the century theater is on our Facebook page. <a href=\"https://www.facebook.com/TheCenturyTheater\">Click Here To Visit Us On Facebook</a></p><p>The best way to contact us is by Facebook Messenger.</p>",
    }

    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch static backdrop modal
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header>
                    <Modal.Title>{modal_data.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    { ReactHtmlParser (modal_data.body) }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


export default MainModal;
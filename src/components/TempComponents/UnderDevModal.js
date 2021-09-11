import React, {} from 'react';
import {Button, Container, Modal} from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Under Development
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>We just started building this thing!</h4>
                <p>
                    For now the best place to find showtime and information about the century theater is on our Facebook page. <a href="https://www.facebook.com/TheCenturyTheater">Click Here To Visit Us On Facebook</a>
                </p>
                <p>
                    The best way to contact us is by Facebook Messenger.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

const UnderDevModal = () => {

    const [modalShow, setModalShow] = React.useState(true);

    // Declare a new state variable, which we'll call "count"  const [count, setCount] = useState(0);
    return (
        <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
        />
    );
}


export default UnderDevModal;
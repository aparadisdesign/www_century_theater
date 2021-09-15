import React from 'react';
import {Button, Card, Modal} from "react-bootstrap";
import ReactHtmlParser from 'react-html-parser';
import SocialLink from "../Footer/SocialLink/SocialLink";


const MainModal = (props) => {

    return (
        <>
            <Modal
                show={props.show}
                onHide={props.handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header>
                    <Modal.Title>{props.movie ? "Move Details" : props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.movie ?
                        <Card style={{width: '100%'}}>
                            <Card.Img variant="top" style={{
                                height: `auto`,
                                width: `auto`,
                                maxHeight: `300px`,
                                maxWidth: `200px`,
                                margin: `10px auto`
                            }} src={props.poster}/>
                            <Card.Body>
                                <Card.Title>{props.title}</Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li>Rating: {props.rating}</li>
                                        <li>Running Time: {props.runningTime}</li>
                                        <li>Director: {props.director}</li>
                                        <li>Producer: {props.producer}</li>
                                        <li>
                                            Rotten Tomatoes: <SocialLink link={props.tomatoLink}
                                                                         icon={['fas', 'external-link-alt']}/>
                                            <ul>
                                                <li>Tomatometer: {props.tomatoScore}</li>
                                                <li>Audience Score: {props.audienceScore}</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card> :
                        ReactHtmlParser(props.body)
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


export default MainModal;
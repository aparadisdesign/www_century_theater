import React, {useState} from 'react';
import YouTube from 'react-youtube';
import {Button, Card, Modal} from "react-bootstrap";
import SocialLink from "../Footer/SocialLink/SocialLink";

const styles = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: `25px`
}

const opts = {
    width: '100%',
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
    },
};


const NowPlaying = (props) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div style={styles}>
                <YouTube videoId={props.videoId} opts={opts} />
                <Button variant="outline-light" onClick={handleShow}>More Details</Button>
            </div>


            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header>
                    <Modal.Title>Movie Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" style={{height:`auto`, width: `auto`, maxHeight:`300px`, maxWidth: `200px`, margin: `10px auto`}} src={props.poster} />
                        <Card.Body>
                            <Card.Title>{props.title}</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>Rating: {props.rating}</li>
                                    <li>Running Time: {props.running_time}</li>
                                    <li>Director: {props.director}</li>
                                    <li>Producer: {props.producer}</li>
                                    <li>
                                        Rotten Tomatoes: <SocialLink link={props.rotten_link} icon={['fas', 'external-link-alt']} />
                                        <ul>
                                            <li>Tomatometer: {props.tomatometer}</li>
                                            <li>Audience Score: {props.audience_score}</li>
                                        </ul>
                                    </li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
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


export default NowPlaying;

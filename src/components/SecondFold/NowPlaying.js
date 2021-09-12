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
                        <Card.Img variant="top" style={{height:`auto`, width: `auto`, maxHeight:`300px`, maxWidth: `200px`, margin: `10px auto`}} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/642ed171-851c-493b-b942-81b3a29ed891/dem3j2p-2f4c686a-2c6b-4f02-9688-0b6b0db47c02.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY0MmVkMTcxLTg1MWMtNDkzYi1iOTQyLTgxYjNhMjllZDg5MVwvZGVtM2oycC0yZjRjNjg2YS0yYzZiLTRmMDItOTY4OC0wYjZiMGRiNDdjMDIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.aXj3WWmpFMSzb0ZSAzyqWWDc16nhqzAVfMIOWsbrqcA" />
                        <Card.Body>
                            <Card.Title>Paw Patrol</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>Rating: G</li>
                                    <li>Running Time: 125min</li>
                                    <li>Director: Cal Brunker</li>
                                    <li>Producer: Jennifer Dodge</li>
                                    <li>
                                        Rotten Tomatoes: <SocialLink link="https://www.rottentomatoes.com/m/paw_patrol_the_movie" icon={['fas', 'external-link-alt']} />
                                        <ul>
                                            <li>Tomatometer: 77%</li>
                                            <li>Audience Score: 97%</li>
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

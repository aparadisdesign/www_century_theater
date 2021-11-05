import React from 'react';
import YouTube from 'react-youtube';
import {Button, ButtonGroup, Col, Container, Row} from "react-bootstrap";


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

const MovieList = (props) => {
    let movies = [
        {
            title: "Last Night in Soho",
            running_time: "1h 56m",
            rating: "R",
            youtube_id: "AcVnFrxjPjI",
            poster: "https://cdn.century.theater/last_night_in_soho.jpg",
            director: "Edgar Wright",
            producer: "",
            rotten_link: "https://www.rottentomatoes.com/m/last_night_in_soho",
            tomatometer: "74%",
            audience_score: "",
            show_times: "<table class='table'>" +
                "<tr><th>Date</th><th colspan='2'>Week 1</th><th colspan='2'>Week 2</th></tr>" +
                "<tr><th>Friday</th><td>10/29</td><td>3PM & 6PM</td><td>11/5</td><td>4PM & 7PM</td></tr>" +
                "<tr><th>Sat</th><td>10/30</td><td>4PM & 7PM</td><td>11/6</td><td>4PM & 7PM</td></tr>" +
                "<tr><th>Sun</th><td>10/31</td><td>5PM</td><td>11/7</td><td>5PM</td></tr>" +
                "</table>",
        },
        {
            title: "Ron's Gone Wrong",
            running_time: "1h 46min",
            rating: "PG",
            youtube_id: "8I8nMtzN05s",
            poster: "https://cdn.century.theater/ronsgonewrong.jpg",
            director: "Sarah Smith, Jean-Philippe Vine, Octavio E. Rodriguez",
            producer: "",
            rotten_link: "https://www.rottentomatoes.com/m/rons_gone_wrong",
            tomatometer: "80%",
            audience_score: "94%",
            show_times: "<table class='table'>" +
                "<tr><th>Date</th><th colspan='2'>Week 1</th><th colspan='2'>Week 2</th></tr>" +
                "<tr><th>Friday</th><td>11/5</td><td>4PM & 7PM</td><td>11/12</td><td>4PM & 7PM</td></tr>" +
                "<tr><th>Sat</th><td>11/6</td><td>4PM & 7PM</td><td>11/13</td><td>4PM & 7PM</td></tr>" +
                "<tr><th>Sun</th><td>11/7</td><td>5PM</td><td>11/14</td><td>5PM</td></tr>" +
                "</table>",
        },
    ]


    const listItems = movies.map((movie) =>
        <Col sm={12} md={6}>
            <div style={styles}>
                <YouTube videoId={movie.youtube_id} opts={opts}/>
                <ButtonGroup aria-label="Basic example">
                    <Button variant="outline-light" onClick={() => {
                        props.handleShow()
                        props.setModalTitle(movie.title + " Showtimes")
                        props.setBody(movie.show_times)
                        props.setIsMovie(false)
                    }}
                    >Showtimes</Button>
                    <Button variant="outline-light" onClick={() => {
                        props.handleShow();
                        props.setModalTitle(movie.title)
                        props.setIsMovie(true)
                        props.handleRating(movie.rating)
                        props.handleRunningTime(movie.running_time)
                        props.handleDirector(movie.director)
                        props.handleProducer(movie.producer)
                        props.handlePoster(movie.poster)
                        props.handleAudienceScore(movie.audience_score)
                        props.handleTomatoScore(movie.tomatometer)
                        props.handleTomatoLink(movie.rotten_link)
                    }}>More Details</Button>
                </ButtonGroup>
            </div>
        </Col>
    );
    return listItems
}

const NowPlaying = (props) => {
    return (
        <Container>
            <Row>
                <MovieList handleShow={props.handleShow} setModalTitle={props.setModalTitle}
                           setIsMovie={props.setIsMovie} handleRating={props.handleRating}
                           handleRunningTime={props.handleRunningTime} handleDirector={props.handleDirector}
                           handleProducer={props.handleProducer} handlePoster={props.handlePoster}
                           handleTomatoScore={props.handleTomatoScore} handleTomatoLink={props.handleTomatoLink}
                           handleAudienceScore={props.handleAudienceScore}  setBody={props.setBody}/>
            </Row>
        </Container>
    );
}


export default NowPlaying;

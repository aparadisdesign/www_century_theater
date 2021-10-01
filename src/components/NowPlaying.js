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
            title: "Venom: Let There Be Carnage",
            running_time: "2h",
            rating: "PG-13",
            youtube_id: "rrwBnlYOp4g",
            poster: "https://cdn.century.theater/venom.jpg",
            director: "Andy Serkis",
            producer: "",
            rotten_link: "https://www.rottentomatoes.com/m/venom_let_there_be_carnage",
            tomatometer: "59%",
            audience_score: "86%",
            show_times: "<table class='table'>" +
                "<tr><th>Date</th><th colspan='2'>Week 1</th><th colspan='2'>Week 2</th></tr>" +
                "<tr><th>Friday</th><td>10/1</td><td>4PM & 7PM</td><td>10/8</td><td>4PM & 7PM</td></tr>" +
                "<tr><th>Sat</th><td>10/2</td><td>4PM & 7PM</td><td>10/9</td><td>4PM & 7PM</td></tr>" +
                "<tr><th>Sun</th><td>10/3</td><td>5PM</td><td>10/10</td><td>5PM</td></tr>" +
                "</table>",
        },
        {
            title: "Hotel Transylvania 3: Summer Vacation",
            running_time: "1h 37min",
            rating: "PG",
            youtube_id: "Ku52zNnft8k",
            poster: "https://cdn.century.theater/ht3.jpg",
            director: "",
            producer: "",
            rotten_link: "https://www.rottentomatoes.com/m/hotel_transylvania_3_summer_vacation",
            tomatometer: "62%",
            audience_score: "48%",
            show_times: "<table class='table'>" +
                "<tr><th>Date</th><th colspan='2'>Week 1</th></tr>" +
                "<tr><th>Friday</th><td>10/1</td><td>4PM & 7PM</td></tr>" +
                "<tr><th>Sat</th><td>10/2</td><td>4PM & 7PM</td></tr>" +
                "<tr><th>Sun</th><td>10/3</td><td>5PM</td></tr>" +
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

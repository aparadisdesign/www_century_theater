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
            title: "Halloween Kills",
            running_time: "1h 45m",
            rating: "R",
            youtube_id: "hL6R3HmQfPc",
            poster: "https://cdn.century.theater/halloween_kills.jpeg",
            director: "David Gordon Green",
            producer: "",
            rotten_link: "https://www.rottentomatoes.com/m/halloween_kills",
            tomatometer: "",
            audience_score: "",
            show_times: "<table class='table'>" +
                "<tr><th>Date</th><th colspan='2'>Week 1</th><th colspan='2'>Week 2</th></tr>" +
                "<tr><th>Friday</th><td>10/15</td><td>4PM & 7PM</td><td>10/22</td><td>4PM & 7PM</td></tr>" +
                "<tr><th>Sat</th><td>10/16</td><td>4PM & 7PM</td><td>10/23</td><td>4PM & 7PM</td></tr>" +
                "<tr><th>Sun</th><td>10/17</td><td>5PM</td><td>10/24</td><td>5PM</td></tr>" +
                "<tr><th colspan='5' style='text-align:center;'>EXTRA SHOWTIME</th></tr>" +
                "<tr><th colspan='5' style='text-align:center;'>Monday 10/18   5:30PM</th></tr>" +
                "</table>",
        },
        {
            title: "Lamb",
            running_time: "1h 46m",
            rating: "R",
            youtube_id: "hnEwJKVWjFM",
            poster: "",
            director: "Valdimar Jóhannsson",
            producer: "Peter Gustafsson, Erik Rydell, Klaudia Smieja, Jan Naszewski, Hronn Kristinsdottir, Sara Nassim",
            rotten_link: "https://www.rottentomatoes.com/m/lamb_2021",
            tomatometer: "83%",
            audience_score: "61%",
            show_times: "<table class='table'>" +
                "<tr><th>Date</th><th colspan='2'>Week 1</th></tr>" +
                "<tr><th>Friday</th><td>10/22</td><td>4PM & 7PM</td></tr>" +
                "<tr><th>Sat</th><td>10/23</td><td>4PM & 7PM</td></tr>" +
                "<tr><th>Sun</th><td>10/24</td><td>NO SHOWING</td></tr>" +
                "<tr><th colspan='3' style='text-align:center;'>EXTRA SHOWTIME</th></tr>" +
                "<tr><th colspan='3' style='text-align:center;'>Monday 10/25   5:30PM</th></tr>" +
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

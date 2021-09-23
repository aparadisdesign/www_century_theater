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
            title: "Lady of the Manor",
            running_time: "1h 36min",
            rating: "R",
            youtube_id: "3u9gLvLBtBQ",
            poster: "https://cdn.century.theater/ladyofthemanor.jpeg",
            director: "Christian Long & Justin Long",
            producer: "Michael E. Brown",
            rotten_link: "https://www.rottentomatoes.com/m/lady_of_the_manor",
            tomatometer: "",
            audience_score: "",
            show_times: "<table class='table'>" +
                "<tr><th>Date</th><th colspan='2'>Week 1</th><th colspan='2'>Week 2</th></tr>" +
                "<tr><th>Wed</th><td colspan='2'>&nbsp;</td><td>9/22</td><td>7PM</td></tr>" +
                "<tr><th>Thur</th><td colspan='2'>&nbsp;</td><td>9/23</td><td>7PM</td></tr>" +
                "<tr><th>Friday</th><td>9/17</td><td>3PM, 5PM & 7PM</td><td>9/24</td><td>3PM, 5PM & 7PM</td></tr>" +
                "<tr><th>Sat</th><td>9/18</td><td>3PM, 5PM & 7PM</td><td>9/25</td><td>3PM, 5PM & 7PM</td></tr>" +
                "<tr><th>Sun</th><td>9/19</td><td>5PM</td><td>9/26</td><td>5PM</td></tr>" +
                "</table>",
        },
        {
            title: "The Green Knight",
            running_time: "2h 10m",
            rating: "R",
            youtube_id: "sS6ksY8xWCY",
            poster: "https://cdn.century.theater/thegreenknight.jpeg",
            director: "David Lowery",
            producer: "",
            rotten_link: "https://www.rottentomatoes.com/m/the_green_knight",
            tomatometer: "88%",
            audience_score: "50%",
            show_times: "<table class='table'>" +
                "<tr><th>Date</th><th colspan='2'>Week 1</th><th colspan='2'>Week 2</th></tr>" +
                "<tr><th>Wed</th><td colspan='2'>&nbsp;</td><td>9/29</td><td>7PM</td></tr>" +
                "<tr><th>Thur</th><td colspan='2'>&nbsp;</td><td>9/30</td><td>7PM</td></tr>" +
                "<tr><th>Friday</th><td>9/24</td><td>4PM & 7PM</td><td>10/1</td><td>4PM & 7PM</td></tr>" +
                "<tr><th>Sat</th><td>9/25</td><td>4PM & 7PM</td><td>10/2</td><td>4PM & 7PM</td></tr>" +
                "<tr><th>Sun</th><td>9/26</td><td>5PM</td><td>10/3</td><td>5PM</td></tr>" +
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

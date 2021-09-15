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
            title: "Paw Patrol: The Movie",
            running_time: "1h 28m",
            rating: "G",
            youtube_id: "LRMTr2VZcr8",
            poster: "https://cdn.century.theater/paw-patrol-poster.jpg",
            director: "Cal Brunker",
            producer: "Jennifer Dodge",
            rotten_link: "https://www.rottentomatoes.com/m/paw_patrol_the_movie",
            tomatometer: "77%",
            audience_score: "97%",
            show_times: "<table class='table'>" +
                "<tr><th>Date</th><th colspan='2'>Week 1</th><th colspan='2'>Week 2</th></tr>" +
                "<tr><th>Wed</th><td colspan='2'>&nbsp;</td><td>9/15</td><td>7PM</td></tr>" +
                "<tr><th>Thur</th><td colspan='2'>&nbsp;</td><td>9/16</td><td>7PM</td></tr>" +
                "<tr><th>Friday</th><td>9/10</td><td>3PM, 5PM & 7PM</td><td>9/17</td><td>3PM, 5PM & 7PM</td></tr>" +
                "<tr><th>Sat</th><td>9/11</td><td>3PM, 5PM & 7PM</td><td>9/18</td><td>3PM, 5PM & 7PM</td></tr>" +
                "<tr><th>Sun</th><td>9/12</td><td>5PM</td><td>9/19</td><td>5PM</td></tr>" +
                "</table>",
        },
        {
            title: "Shang-Chi and the Legend of the Ten Rings",
            running_time: "2h 12m",
            rating: "PG-13",
            youtube_id: "8YjFbMbfXaQ",
            poster: "https://cdn.century.theater/shang-chi-poster.jpg",
            director: "Destin Daniel Cretton",
            producer: "Kevin Feige",
            rotten_link: "https://www.rottentomatoes.com/m/shang_chi_and_the_legend_of_the_ten_rings",
            tomatometer: "92%",
            audience_score: "98%",
            show_times: "<table class='table'>" +
                "<tr><th>Date</th><th colspan='2'>Week 1</th><th colspan='2'>Week 2</th></tr>" +
                "<tr><th>Wed</th><td>9/8</td><td>7PM</td><td>9/15</td><td>7PM</td></tr>" +
                "<tr><th>Thur</th><td>9/9</td><td>7PM</td><td>9/16</td><td>7PM</td></tr>" +
                "<tr><th>Friday</th><td>9/10</td><td>3PM & 7PM</td><td colspan='2'>&nbsp;</td></tr>" +
                "<tr><th>Sat</th><td>9/11</td><td>3PM & 7PM</td><td colspan='2'>&nbsp;</td></tr>" +
                "<tr><th>Sun</th><td>9/12</td><td>5PM</td><td colspan='2'>&nbsp;</td></tr>" +
                "</table>"
        }
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

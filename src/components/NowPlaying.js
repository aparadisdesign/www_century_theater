import React from 'react';
import YouTube from 'react-youtube';
import {Button, Col, Container, Row} from "react-bootstrap";


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
        }
    ]


    const listItems = movies.map((movie) =>
        <Col sm={12} md={6}>
            <div style={styles}>
                <YouTube videoId={movie.youtube_id} opts={opts}/>
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
                           handleAudienceScore={props.handleAudienceScore}/>
            </Row>
        </Container>
    );
}


export default NowPlaying;
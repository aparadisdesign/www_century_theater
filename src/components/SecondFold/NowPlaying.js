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
            poster: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/642ed171-851c-493b-b942-81b3a29ed891/dem3j2p-2f4c686a-2c6b-4f02-9688-0b6b0db47c02.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY0MmVkMTcxLTg1MWMtNDkzYi1iOTQyLTgxYjNhMjllZDg5MVwvZGVtM2oycC0yZjRjNjg2YS0yYzZiLTRmMDItOTY4OC0wYjZiMGRiNDdjMDIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.aXj3WWmpFMSzb0ZSAzyqWWDc16nhqzAVfMIOWsbrqcA",
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
            poster: "https://m.media-amazon.com/images/M/MV5BNTliYjlkNDQtMjFlNS00NjgzLWFmMWEtYmM2Mzc2Zjg3ZjEyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
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
                <YouTube videoId={movie.youtube_id} opts={opts} />
                <Button variant="outline-light" onClick={() => { props.handleShow(); props.setModalTitle("Movie Details") }}>More Details</Button>
            </div>
        </Col>
    );
    return listItems
}

const NowPlaying = (props) => {
    return (
        <Container>
            <Row>
                <MovieList handleShow={props.handleShow} setModalTitle={props.setModalTitle} />
            </Row>
        </Container>
    );
}


export default NowPlaying;

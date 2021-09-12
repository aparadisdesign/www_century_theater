import React, {} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import NowPlaying from "./NowPlaying";

const firstLetterStyles = {
    fontSize: `15vh`,
}

const headerStyle = {
    textTransform: `uppercase`,
    lineHeight: `7vh`,
    fontSize: `10vh`,
    textAlign: `center`,
    color: `whitesmoke`,
    fontFamily: `adobe-garamond-pro, serif`,
    fontWeight: `400`,
    fontStyle: `normal`
}

const MovieList = () => {
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
            <NowPlaying videoId={movie.youtube_id} title={movie.title} running_time={movie.running_time}
                        rating={movie.rating} director={movie.director} producer={movie.producer} poster={movie.poster}
                        tomatometer={movie.tomatometer} audience_score={movie.audience_score} rotten_link={movie.rotten_link}
            />
        </Col>
    );
    return listItems
}

const SecondFold = () => {
    // Declare a new state variable, which we'll call "count"  const [count, setCount] = useState(0);
    return (
        <div id="now-playing" style={{
            minHeight: `100vh`,
            padding: `80px 15px`,
            display: `flex`,
            flexDirection: `column`,
            justifyContent: `start`,
            alignItems: `start`
        }}>
            <Container>
                <h1 style={headerStyle}>
                    <small style={{marginBottom: `10px`, display: `flex`, flexDirection: `row`}}>
                        <span style={{
                            marginRight: `5px`,
                            marginTop: `3vh`,
                            borderTop: `solid .25vh white`,
                            marginBottom: `3vh`,
                            borderBottom: `solid .25vh white`,
                            width: `auto`,
                            flexGrow: `4`
                        }}/>
                        <span style={{fontSize: `5vh`}}>Now Playing</span>
                        <span style={{
                            marginLeft: `5px`,
                            marginTop: `3vh`,
                            borderTop: `solid .25vh white`,
                            marginBottom: `3vh`,
                            borderBottom: `solid .25vh white`,
                            width: `auto`,
                            flexGrow: `4`
                        }}/>
                    </small>
                    <span style={firstLetterStyles}>T</span>he <span style={firstLetterStyles}>C</span>entury
                    <br/>
                    <small style={{display: `flex`, flexDirection: `row`}}>
                        <span style={{
                            marginRight: `5px`,
                            marginTop: `3vh`,
                            borderTop: `solid .25vh white`,
                            marginBottom: `3vh`,
                            borderBottom: `solid .25vh white`,
                            width: `auto`,
                            flexGrow: `4`
                        }}/>
                        <span style={{fontSize: `5vh`}}>Theater</span>
                        <span style={{
                            marginLeft: `5px`,
                            marginTop: `3vh`,
                            borderTop: `solid .25vh white`,
                            marginBottom: `3vh`,
                            borderBottom: `solid .25vh white`,
                            width: `auto`,
                            flexGrow: `4`
                        }}/>
                    </small>
                </h1>
            </Container>
            <Container>
                <Row>
                    <MovieList/>
                </Row>
            </Container>
        </div>
    );
}


export default SecondFold;
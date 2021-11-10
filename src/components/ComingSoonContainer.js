import React, {} from 'react';
import {Container, Row} from "react-bootstrap";

import ComingSoonTeaser from "./ComingSoonTeaser";

let comingSoonMovies = [
    {
        videoId: "x_me3xsvDgk",
        status: "confirmed",
        startDate: "November 19th",
    },
    {
        videoId: "ahZFCF--uRY",
        status: "confirmed",
        startDate: "November 19th",
    },
    {
        videoId: "CaimKeDcudo",
        status: "pending",
        startDate: "December 3rd"
    },
    {
        videoId: "EPZu5MA2uqI",
        status: "confirmed",
        startDate: "December 24th"
    }
]

const ComingSoonContainer = () => {
    // Declare a new state variable, which we'll call "count"  const [count, setCount] = useState(0);
    return (
        <Container>
            <Row>
                { comingSoonMovies.map((movie) => <ComingSoonTeaser videoId={movie.videoId} status={movie.status} startDate={movie.startDate} />) }
            </Row>
        </Container>
    );
}

export default ComingSoonContainer;
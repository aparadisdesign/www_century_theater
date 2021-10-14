import React, {} from 'react';
import {Container, Row} from "react-bootstrap";

import ComingSoonTeaser from "./ComingSoonTeaser";

let comingSoonMovies = [
    {
        videoId: "8I8nMtzN05s",
        status: "pending",
        startDate: "October 22nd",
    },
    {
        videoId: "tB9WUIv9KH8",
        status: "pending",
        startDate: "October 29th",
    },
    {
        videoId: "x_me3xsvDgk",
        status: "pending",
        startDate: "November 5th",
    },
    {
        videoId: "Ja3PPOnJQ2k",
        status: "pending",
        startDate: "November 12th",
    },
    {
        videoId: "ahZFCF--uRY",
        status: "pending",
        startDate: "November 19th",
    },
    {
        videoId: "CaimKeDcudo",
        status: "pending",
        startDate: "November 26th"
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
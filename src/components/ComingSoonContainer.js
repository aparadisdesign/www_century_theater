import React, {} from 'react';
import {Container, Row} from "react-bootstrap";

import ComingSoonTeaser from "./ComingSoonTeaser";

let comingSoonMovies = [
    {
        videoId: "sS6ksY8xWCY",
        status: "Confirmed",
        startDate: "September 24th",
    },
    {
        videoId: "rrwBnlYOp4g",
        status: "pending",
        startDate: "October 1st",
    },
    {
        videoId: "N_gD9-Oa0fg",
        status: "pending",
        startDate: "October 8th",
    },
    {
        videoId: "hL6R3HmQfPc",
        status: "confirmed",
        startDate: "October 15th",
    },
    {
        videoId: "8I8nMtzN05s",
        status: "pending",
        startDate: "October 22nd",
    },
    {
        videoId: "4plqh6obZW4",
        status: "pending",
        startDate: "October 29th",
    },
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
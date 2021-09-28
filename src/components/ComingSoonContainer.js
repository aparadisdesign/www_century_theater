import React, {} from 'react';
import {Container, Row} from "react-bootstrap";

import ComingSoonTeaser from "./ComingSoonTeaser";

let comingSoonMovies = [
    {
        videoId: "rrwBnlYOp4g",
        status: "Confirmed",
        startDate: "October 1st",
    },
    {
        videoId: "g_c_Jd-hP-s",
        status: "pending",
        startDate: "October 8th",
    },
    {
        videoId: "hL6R3HmQfPc",
        status: "Confirmed",
        startDate: "October 15th",
    },
    {
        videoId: "8I8nMtzN05s",
        status: "pending",
        startDate: "October 22nd",
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
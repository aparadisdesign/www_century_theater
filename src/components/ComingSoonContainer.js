import React, {} from 'react';
import 'react-ig-feed/dist/index.css'
import {Container, Row} from "react-bootstrap";

import ComingSoonTeaser from "./ComingSoonTeaser";


const ComingSoonContainer = () => {
    // Declare a new state variable, which we'll call "count"  const [count, setCount] = useState(0);
    return (
        <Container>
            <Row>
                <ComingSoonTeaser videoId="3u9gLvLBtBQ" />
                <ComingSoonTeaser videoId="rrwBnlYOp4g" />
                <ComingSoonTeaser videoId="N_gD9-Oa0fg" />
                <ComingSoonTeaser videoId="hL6R3HmQfPc" />
                <ComingSoonTeaser videoId="8I8nMtzN05s" />
                <ComingSoonTeaser videoId="4plqh6obZW4" />
            </Row>
        </Container>
    );
}

export default ComingSoonContainer;
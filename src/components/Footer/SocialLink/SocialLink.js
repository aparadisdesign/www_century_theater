import React, {  } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import {library} from "@fortawesome/fontawesome-svg-core";

library.add(fab)
library.add(fas)

const iconStyle = {
    padding: `0 15px`,
}

const SocialLink = (props) => {
    // Declare a new state variable, which we'll call "count"  const [count, setCount] = useState(0);
    return (
        <a href={props.link} style={ iconStyle } target="_blank"  rel="noreferrer">
            <FontAwesomeIcon icon={props.icon}  />
        </a>
    );
}


export default SocialLink;
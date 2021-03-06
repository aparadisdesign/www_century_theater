import React, {} from 'react';

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

const leftLineStyle = {
    marginRight: `5px`,
    marginTop: `3vh`,
    borderTop: `solid .25vh white`,
    marginBottom: `3vh`,
    borderBottom: `solid .25vh white`,
    width: `auto`,
    flexGrow: `4`,
}

const rightLineStyle = {
    marginLeft: `5px`,
    marginTop: `3vh`,
    borderTop: `solid .25vh white`,
    marginBottom: `3vh`,
    borderBottom: `solid .25vh white`,
    width: `auto`,
    flexGrow: `4`
}

const HeaderSection = (props) => {
    // Declare a new state variable, which we'll call "count"  const [count, setCount] = useState(0);
    return (
            <h2 style={props.styleOverride ? props.styleOverride : headerStyle}>
                {props.title &&
                    <small style={{marginBottom: `10px`, display: `flex`, flexDirection: `row`}}>
                        <span style={props.leftLineOverride ? props.leftLineOverride : leftLineStyle}/>
                        <span style={{fontSize: `5vh`}}>{props.title}</span>
                        <span style={props.rightLineOverride ? props.rightLineOverride : rightLineStyle}/>
                    </small>
                }
                <span style={props.firstOverride ? props.firstOverride : firstLetterStyles}>T</span>he <span style={props.firstOverride ? props.firstOverride : firstLetterStyles}>C</span>entury
                <br/>
                <small style={{display: `flex`, flexDirection: `row`}}>
                    <span style={props.leftLineOverride ? props.leftLineOverride : leftLineStyle}/>
                    <span style={props.lowerFontOverride ? {fontSize: `18px`} : {fontSize:`5vh`}  }>Theater</span>
                    <span style={props.rightLineOverride ? props.rightLineOverride : rightLineStyle}/>
                </small>
            </h2>
    );
}

export default HeaderSection;
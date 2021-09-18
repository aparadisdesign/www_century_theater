import MainNavigation from "./components/MainNavigation/MainNavigation";
import Footer from "./components/Footer/Footer";
import './App.css';
import background from "./img/background-img.png";
import MainModal from "./components/MainModal/MainModal";
import React, {useState} from "react";
import HeaderSection from "./components/HeaderSection";
import {Button, Container} from "react-bootstrap";
import NowPlaying from "./components/NowPlaying";
import ComingSoonContainer from "./components/ComingSoonContainer";
import SiteMenu from "./components/SiteMenu";
import { scroller } from "react-scroll";

const scrollToSection = () => {
    scroller.scrollTo("comingSoon", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
    });
};


const style = {
    backgroundColor: `rgba(25, 25, 25, .7)`,
    backgroundImage: `url(${background})`,
    backgroundPosition: `center center`,
    backgroundSize: `cover`,
    backgroundBlendMode: `overlay`,
    minHeight: `100vh`,
    marginBottom: `60px`,
}

const firstFoldStyles = {
    minHeight: `100vh`,
    padding: `80px 15px`,
    display: `flex`,
    justifyContent: `right`,
    alignItems: `center`
}

const nowPlayingStyles = {
    minHeight: `100vh`,
    padding: `80px 15px`,
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `start`,
    alignItems: `start`
}


const comingSoonDivStyles = {
    minHeight: `100vh`,
    padding: `80px 15px`,
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `start`,
    alignItems: `start`,
    backgroundColor: `#212529`,
}




function App() {

    const [show, setShow] = useState(false);
    const [title, setTitle] = useState("Under Development")
    const [body, setBody] = useState("<h4>We just started building this thing!</h4><p>For now the best place to find showtime and information about the century theater is on our Facebook page. <a href=\"https://www.facebook.com/TheCenturyTheater\">Click Here To Visit Us On Facebook</a></p><p>The best way to contact us is by Facebook Messenger.</p>")
    const [movie, setMovie] = useState(false)
    const [rating, setRating] = useState(null)
    const [runningTime, setRunningTime] = useState(null)
    const [director, setDirector] = useState(null)
    const [producer, setProducer] = useState(null)
    const [poster, setPoster] = useState(null)
    const [tomatoScore, setTomatoScore] = useState(null)
    const [tomatoLink, setTomatoLink] = useState(null)
    const [audienceScore, setAudienceScore] = useState(null)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)
    const handleRating = (rating) => setRating(rating)
    const handleBody = (body) => setBody(body)
    const handleRunningTime = (runningTime) => setRunningTime(runningTime)
    const handleDirector = (director) => setDirector(director)
    const handlePoster = (poster) => setPoster(poster)
    const handleProducer = (producer) => setProducer(producer)
    const setModalTitle = (title) => setTitle(title)
    const setIsMovie = (isMovie) => setMovie(isMovie)
    const handleTomatoScore = (tomatoScore) => setTomatoScore(tomatoScore)
    const handleTomatoLink = (tomatoLink) => setTomatoLink(tomatoLink)
    const handleAudienceScore = (audienceScore) => setAudienceScore(audienceScore)

    return (
        <div className="topLevelDiv">
            <MainNavigation/>
            <SiteMenu />
            <div className="mainContainer" style={style}>
                <Container style={firstFoldStyles}>
                    <HeaderSection firstFold="True" />
                </Container>
                <div id="now-playing" style={nowPlayingStyles}>
                    <Container>
                        <HeaderSection title="Now Playing" />
                    </Container>
                    <NowPlaying handleShow={handleShow} setModalTitle={setModalTitle} setIsMovie={setIsMovie} director={director}
                                producer={producer} handleRating={handleRating} handleRunningTime={handleRunningTime}
                                handleDirector={handleDirector} handleProducer={handleProducer} handlePoster={handlePoster}
                                handleTomatoScore={handleTomatoScore} handleTomatoLink={handleTomatoLink}
                                handleAudienceScore={handleAudienceScore} setBody={handleBody}
                    />
                    <Button style={{ margin:"0 auto"}} variant="outline-light" onClick={scrollToSection} >View Upcoming Films</Button>
                </div>
                <div id="coming-soon" style={comingSoonDivStyles}>
                    <Container className="comingSoon">
                        <HeaderSection title="Coming Soon" />
                    </Container>
                    <ComingSoonContainer />
                </div>
            </div>
            <Footer/>
            <MainModal show={show} title={title} body={body} movie={movie} rating={rating} runningTime={runningTime}
                       director={director} producer={producer} poster={poster} audienceScore={audienceScore}
                       tomatoLink={tomatoLink} tomatoScore={tomatoScore}
                       handleClose={handleClose}
                       handleShow={handleShow}/>
        </div>
    );
}

export default App;

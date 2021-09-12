import MainNavigation from "./components/MainNavigation/MainNavigation";
import Footer from "./components/Footer/Footer";
import './App.css';
import background from "./components/FirstFold/img/background-img.png";
import FirstFold from "./components/FirstFold/FirstFold";
import SecondFold from "./components/SecondFold/SecondFold";
import MainModal from "./components/MainModal/MainModal";
import React, {useState} from "react";


const style = {
    backgroundColor: `rgba(25, 25, 25, .7)`,
    backgroundImage: `url(${background})`,
    backgroundPosition: `center center`,
    backgroundSize: `cover`,
    backgroundBlendMode: `overlay`,
    minHeight: `100vh`,
    marginBottom: `60px`,
}


function App() {

    const [show, setShow] = useState(true);
    const [title, setTitle] = useState("Under Development")
    const [body, setBody] = useState("<h4>We just started building this thing!</h4><p>For now the best place to find showtime and information about the century theater is on our Facebook page. <a href=\"https://www.facebook.com/TheCenturyTheater\">Click Here To Visit Us On Facebook</a></p><p>The best way to contact us is by Facebook Messenger.</p>")
    const [movie, setMovie] = useState(false)
    const [rating, setRating] = useState(null)
    const [runningTime, setRunningTime] = useState(null)
    const [director, setDirector] = useState(null)
    const [producer, setProducer] = useState(null)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)
    const handleRating = (rating) => setRating(rating)
    const handleRunningTime = (runningTime) => setRunningTime(runningTime)
    const handleDirector = (director) => setDirector(director)
    const handleProducer = (producer) => setProducer(producer)
    const setModalTitle = (title) => setTitle(title)
    const setIsMovie = (isMovie) => setMovie(isMovie)


    return (
        <div className="topLevelDiv">
            <MainNavigation/>
            <div className="mainContainer" style={style}>
                <FirstFold/>
                <SecondFold
                    handleShow={handleShow} setModalTitle={setModalTitle} setIsMovie={setIsMovie} director={director}
                    producer={producer} handleRating={handleRating} handleRunningTime={handleRunningTime}
                    handleDirector={handleDirector} handleProducer={handleProducer}
                />
            </div>
            <Footer/>
            <MainModal show={show} title={title} body={body} movie={movie} rating={rating} runningTime={runningTime} director={director} producer={producer}
                       handleClose={handleClose}
                       handleShow={handleShow}/>
        </div>
    );
}

export default App;

import MainNavigation from "./components/MainNavigation/MainNavigation";
import Footer from "./components/Footer/Footer";
import './App.css';
import background from "./components/FirstFold/img/background-img.png";
import FirstFold from "./components/FirstFold/FirstFold";
import SecondFold from "./components/SecondFold/SecondFold";
import MainModal from "./components/MainModal/MainModal";

const style = { backgroundColor: `rgba(25, 25, 25, .7)`, backgroundImage: `url(${background})`, backgroundPosition:`center center`, backgroundSize: `cover`, backgroundBlendMode: `overlay`, minHeight:`100vh`, marginBottom: `60px`, }


function App() {
  return (
    <div className="topLevelDiv">
        <MainNavigation />
        <div className="mainContainer" style={style}>
            <FirstFold />
            <SecondFold />
        </div>
        <Footer />
        <MainModal />
    </div>
  );
}

export default App;

import MainNavigation from "./components/MainNavigation/MainNavigation";
import Footer from "./components/Footer/Footer";
import './App.css';
import background from "./components/FirstFold/img/background-img.png";
import FirstFold from "./components/FirstFold/FirstFold";
import UnderDevModal from "./components/TempComponents/UnderDevModal";
import SecondFold from "./components/SecondFold/SecondFold";

function App() {
  return (
    <div className="topLevelDiv">
        <MainNavigation />
        <div className="mainContainer" style={{ backgroundColor: `rgba(25, 25, 25, .7)`, backgroundImage: `url(${background})`, backgroundPosition:`center center`, backgroundSize: `cover`, backgroundBlendMode: `overlay`, minHeight:`100vh`, marginBottom: `60px`, }}>
            <FirstFold />
            <SecondFold />
            <UnderDevModal />
        </div>
        <Footer />
    </div>
  );
}

export default App;

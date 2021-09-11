import MainNavigation from "./components/MainNavigation/MainNavigation";
import './bootstrap/css/bootstrap.min.css';
import Footer from "./components/Footer/Footer";
import './App.css';
import background from "./components/FirstFold/img/background-img.png";

function App() {
  return (
    <div className="topLevelDiv">
        <MainNavigation />
        <div className="mainContainer" style={{ backgroundImage: `url(${background})`, minHeight:`100vh`, marginBottom: `60px`, }}>
            TEST
        </div>
        <Footer />
    </div>
  );
}

export default App;

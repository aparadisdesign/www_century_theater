import MainNavigation from "./components/MainNavigation/MainNavigation";
import './bootstrap/css/bootstrap.min.css';
import Footer from "./components/Footer/Footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <MainNavigation />
        <div className="App-header">
            <h1>The Century Theater</h1>
            <h2>Fort Kent, Maine</h2>
            <p>We are in the process of building our site, for now we are posting all our showtime on facebook.</p>
            <p>Facebook messenger is also the best way to contact us.</p>
            <a href="https://www.facebook.com/TheCenturyTheater">Visit us on Facebook!</a>
        </div>
        <Footer />
    </div>
  );
}

export default App;

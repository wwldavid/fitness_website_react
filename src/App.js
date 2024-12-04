import "./App.css";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/Hero/HeroSection";
import Highlights from "./components/Highlights/Highlights";
import Payment from "./components/Payment/Payment";
import Programs from "./components/Programs/Programs";
import Reviews from "./components/Reviews/Reviews";
import SignUp from "./components/SignUp/SignUp";
function App() {
  return (
    <div className="App">
      <HeroSection />
      <Highlights />
      <Programs />
      <Reviews />
      <Payment />
      <SignUp />
      <Footer />
    </div>
  );
}

export default App;

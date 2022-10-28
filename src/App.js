import "./App.css";
import Links from "./components/Links";
import Profile from "./components/Profile";
import Socials from "./components/Socials";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="border-4 h-auto py-10 flex flex-col justify-center items-center">
      <div className="w-full max-w-6xl h-auto">
        <Profile />
        <Links />
        <Socials />
      </div>
      <Footer />
    </div>
  );
}

export default App;

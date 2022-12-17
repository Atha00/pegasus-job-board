import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Jobs from "./components/Jobs";

function App() {
  const bool = true;
  // if (bool === true) {
  //   console.log("bool est true");
  // } else {
  //   console.log("bool est false");
  // }

  bool === true ? console.log("bool est true") : console.log("bool est false");

  return (
    <div className="App">
      <Header />
      <Jobs />
      <Footer />
    </div>
  );
}

export default App;

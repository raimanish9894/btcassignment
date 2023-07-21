import NavBar from "./component/NavBar";
import BtcCard from "./component/BtcCard";
import GraphCard from "./component/GraphCard";
import CardSection from "./component/CardSection";
import "./styles/sf-pro-display.css"
import "./App.css"
import BottomNavbar from "./component/BottomNavbar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <BtcCard />
      <GraphCard />
      <CardSection />
      <BottomNavbar />
    </div>
  );
}

export default App;

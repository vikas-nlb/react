import Header from "./components/Header";
import VikasAmulya from "./assests/vikasAmulya.jpg";
import FamilyDetails from "./components/FamilyDetails";
import ReactDetails from "./components/ReactDetails";
import "./App.css";

function App() {
  
  return (
    <>
      <Header title="Vikas" place="Bangalore" image={VikasAmulya} />
      <FamilyDetails />
      <ReactDetails />
    </>
  );
}

export default App;

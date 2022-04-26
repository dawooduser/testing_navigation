import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/examII" element={<ExampleII />} />
          <Route path="/examI" element={<ExampleI />} />
        </Routes>
      </Router>
    </div>
  );
}
function Home() {
  let navigate = useNavigate();
  return (
    <div>
      <h1>home</h1>
      <br />
      <h6 onClick={() => navigate("/examI")}>to go exampleI</h6>
      <br />
      <h6 onClick={() => navigate("/examII")}>to go exampleI</h6>
    </div>
  );
}
function ExampleII() {
  let navigate = useNavigate();
  return (
    <div>
      <h1>ExampleII</h1>
      <br />
      <h6 onClick={() => navigate("/")}>back</h6>
    </div>
  );
}
function ExampleI() {
  let navigate = useNavigate();
  return (
    <div>
      <h1>ExampleI</h1>
      <br />
      <h6 onClick={() => navigate("/")}>back</h6>
      <h3>asdas</h3>
    </div>
  );
}

export default App;

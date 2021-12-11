import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";
import AppRouter from "./AppRouter";

function App() {
  return (
    <div className="app">
      <AppRouter />
    </div>
  );
}

export default App;

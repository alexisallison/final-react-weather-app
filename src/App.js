import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project is created by{" "}
          <a href="https://silver-lokum-739c2e.netlify.app/">Alexis Allison</a>{" "}
          and is{" "}
          <a href="https://github.com/alexisallison/final-react-weather-app.git">
            Open-Sourced
          </a>
        </footer>
      </div>
    </div>
  );
}

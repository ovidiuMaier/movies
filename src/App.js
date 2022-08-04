import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieIndex  from "./components/MovieIndex";
import MovieDetail  from "./components/MovieDetail";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieIndex />} />
        <Route path="/movie/:movieId" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

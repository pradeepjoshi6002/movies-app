import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Home</h1>}></Route>
        <Route path="/auth" element={<h1>Auth</h1>}></Route>
        <Route path="/rated" element={<h1>Rated Page</h1>}></Route>
      </Routes>
    </Router>
  );
};

export default App;

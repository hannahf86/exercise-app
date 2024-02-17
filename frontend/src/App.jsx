// RRD
import { BrowserRouter, Routes, Route } from "react-router-dom";

// PAGES
import Home from "./Pages/Home";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

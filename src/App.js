import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./Copmponents/ProtectedRoutes";
import MoreAboutSelf from "./Copmponents/MoreAboutSelf";

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Routes>
          <Route path="/" element={<ProtectedRoutes />} />
          <Route path="/about-self" element={<MoreAboutSelf />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

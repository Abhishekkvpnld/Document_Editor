import "./app.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home/Home";
import NoPage from "./pages/No Page/NoPage";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
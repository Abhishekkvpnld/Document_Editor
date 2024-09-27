import "./app.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/home/Home";
import NoPage from "./pages/No Page/NoPage";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import CreateDocs from "./pages/create_docs/CreateDocs";


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="create-docs/:docId" element={<CreateDocs />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Toaster position="top-right" />
      </Router>
    </div>
  )
}

export default App;
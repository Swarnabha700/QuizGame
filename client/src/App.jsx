import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import QuizPage from "./pages/QuizPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quizpage" element={<QuizPage />} />
      </Routes>
      <Footer/>
    </Router>

    </>
  )
}

export default App

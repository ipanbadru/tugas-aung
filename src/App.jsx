import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Pahlawan from "./pages/Pahlawan";
import Materi from "./pages/Materi";
import Materi1 from "./pages/Materi1";
import Materi2 from "./pages/Materi2";
import Materi3 from "./pages/Materi3";
import Materi4 from "./pages/Materi4";
import Quiz from "./pages/Quiz";
import ResultQuiz from "./pages/ResultQuiz";
import About from "./pages/about";

export default function App() {
  return (
    <div className="bg-secondary min-h-screen antialiased font-poppins">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pahlawan" element={<Pahlawan />} />
          <Route path="/materi" element={<Materi />} />
          <Route path="/materi-1" element={<Materi1 />} />
          <Route path="/materi-2" element={<Materi2 />} />
          <Route path="/materi-3" element={<Materi3 />} />
          <Route path="/materi-4" element={<Materi4 />} />
          <Route path="/quiz/:order" element={<Quiz />} />
          <Route path="/result-quiz" element={<ResultQuiz />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

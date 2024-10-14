import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";

export default function App() {
  return (
    <div className="bg-secondary min-h-screen antialiased font-poppins">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

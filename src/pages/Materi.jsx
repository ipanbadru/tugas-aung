import { Link } from "react-router-dom";
import pkkiImg from "../assets/images/pkki.png";
import Navbar from "../components/Navbar";

export default function Materi() {
  return (
    <>
    <Navbar />
    <div className="flex h-full">
      <aside className="h-screen hidden md:flex w-[40%] bg-gradient-to-b from-primary via-primary to-dark items-center justify-center relative">
        <h3 className="text-white text-3xl absolute top-16 left-0 right-0 text-center px-4 font-bold">
          Pembahasan Materi G30S PKI
        </h3>
        <img src={pkkiImg} alt="PKKI image" />
      </aside>
      <div className="w-full">
        <div className="max-w-screen-sm px-4 md:px-0 mx-auto mt-14 text-lg md:text-2xl space-y-6 gap-x-10 grid grid-cols-2">
            <ButtonPart to="/materi-1" text="Part 1" />
            <p className="font-bold place-content-center">Mengenal Sejarah G30S PKI</p>
            <p className="font-bold place-content-center">Sejarah Singkat G30S PKI</p>
            <ButtonPart to="/materi-2" text="Part 2" />
            <ButtonPart to="/materi-3" text="Part 3" />
            <p className="font-bold place-content-center">Pejabat Tinggi Yang Menjadi Korban</p>
            <p className="font-bold place-content-center">Pasca G30S PKI</p>
            <ButtonPart to="/materi-4" text="Part 4" />
        </div>
      </div>
    </div>
    </>
  );
}

function ButtonPart({ to, text, children }) {
  return (
    <Link
      to={to}
      className="bg-primary text-white w-full text-center py-5 md:py-10 rounded-2xl font-bold text-xl md:text-2xl uppercase hover:bg-red-900 transition duration-200"
    >
      {text ? text : children}
    </Link>
  );
}

import Navbar from "../components/Navbar";
import img1 from "../assets/images/rvn.png";

export default function about() {
  return (
    <>
      <Navbar />
      <div className="container pb-5">
        <div className="max-w-3xl mx-auto">
            <h2 className="my-5 text-center text-lg font-semibold block md:hidden">Kenapa Memilih Materi Ini?</h2>
          <div className="w-full px-10 py-6 border-4 rounded-xl border-primary font-medium text-lg text-center relative md:mt-10">
            <h2 className="absolute left-1/2 -translate-x-1/2 -top-4 bg-secondary px-4 hidden md:block">Kenapa Memilih Materi Ini?</h2>
          Materi ini dapat digunakan untuk menanamkan nilai-nilai kebangsaan, toleransi, dan pentingnya menjaga Pancasila sebagai ideologi negara.
          </div>
        </div>
      </div>
    </>
  );
}

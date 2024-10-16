import Navbar from "../components/Navbar";
import bgMateri from "../assets/images/bg-materi.jpg";
import LinkPrimary from "../components/LinkPrimary";

export default function Materi3() {
  return (
    <div className="relative z-10 min-h-screen pb-5">
      <img
        src={bgMateri}
        alt=""
        className="absolute -z-10 inset-0 object-cover object-center w-full h-full"
      />
      <div>
        <Navbar />
        <div className="container">
          <div className="bg-primary rounded-2xl text-white leading-6 px-7 py-4 mt-5 space-y-4 font-medium max-w-3xl mx-auto text-justify">
            <h3 className="font-bold text-center text-2xl uppercase">
              Pejabat Tinggi Yang Menjadi Korban
            </h3>
            <p>
              Berikut ini adalah keenam perwira tinggi TNI Angkatan Darat yang
              menjadi korban meninggal dunia dalam tragedi G30S/PKI.
              <ul>
                <li>- Letnan Jenderal Anumerta Ahmad Yani</li>
                <li>- Mayor Jendral Raden Soeprapto</li>
                <li>- Mayor Jenderal Mas Tirtodarmo Haryono</li>
                <li>- Mayor Jenderal Siswondo Parman</li>
                <li>- Brigadir Jenderal Donald Isaac Panjaitan</li>
                <li>- Brigadir Jenderal Sutoyo Siswomiharjo</li>
              </ul>
            </p>
            <p>
              Sedangkan Panglima TNI yaitu AH Nasution yang menjadi sasaran
              utama berhasil kabur dan meloloskan diri. Namun, putri dari AH
              Nasution yang bernama Ade Irma Nasution meninggal dunia karena
              tertembak. Ia tewas bersama ajudannya yang bernama Lettu Pierre
              Andreas Tendean yang diculik dan ditembak di Lubang Buaya. Keenam
              jenderal yang sudah disebutkan di atas dan juga Lettu Pierre
              Tendean kini ditetapkan sebagai Pahlawan Revolusi. Sejak
              diresmikannya UU Nomor 20 tahun 2009, gelar tersebut sudah diakui
              sebagai Pahlawan Nasional.
            </p>
          </div>
          <div className="flex justify-center mt-5">
            <LinkPrimary to="/materi-4" className="!text-xl !px-10">
              NEXT
            </LinkPrimary>
          </div>
        </div>
      </div>
    </div>
  );
}

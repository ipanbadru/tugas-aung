import Navbar from "../components/Navbar";
import bgMateri from "../assets/images/bg-materi.jpg";
import LinkPrimary from "../components/LinkPrimary";

export default function Materi2() {
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
              Sejarah Singkat G30S PKI
            </h3>
            <p>
              G30S PKI adalah sebuah gerakan yang memiliki tujuan untuk
              menggulingkan pemerintahan Presiden Soekarno serta mengubah
              Indonesia menjadi negara yang menerapkan sistem komunis. Gerakan
              tersebut dipimpin langsung oleh DN Aidit yang saat itu adalah
              ketua dari PKI atau Partai Komunis Indonesia. Pada tanggal 1
              Oktober 1965 dini hari, Letkol Untung yang merupakan anggota dari
              Pasukan Pengawal Istana atau seringkali disebut Cakrabirawa,
              memimpin pasukan yang dianggap setia atau loyal kepada PKI.
            </p>
            <p>
              Gerakan tersebut mengincar Perwira Tinggi TNI AD Indonesia. Mereka
              menangkap enam orang dari anggota perwira tersebut. Namun 3 orang
              diantaranya langsung dibunuh di rumahnya. Sementara yang lainnya
              dibawa paksa menuju Lubanh Buaya. Semua jenazah perwira TNI AD
              ditemukan selang beberapa hari kemudian.
            </p>
          </div>
          <div className="flex justify-center mt-5">
            <LinkPrimary to="/materi-3" className="!text-xl !px-10">
              NEXT
            </LinkPrimary>
          </div>
        </div>
      </div>
    </div>
  );
}

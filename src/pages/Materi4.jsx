import Navbar from "../components/Navbar";
import bgMateri from "../assets/images/bg-materi.jpg";
import LinkPrimary from "../components/LinkPrimary";

export default function Materi4() {
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
              Pasca G30S/PKI
            </h3>
            <p>
              Setelah terjadinya tragedi G30S/PKI, Soekarno kemudian
              memerintahkan Mayor Jenderal Soeharto untuk menghilangkan dan
              membersihkan semua unsur pemerintahan dari pengaruh Partai Komunis
              Indonesia. Hal tersebut dilakukan atas desakan warga Indonesia
              karena menganggap peristiwa tersebut sudah memberikan luka
              mendalam bagi merek. Setelah diperintah Soekarno, Soeharto
              langsung bergerak dengan sigap. Setelah itu, PKI dinyatakan
              sebagai penggerak dari adanya kudeta dan kemudian pada dalang
              dibelakangnya diburu dan ditangkap. Termasuk juga DN Aidit yang
              sempat lari dan kabur ke Jawa Tengah. Namun kemudian Ia berhasil
              ditangkap.
            </p>
            <p>
              Selain itu, anggota organisasi lain yang dianggap sebagai
              simpatisan atau yang berkaitan dengan PKI juga ditangkap.
              Organisasi tersebut antara lain CGMI, Lekra, Pemuda Rakyat,
              Gerakan Wanita Indonesia, Barisan Tani Indonesia, dan lainnya.
              Berbagai macam kelompok masyarakat juga ikut menghancurkan markas
              PKi yang berada di berbagai daerah. Mereka juga menyerang berbagai
              lembaga, kantor, toko, dan juga universitas yang dianggap
              berkaitan dengan PKI.
            </p>
            <p>
              Di akhir tahun 1965, diperkirakan ada sekitar 500 ribu sampai satu
              juta angoya serta pendukung PKI yang diduga menjadi korban
              pembunuhan. Sementara ratusan ribu lainnya diasingkan di dalam
              kamp konsentrasi.
            </p>
          </div>
          <div className="flex justify-center mt-5">
            <LinkPrimary to="/quiz/1" className="!text-xl !px-10">
              Quiz
            </LinkPrimary>
          </div>
        </div>
      </div>
    </div>
  );
}

import Navbar from "../components/Navbar";
import bgMateri from "../assets/images/bg-materi.jpg";
import LinkPrimary from "../components/LinkPrimary";

export default function Materi1() {
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
            <h3 className="font-bold text-center text-2xl">
              MENGENAL SEJARAH G30S PKI
            </h3>
            <p>
              Bisa dikatakan bahwa G30S/PKI atau Gerakan 30 September 1965/PKI
              adalah suatu pengkhianatan yang paling besar yang terjadi pada
              bangsa Indonesia. Peristiwa tersebut terjadi di malam hari,
              tepatnya pada pada pergantian dari tanggal 30 September atau
              tanggal 1 Oktober. Tragedi ini melibatkan Pasukan Cakrabirawa dan
              juga Partai Komunis Indonesia atau PKI.
            </p>
            <p>
              Gerakan ini memiliki tujuan untuk menggulingkan pemerintahan
              Presiden Soekarno. Tak hanya itu, mereka juga menginginkan
              pemerintah Indonesia berubah menjadipemerintahan komunis. G30S/PKI
              dipimpin langsung oleh ketuanya pada saat itu yang bernama Dipa
              Aidit. Ketua gerakan ini sangat gencar memberikan hasutan kepada
              seluruh warga Indonesia agar mendukung PKI. Mereka memberikan
              iming-iming bahwa Indonesia akan lebih maju dan sentosa jika
              dibawah kekuasaan PKI.
            </p>
            <p>
              D. N. Aidit sebagai tokoh sentral dari gerakan PKI, menurut pakar
              sejarah yang ada di masa r ezim Presiden Soeharto, adalah dalang
              utama dari adanya gerakan 30 September 1995/PKI. Dalam melakukan
              makarnya, gerakan ini dilaksanakan atas satu komando yang dipimpin
              langsung oleh Komandan Batalyon I Tjakrabirawa, yaitu Letnan
              Kolonel Untung Syamsuri.
            </p>
          </div>
          <div className="flex justify-center mt-5">
            <LinkPrimary to="/materi-2" className="!text-xl !px-10">
              NEXT
            </LinkPrimary>
          </div>
        </div>
      </div>
    </div>
  );
}

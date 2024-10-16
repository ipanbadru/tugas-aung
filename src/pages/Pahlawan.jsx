import Navbar from "../components/Navbar";
import CardPahlawan from "../components/CardPahlawan";
import img1 from "../assets/images/ahmad-yani.jpg";
import img2 from "../assets/images/letjen-suprapto.jpg";
import img3 from "../assets/images/sutoyo.jpg";
import img4 from "../assets/images/parman.jpg";
import img5 from "../assets/images/haryono.jpg";
import img6 from "../assets/images/mayjen.jpg";
import img7 from "../assets/images/pierre.jpg";
import LinkPrimary from "../components/LinkPrimary";
import { FaArrowRight } from "react-icons/fa6";

export default function Pahlawan() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="text-center text-5xl my-2 uppercase font-bold">
          Foto Foto Pahlawan G30S PKI
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8 justify-center">
          <CardPahlawan name="Jendral Ahmad Yani" img={img1}>
            Ahmad Yani adalah seorang petinggi TNI AD di masa Orde Lama. Ia
            lahir di Jenar, Purworejo, pada 19 Juni 1922.
          </CardPahlawan>
          <CardPahlawan name="Letjen Suprapto" img={img2}>
            Suprapto lahir di Purwokerto pada 20 Juni 1920, dan ia sempat
            mengikuti pendidikan di Akademi Militer Kerajaan Bandung. Tetapi,
            harus terhenti karena pendaratan Jepang di Indonesia.
          </CardPahlawan>
          <CardPahlawan name="Mayjen Sutoyo Siswomiharjo" img={img3}>
            Suprapto lahir di Purwokerto pada 20 Juni 1920, dan ia sempat
            mengikuti pendidikan di Akademi Militer Kerajaan Bandung. Tetapi,
            harus terhenti karena pendaratan Jepang di Indonesia.
          </CardPahlawan>
          <CardPahlawan name="Letjen S. Parman" img={img4}>
            Siswondo Parman atau yang lebih dikenal dengan S.Parman adalah satu
            di antara petinggi TNIAD di masa Orde Lama. Ia dilahirkan di
            Wonosobo, Jawa Tengah, pada 4 Agustus 1918.
          </CardPahlawan>
          <CardPahlawan name="Letjen M.T. Haryono" img={img5}>
            Haryono lahir pada 20 Januari 1924 di Surabaya, Jawa Timur. Sebelum
            terjun ke dunia militer, ia pernah mengikuti Ika Dai Gaku (sekolah
            kedokteran) di Jakarta.
          </CardPahlawan>
          <CardPahlawan name="Mayjen D. I. Panjaitan" img={img6}>
            Donald Ignatius Panjaitan atau D. I. Panjaitan lahir pada 9 Juni
            1925 di Balige, Tapanuli. Pada masa pendudukan Jepang, ia memasuki
            pendidikan militer Gyugun.
          </CardPahlawan>
          <CardPahlawan name="Kapten Pierre Tendean" className={'lg:col-start-2'} img={img7}>
            Piere Tendean lahir 21 Februari 1939 di Jakarta. Selesai mengikuti
            pendidikan di Akademi Militer Jurusan Teknik tahun 1962.
          </CardPahlawan>
        </div>
        <div className="flex justify-end py-4">
        <LinkPrimary to={'/materi'} className={'inline-flex items-center gap-2'}>Materi <FaArrowRight /></LinkPrimary>
        </div>
      </div>
    </>
  );
}

export default function Navbar() {
  return (
    <nav className="py-6">
      <div className="container flex justify-between items-center">
        <h1 className="font-bold text-3xl">Education.</h1>
        <ul className="flex space-x-5 uppercase font-bold">
          <li>Beranda</li>
          <li>Materi</li>
          <li>Quiz Interaktive</li>
        </ul>
        <a href="" className="py-0.5 px-1 rounded-sm bg-primary text-white">
          Tentang Kami
        </a>
      </div>
    </nav>
  );
}

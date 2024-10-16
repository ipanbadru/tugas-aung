import LinkPrimary from "../LinkPrimary";
import heroImg from "../../assets/images/hero-img.png";

function Hero() {
  return (
    <div className="container">
      <div className="flex flex-col-reverse md:flex-row justify-between content-center gap-5 mt-7">
        <div className="flex justify-center items-start flex-col md:w-2/3 gap-3 md:gap-5 md:pr-28">
          <div className="hero-text flex text-3xl md:text-5xl lg:text-7xl font-bold justify-center items-center">
            <h1>MENGENAL SEJARAH G30S PKI</h1>
          </div>
          <div className="hero-desc text-justify md:text-left">
            Gerakan 30 September (G30S/PKI) adalah peristiwa penting dalam
            sejarah Indonesia yang terjadi pada malam 30 September hingga 1
            Oktober 1965.
          </div>
          <LinkPrimary to={"/pahlawan"}>Foto Pahlawan</LinkPrimary>
        </div>
        <div className="hero-image md:w-1/2 flex items-center justify-center">
          <img
            src={heroImg}
            alt="hero"
            className="w-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;

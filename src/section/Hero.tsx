import { Link } from "react-scroll";
import StatInCard from "../components/StatInCard";
import { ABOUT_ME, STATS } from "../utils/Data";
import { hero } from "../utils/ImageImports";

function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto px-5 py-10 md:py-20 lg:mt-10 max-w-[1440px]"
    >
      <div className="flex flex-col lg:flex-row gap-2 lg:gap-14 items-center justify-between">
        <div className="order-2 lg:order-1 text-center lg:text-left mt-16 lg:mt-0">
          <h3 className="text-xl lg:text-2xl font-medium text-secondaryy-100 ">
            👋🏻 Halo, Saya Abid
          </h3>
          <h1 className="w-full lg:w-[480px] text-4xl lg:text-5xl font-bold leading-[50px] lg:leading-[60px] mt-3 text-primaryy-100 bg-clip-text">
            Selamat Datang di Portofolio Saya!
          </h1>
          <p className="w-full lg:w-[500px] text-sm lg:text-base mt-4 text-primaryy-300">
            Saya adalah seorang pengembang web dengan pengalaman lebih dari 2
            tahun yang memiliki keahlian dalam pengembangan front-end, desain
            responsif, serta meningkatkan performa website dengan SEO.
          </p>
          <div className="flex gap-4 mt-4">
            {ABOUT_ME.sosialLinks.map((item) => (
              <a
                key={item.id}
                href={item.link}
                className="text-primary hover:text-secondaryy-400 transition duration-300 group"
              >
                <item.icon className="text-2xl text-quaternary-300 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:translate-y-[-2px] group-hover:text-secondaryy-400" />
              </a>
            ))}
          </div>
          <div className="flex justify-center lg:justify-start gap-4 md:gap-8 mt-8">
            <Link
              activeClass="active"
              to="projects"
              smooth
              spy
              offset={-100}
              className=""
            >
              <button className="flex-1 md:flex-none action-btn-outline btn-scale-anim">
                Lihat Pekerjaan Saya
              </button>
            </Link>
            <a
              href="https://api.whatsapp.com/send/?phone=6283841852915&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex-1 md:flex-none action-btn btn-scale-anim">
                Kontak Saya
              </button>
            </a>
          </div>
        </div>
        <div className="lg:order-2 order-1">
          <img
            src={hero}
            alt="hero"
            className="w-full h-[350px] md:h-[500px] object-cover"
          />
        </div>
      </div>
      <div className="flex gap-[12px] mt-16 md:mt-24 flex-wrap justify-center">
        {STATS.map((item) => (
          <StatInCard key={item.id} count={item.count} label={item.label} />
        ))}
      </div>
    </section>
  );
}

export default Hero;

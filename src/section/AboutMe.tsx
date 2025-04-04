import { ABOUT_ME } from "../utils/Data";
import img from "../assets/react.svg";
function AboutMe() {
  return (
    <section id="about" className="container px-8 py-16 mx-auto">
      <h4 className="block lg:hidden w-[200px] section-title text-left mb-16">
        About
      </h4>
      <div className="flex flex-col lg:flex-row gap-16 items-start justify-between max-w-[1220px] mx-auto">
        <div className="w-[300px] md:w-[370px]">
          <img src={img} alt="" />
        </div>
        <div className="flex-1">
          <h4 className="hidden lg:block w-[200px] section-title text-left">
            About
          </h4>
          <p className="text-sm text-justify leading-6 whitespace-pre-line mt-4">
            {ABOUT_ME.content}
          </p>
          <div className="flex gap-4 mt-6">
            {ABOUT_ME.sosialLinks.map((item) => (
              <a
                key={item.id}
                href={item.link}
                className="text-primary hover:text-secondary transition duration-300 group"
              >
                <item.icon className="text-2xl text-secondary transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:translate-y-[-2px] group-hover:text-primary" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;

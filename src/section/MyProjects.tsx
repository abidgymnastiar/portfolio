import useEmblaCarousel from "embla-carousel-react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useCallback, useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { PROJECTS } from "../utils/Data";

function MyProjects() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const updateScrollButton = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", updateScrollButton);
    // updateScrollButtons();
  }, [emblaApi, updateScrollButton]);

  return (
    <div id="projects" className="mt-14">
      <div className="container mx-auto px-8 md:px-10 py-10">
        <div className="w-full lg:w-[60vw] mx-auto">
          <h4 className="section-title">Projek Terbaru</h4>

          <p className="text-sm text-center mt-4 leading-6 text-primaryy-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            nostrum impedit quibusdam dolorem! Ipsa est iusto cumque vel! Minus
            ad voluptas id amet perspiciatis corrupti repellendus recusandae
            quibusdam hic dolorum. Labore deserunt obcaecati dolorem praesentium
            mollitia eos blanditiis perspiciatis, incidunt rerum dolor vitae
            maxime
          </p>
        </div>
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex pt-14 pb-8">
              {PROJECTS.map((project) => (
                <div
                  key={project.id}
                  className="min-w-[100%] sm:min-w-[50%] lg:min-w-[33%]"
                >
                  <ProjectCard
                    key={project.id}
                    imgUrl={project.image}
                    title={project.title}
                    tags={project.tags.map((tag) => ({ tags: tag }))}
                  />
                </div>
              ))}
            </div>
          </div>
          <button
            className={`arrow-btn -left-5 ${
              !canScrollPrev ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => emblaApi && emblaApi.scrollPrev()}
            disabled={!canScrollPrev}
          >
            <IoIosArrowBack />
          </button>
          <button
            className={`arrow-btn -right-5 ${
              !canScrollNext ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => emblaApi && emblaApi.scrollNext()}
            disabled={!canScrollNext}
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
}
export default MyProjects;

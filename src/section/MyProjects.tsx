// import { motion } from "motion/react";
import useEmblaCarousel from "embla-carousel-react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useCallback, useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { PROJECTS } from "../utils/Data";
import DetailProject from "../components/Modal/DetailProject";

function MyProjects() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [open, setOpen] = useState<boolean>(false);

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
      <div className="w-full max-w-[1440px] mx-auto px-8 md:px-10 py-10">
        <div className="w-full lg:w-[60vw] mx-auto">
          <h4 className="section-title">Projek Terbaru</h4>

          <p className="text-sm text-center mt-4 leading-6 text-primaryy-300">
            Projek-projek terbaru yang saya kerjakan berfokus pada pembuatan
            antarmuka web yang cepat, adaptif, dan mudah digunakan. Setiap
            proyek dirancang dengan pendekatan visual yang bersih serta struktur
            kode yang efisien, memastikan performa optimal di berbagai
            perangkat. Saya juga terbiasa membangun halaman yang dapat
            dikustomisasi dengan mudah oleh pengguna, serta mengintegrasikan
            berbagai layanan eksternal sesuai kebutuhan klien. Lewat pengalaman
            ini, saya terus mengembangkan kemampuan dalam menciptakan solusi
            digital yang relevan dan berdampak nyata.
          </p>
        </div>
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex pt-14 pb-8">
              {PROJECTS.map((project) => (
                <button
                  key={project.id}
                  className="min-w-[100%] sm:min-w-[50%] lg:min-w-[33%]"
                  onClick={() => setOpen(true)}
                >
                  {/* <motion.button className="min-w-full sm:min-w-1/2 lg:min-w-1/3"> */}
                  <ProjectCard
                    key={project.id}
                    imgUrl={project.image}
                    title={project.title}
                    tags={project.tags.map((tag) => ({ tags: tag }))}
                  />
                  {/* </motion.button> */}
                </button>
              ))}
            </div>
            <DetailProject open={open} onClose={()=>setOpen(false)}/>
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

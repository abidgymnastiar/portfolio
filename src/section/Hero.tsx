const Hero = () => {
  return (
    <section id="hero" className="container mx-auto px-8">
      <div className="flex flex-col lg:flex-row gap-14 items-center justify-between mt-[80px]">
        <div className="order-2 lg:order-1 text-center lg:text-left mt-16 lg:mt-0">
          <h3 className="text-xl lg:text-2xl font-medium text-black ">
            👋🏻 Halo, Saya Abid
          </h3>
          <h1 className="w-full lg:w-[480px] text-4xl lg:text-5xl font-bold leading-[50px] lg:leading-[60px] mt-3 bg-gradient-primary bg-clip-text text-transparent">
            Selamat Datang di Portofolio Saya!
          </h1>
          <p className="w-full lg:w-[500px] text-sm lg:text-base mt-4">
            Saya adalah seorang pengembang web dengan pengalaman lebih dari 2
            tahun yang memiliki keahlian dalam pengembangan front-end, desain
            responsif, serta meningkatkan performa website dengan SEO.
          </p>

          <div className="flex justify-center lg:justify-start gap-4 md:gap-8 mt-6">
            <button className="flex-1 md:flex-none action-btn-outline btn-scale-anim">
              Lihat Pekerjaan Saya
            </button>
            <button className="flex-1 md:flex-none action-btn btn-scale-anim">
              Kontak Saya
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

const YOUTUBE_VIDEO_ID = "N7WwGjPxTcI"; // Replace with your actual Slingshot video ID, e.g. "Time to Take Control"

export function EngineeringVideoSection() {
  return (
    <section className="bg-[#0d0c0c] text-white py-20 md:py-28 lg:py-32 relative overflow-hidden">
      {/* Background ambient lighting/glow to make the section look premium */}
      <div
        className="absolute bottom-0 left-0 w-[45vw] h-[45vw] max-w-[600px] bg-gradient-radial from-orange-500/5 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 right-12 w-[35vw] h-[35vw] max-w-[500px] bg-gradient-radial from-neutral-800/10 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 max-w-[1280px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-10 md:mb-16">

          {/* Left Column: Heading */}
          <div className="lg:col-span-7">
            <h2 className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[48px] leading-[56px] tracking-[-0.96px] text-white animate-fade-up">
              How a Mimic is <br className="hidden sm:inline" /> Engineered
            </h2>
          </div>

          {/* Right Column: Description & Tags */}
          <div className="lg:col-span-5 flex flex-col items-start lg:items-end gap-5 lg:text-left">
            <p className="text-[#C6C3C0] font-sans text-sm leading-[24px] max-w-[440px] animate-fade-up-delay-1">
              See the full manufacturing process, from polymer core to calibrated,
              shelf-stable cell control in under three minutes.
            </p>

            {/* Tags/Badges */}
            <div className="flex flex-wrap items-center gap-2.5 animate-fade-up-delay-2">

              {/* Play Badge */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/5 text-white/40 text-xs font-semibold uppercase tracking-wider leading-none transition-colors hover:border-white/20 hover:bg-white/10">
                <svg className="w-3.5 h-3.5 fill-current text-white/40" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                ~3 min
              </div>

              {/* Tag 2 */}
              <div className="px-3.5 py-2 rounded-full bg-white/5 text-white/40 text-xs font-semibold uppercase tracking-[0.23px] leading-[16px] transition-colors hover:border-white/20 hover:bg-white/10">
                Manufacturing process
              </div>

              {/* Tag 3 */}
              <div className="px-3.5 py-2 rounded-full bg-white/5 text-white/40 text-xs font-semibold uppercase tracking-[0.23px] leading-[16px] transition-colors hover:border-white/20 hover:bg-white/10">
                ISO 9001:2015
              </div>

            </div>
          </div>

        </div>

        {/* Video Player Embed Card */}
        <div className="w-full aspect-video rounded-2xl md:rounded-[24px] overflow-hidden border border-white/10 bg-black shadow-[0_25px_50px_-12px_rgba(0,0,0,0.65)] relative group transition-transform duration-300 hover:scale-[1.003] animate-fade-up-delay-2">

          {/* YouTube Video Iframe */}
          <iframe
            src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=0&rel=0&showinfo=0&controls=1`}
            title="Time to Take Control - Slingshot Biosciences Video Demonstration"
            className="w-full h-full object-cover relative z-10 border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />

          {/* Subtle overlay border for high fidelity premium finish */}
          <div className="absolute inset-0 border border-white/10 rounded-2xl md:rounded-[24px] pointer-events-none z-20" />
        </div>

      </div>
    </section>
  );
}

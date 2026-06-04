export default function ProductCapabilities() {
  return (
    <section className="relative w-full bg-[#F6F5F3] py-12 xl:py-[72px] xl:h-[699px] flex items-center justify-center">
      <div className="frame flex flex-col xl:flex-row justify-between items-start gap-12 xl:gap-[103px] xl:h-[525px]">
        <div className="w-full xl:w-[470px] xl:h-[279px] flex flex-col gap-[15px] shrink-0">
          <div className="flex flex-row items-center gap-[10px]">
            <div className="w-[20px] h-[1.5px] bg-[#F76A00] rounded-[2px]" />
            <span className="font-sans font-medium text-[12px] leading-[16px] tracking-[1.4px] uppercase text-[#F76A00]">
              Product Capabilities
            </span>
          </div>
          <div className="w-full xl:w-[470px] xl:h-[248px] flex flex-col gap-[20px]">
            <h2 className="text-[#000000] font-heading font-semibold text-[32px] sm:text-[40px] leading-[1.1] sm:leading-[44px] tracking-[-0.96px] xl:h-[132px] flex items-center">
              Customizable Controls for Unmatched Precision Across Assays
            </h2>
            <p className="text-[#333130] font-heading font-normal text-[16px] leading-[24px] xl:w-[460px] xl:h-[96px] flex items-center">
              Custom TruCytes™ Biomarker Controls deliver consistency, accuracy, and scalability tailored to your specific research workflow. Each control can be configured across a broad range of parameters.
            </p>
          </div>
        </div>
        <div className="w-full xl:w-[588px] xl:h-[525px] flex flex-col justify-between">
          <div
            className="w-full flex flex-col justify-center items-start border-b border-[#E4E3E0]"
            style={{
              padding: "20px 0px",
              boxSizing: "border-box",
              height: "125px",
            }}
          >
            <div className="flex flex-col gap-[11px] w-full h-[85px]">
              <h3 className="text-[#F76A00] font-heading font-semibold text-[20px] leading-[25px] tracking-[-0.18px] w-full h-[25px] flex items-center">
                Surface Biomarkers
              </h3>
              <p className="text-[#333130] font-sans font-normal text-[16px] leading-[24px] w-full h-[49px] flex items-center">
                Configure single or multiple surface biomarkers for precise antigen detection and quantification.
              </p>
            </div>
          </div>
          <div
            className="w-full flex flex-col justify-center items-start border-b border-[#E4E3E0]"
            style={{
              padding: "20px 0px",
              boxSizing: "border-box",
              height: "125px",
            }}
          >
            <div className="flex flex-col gap-[11px] w-full h-[85px]">
              <h3 className="text-[#F76A00] font-heading font-semibold text-[20px] leading-[25px] tracking-[-0.18px] w-full h-[25px] flex items-center">
                Tailored Fluorescence
              </h3>
              <p className="text-[#333130] font-sans font-normal text-[16px] leading-[24px] w-full h-[49px] flex items-center">
                Achieve highly stable, reproducible signal detection at intensities previously out of reach with biological samples.
              </p>
            </div>
          </div>
          <div
            className="w-full flex flex-col justify-center items-start border-b border-[#E4E3E0]"
            style={{
              padding: "20px 0px",
              boxSizing: "border-box",
              height: "125px",
            }}
          >
            <div className="flex flex-col gap-[11px] w-full h-[85px]">
              <h3 className="text-[#F76A00] font-heading font-semibold text-[20px] leading-[25px] tracking-[-0.18px] w-full h-[25px] flex items-center">
                Viability Compatibility
              </h3>
              <p className="text-[#333130] font-sans font-normal text-[16px] leading-[24px] w-full h-[49px] flex items-center">
                Integrate seamlessly with DNA- and amine-based viability reagents used in standard laboratory protocols.
              </p>
            </div>
          </div>
          <div
            className="w-full flex flex-col justify-center items-start"
            style={{
              padding: "20px 0px",
              boxSizing: "border-box",
              height: "150px",
            }}
          >
            <div className="flex flex-col gap-[11px] w-full h-[110px]">
              <h3 className="text-[#F76A00] font-heading font-semibold text-[20px] leading-[25px] tracking-[-0.18px] w-full h-[25px] flex items-center">
                Extended Stability & Shelf Life
              </h3>
              <p className="text-[#333130] font-sans font-normal text-[16px] leading-[24px] w-full h-[74px] flex items-center">
                Stability is measured in years, not weeks. All Slingshot products are manufactured with non-biohazardous materials for easy storage, handling, and scalability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

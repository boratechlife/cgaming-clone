import Link from "next/link";

const WorksSection = () => {
  return (
    <div
      className="place-content-center items-center flex flex-col gap-[80px] h-min overflow-visible py-[120px] pb-[80px] lg:py-[120px] relative scroll-mt-[40px] w-full md:order-1 md:py-[120px] 2xl:order-1 2xl:py-[120px]"
      data-framer-name="Works"
      id="works"
      style={{
        backgroundImage:
          "linear-gradient(180deg, #0a0e1a 0%, #1a1f2e 100%), radial-gradient(circle at 50% 30%, rgba(255,255,255,0.05) 0%, transparent 100%)",
        backgroundBlendMode: "normal",
        flex: "0 0 auto",
      }}
    >
      <div
        className="place-content-center items-start items-center flex flex-col gap-[24px] h-min max-w-[1400px] overflow-visible lg:p-[0_60px] relative w-full md:max-w-none"
        data-framer-name="Container"
        id="testimonials-b"
        style={{ flex: "0 0 auto" }}
      >
        <div
          className="place-content-center items-start items-center flex flex-row gap-[120px] h-min overflow-visible p-0 relative w-full md:flex-col md:gap-[80px] sm:flex-col sm:gap-[25px]"
          data-framer-name="Row"
          style={{ flex: "0 0 auto" }}
        >
          <div
            className="place-content-start items-start flex flex-col gap-[16px] h-min overflow-visible p-[50px_0] relative w-px md:flex-none md:order-0 md:p-[50px_20px] md:w-full sm:place-content-center sm:items-center sm:flex-none sm:gap-[24px] sm:order-0 sm:w-full"
            data-framer-name="Content"
            style={{ flex: "1 0 0px" }}
          >
            <div
              className="flex-none h-auto relative whitespace-pre-wrap w-full break-words text-[12px] uppercase tracking-[0.1em] text-white/70 text-center"
              data-framer-name="Pre-Heading"
            >
              POWERING THE INDUSTRY
            </div>

            <div
              className="flex-none h-auto relative whitespace-pre-wrap w-full break-words"
              data-framer-name="Heading"
              data-framer-component-type="RichTextContainer"
              style={{ transform: "none", overflowWrap: "break-word" }}
            >
              <h2 className="framer-text m-0 p-0 text-center text-[42px] md:text-[56px] font-bold text-white tracking-tighter">
                Become a Sponsor of the Canadian Game Awards
              </h2>
            </div>

            <div
              className="flex-none h-auto relative whitespace-pre-wrap w-full break-words"
              data-framer-name="Supporting text"
              data-framer-component-type="RichTextContainer"
              style={{
                transform: "none",
                overflowWrap: "break-word",
              }}
            >
              <p className="framer-text m-0 p-0 text-center text-[18px] text-white/70 mx-auto max-w-[80%]">
                Partner with the Canadian Game Awards and help celebrate the
                studios, creators, and communities shaping Canada’s game
                industry.
              </p>
            </div>

            {/* Button Section */}
            <div className="flex flex-col items-center gap-[16px] justify-center pt-4 w-full">
              <Link
                href="https://zfrmz.ca/s0Kel0JkFv5GXo2WpZH3"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-600 transition-all shadow-lg shadow-blue-600/20 uppercase text-sm tracking-wide"
              >
                Request to Sponsor
              </Link>

              {/* Sponsorship Deck Link */}
              <p className="text-[14px] text-white/50">
                View our{" "}
                <a
                  href="https://www.canva.com/design/DAGr1AqrdyM/Bx4Q006CR2uB8LL2L8ok-g/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  sponsorship deck
                </a>{" "}
                or contact us to learn more.
              </p>
            </div>

            <hr className="w-[60%] h-px bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto mt-[48px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksSection;

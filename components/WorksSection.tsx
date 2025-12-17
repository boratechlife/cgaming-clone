const WorksSection = () => {
  return (
    <div
      className="place-content-center items-center flex flex-col gap-[113px] h-min overflow-visible py-20 lg:p-[100px_60px_30px] relative scroll-mt-[40px] w-full md:order-1 md:p-[123px_32px]  2xl:order-1 2xl:p-[170px_20px_40px]"
      data-framer-name="Works"
      id="works"
      style={{
        background:
          'linear-gradient(180deg, #5630bf 0%, rgb(60, 33, 133) 52.702702702702695%, var(--token-975028e3-af0e-4d02-8f85-cde12abbc0e5, rgb(13, 2, 27)) 100%)',
        flex: '0 0 auto',
      }}
    >
      <div
        className="place-content-center items-start items-center flex flex-col gap-[80px] h-min max-w-[1280px] overflow-visible lg:p-[0_60px] relative w-full md:max-w-none"
        data-framer-name="Container"
        id="testimonials-b"
        style={{ flex: '0 0 auto' }}
      >
        <div
          className="place-content-center items-start items-center flex flex-row gap-[120px] h-min overflow-visible p-0 relative w-full md:flex-col md:gap-[80px] sm:flex-col sm:gap-[25px]"
          data-framer-name="Row"
          style={{ flex: '0 0 auto' }}
        >
          <div
            className="place-content-start items-start flex flex-col gap-[11px] h-min overflow-visible p-[50px_0] relative w-px md:flex-none md:order-0 md:p-[50px_20px] md:w-full sm:place-content-center sm:items-center sm:flex-none sm:gap-[24px] sm:order-0 sm:w-full"
            data-framer-name="Content"
            style={{ flex: '1 0 0px' }}
          >
            <div
              className="flex-none h-auto relative whitespace-pre-wrap w-full break-words"
              data-framer-name="Heading"
              data-framer-component-type="RichTextContainer"
              style={{ transform: 'none', overflowWrap: 'break-word' }}
            >
              <h2 className="framer-text m-0 p-0 text-center text-[42px] font-bold text-white">
                Our Partners
              </h2>
            </div>
            <div
              className="flex-none h-auto relative whitespace-pre-wrap w-full break-words"
              data-framer-name="Supporting text"
              data-framer-component-type="RichTextContainer"
              style={{
                transform: 'none',
                overflowWrap: 'break-word',
                '--framer-paragraph-spacing': '30px',
              }}
            >
              <p className="framer-text m-0 p-0 text-center text-[18px] text-[#afafaf] mx-auto max-w-[55%]">
                Meet our incredible partners for this year's celebration of the
                video game industry! Their support helps us spotlight the
                talent, creativity, and innovation that define gaming in Canada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksSection;

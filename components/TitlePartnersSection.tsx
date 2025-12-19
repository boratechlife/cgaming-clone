const TitlePartnerSection = () => {
  return (
    <div className="flex flex-col items-center justify-center flex-none gap-[9px] h-min overflow-hidden w-full relative pb-[73px] md:order-2 sm:pb-0 2xl:order-2 2xl:py-[90px] 2xl:pb-[40px]">
      <div
        className="flex-none h-auto relative whitespace-pre-wrap w-full break-words"
        data-framer-name="Heading"
        data-framer-component-type="RichTextContainer"
        style={{ transform: 'none' }}
      >
        <h2
          className="m-0 p-0 text-center"
          style={{
            fontFamily:
              'var(--framer-font-family, "Satoshi", "Satoshi Placeholder", sans-serif)',
            fontSize: '52px',
            fontWeight: '500',
            letterSpacing: '-1px',
            lineHeight: '1.25em',
            color:
              'var(--token-b1fb3a8e-a88d-40f2-ad39-1f269e6b91e0, rgb(255, 255, 255))',
            textAlign: 'center',
          }}
        >
          Title Partner:
        </h2>
      </div>
      <div className="grid flex-none gap-[26px] grid-cols-1 lg:grid-rows-1 h-min justify-center overflow-hidden w-full relative lg:px-[160px] sm:gap-[46px] sm:p-[30px_40px_50px] 2xl:gap-[98px] 2xl:px-[50px]">
        <div className="place-self-center flex flex-col items-center  flex-none h-[180px] relative w-full md:h-[200px] 2xl:h-[250px]">
          <a
            href="https://www.valnetinc.com/en/"
            target="_blank"
            rel="noopener"
            className="flex items-center justify-center h-[180px] relative no-underline w-full lg:w-[480px]"
            style={{ opacity: 1 }}
          >
            <div className="w-full rounded-inherit inset-0 flex items-center justify-center">
              <img
                decoding="auto"
                width="1080"
                height="481"
                srcSet="/images/O5BKcDiv7AuQwsYNYECqEZKctpY.avif?scale-down-to=512 512w,/images/O5BKcDiv7AuQwsYNYECqEZKctpY.avif?scale-down-to=1024 1024w,/images/O5BKcDiv7AuQwsYNYECqEZKctpY.avif 1080w"
                src="/images/O5BKcDiv7AuQwsYNYECqEZKctpY.avif"
                alt="Valnet logo – Title Partner"
                className="rounded-inherit object-center object-cover"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TitlePartnerSection;

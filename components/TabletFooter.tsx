import React from "react";

const TabletFooter = () => {
  return (
    <div className="order-6 flex-none w-full h-auto relative">
      <footer
        className="flex flex-col items-center"
        style={{
          background:
            "linear-gradient(90deg, rgb(86, 48, 191) 0%, rgb(58, 31, 130) 100%)",
          width: "100%",
          opacity: 1,
          padding: "40px 20px",
        }}
      >
        <div
          className="flex-none flex flex-col items-center w-full max-w-4xl"
          style={{ opacity: 1, gap: "20px" }}
        >
          {/* Logo */}
          <img
            decoding="auto"
            loading="lazy"
            className="object-contain"
            style={{
              width: "194px",
              height: "auto",
              maxWidth: "100%",
            }}
            src="https://framerusercontent.com/images/QpfRERS028JTTMK15ucTYWGXDM.png"
            alt="Canadian Game Awards Logo"
          />

          {/* Text Content */}
          <div
            className="flex flex-col items-center w-full"
            style={{ opacity: 1, gap: "8px" }}
          >
            <div
              className="flex flex-col justify-center items-center"
              style={{
                transform: "none",
                opacity: 1,
              }}
            >
              <h5
                className="text-center"
                style={{
                  fontFamily:
                    '"Helvetica Now Display Medium", "Helvetica Neue", Helvetica, Arial, sans-serif',
                  fontSize: "15px",
                  fontWeight: 500,
                  letterSpacing: "-0.01em",
                  lineHeight: "1.5em",
                  color: "rgb(255, 255, 255)",
                  margin: 0,
                }}
              >
                The Canadian Game Awards © 2025 All Rights Reserved
              </h5>
            </div>

            <div
              className="flex flex-col justify-center items-center"
              style={{
                transform: "none",
                opacity: 1,
              }}
            >
              <h5
                className="text-center"
                style={{
                  fontFamily:
                    '"Helvetica Now Display Medium", "Helvetica Neue", Helvetica, Arial, sans-serif',
                  fontSize: "13px",
                  fontWeight: 500,
                  letterSpacing: "-0.01em",
                  lineHeight: "1.5em",
                  color: "rgba(255, 255, 255, 0.6)",
                  margin: 0,
                }}
              >
                Website by{" "}
                <a
                  href="https://www.ridgeagency.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "rgba(255, 255, 255, 0.6)",
                    textDecoration: "underline",
                  }}
                >
                  RIDGE - Creative Agency (ridgeagency.ca)
                </a>
              </h5>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TabletFooter;

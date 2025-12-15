import React from "react";
import Image from "next/image";

const MobileNav: React.FC = () => {
  return (
    <div className="framer-EOs4P framer-o3r8pe-container w-[90%] top-4 z-10 flex-none h-auto fixed left-1/2 -translate-x-1/2">
      <nav
        className="framer-pcVkC framer-7tjAh framer-sfhI9 framer-1nf6vmk framer-v-cenkd9 will-change-[transform] flex flex-col gap-0 relative overflow-hidden"
        data-framer-name="Phone"
        style={
          {
            "--border-bottom-width": "0px",
            "--border-color": "rgba(0, 0, 0, 0)",
            "--border-left-width": "0px",
            "--border-right-width": "0px",
            "--border-style": "solid",
            "--border-top-width": "0px",
            backdropFilter: "none",
            background:
              "linear-gradient(180deg, rgb(33, 33, 33) 0%, rgba(33, 33, 33, 0.4) 100%)",
            width: "100%",
            borderRadius: "40px",
            opacity: 1,
          } as React.CSSProperties
        }
      >
        <div
          // MODIFIED: Changed layout to flex-row and justify-between.
          // This keeps the logo on the left and the icon group on the right.
          className="framer-g595vi flex-none w-full p-2 30px flex flex-row items-center justify-center"
          data-framer-name="Content"
          style={{
            backgroundColor: "rgb(5, 5, 5)",
            borderRadius: "40px",
            opacity: 1,
          }}
        >
          {/* Logo Group (Left Side) */}
          <div className="framer-mdrfrw flex flex-row items-center justify-start gap-0 w-min h-min p-0 relative overflow-visible">
            <a
              aria-label="brand-name"
              as="a"
              className="framer-1h5he9a framer-tlkek5 aspect-[3.46667] h-[33px] flex-none w-[116px] no-underline relative overflow-visible"
              href="./"
              data-framer-page-link-current="true"
            >
              <div className="framer-background-image-wrapper absolute inset-0 rounded-[inherit]">
                <Image
                  src="https://framerusercontent.com/images/BaSvDfQZfE4UubCPmSB77sRFkY.png?width=2663&height=601"
                  alt=""
                  width={2663}
                  height={601}
                  sizes="136px"
                  srcSet="https://framerusercontent.com/images/BaSvDfQZfE4UubCPmSB77sRFkY.png?scale-down-to=512&width=2663&height=601 512w,https://framerusercontent.com/images/BaSvDfQZfE4UubCPmSB77sRFkY.png?scale-down-to=1024&width=2663&height=601 1024w,https://framerusercontent.com/images/BaSvDfQZfE4UubCPmSB77sRFkY.png?scale-down-to=2048&width=2663&height=601 2048w,https://framerusercontent.com/images/BaSvDfQZfE4UubCPmSB77sRFkY.png?width=2663&height=601 2663w"
                  className="block w-full h-full rounded-[inherit] object-center object-contain"
                />
              </div>
            </a>
          </div>

          {/* Icon Group (Right Side - Hamburger and Search, placed close together) */}
          <div className="framer-ksydnb flex flex-row items-center justify-end gap-3 h-min p-0 relative overflow-visible">
            {/* Hamburger Icon */}
            <div
              className="framer-fo75e0 cursor-pointer flex-none w-[40px] h-[40px] relative overflow-hidden"
              data-framer-name="Icon"
              data-highlight="true"
              tabIndex="0"
              style={{ opacity: 1 }}
            >
              <div
                className="framer-10wwbn3 absolute w-[20px] h-[2px] bg-[rgb(153,153,153)] rounded-[10px]"
                data-framer-name="Bottom"
                style={{
                  top: "calc(62.5% - 1px)",
                  left: "calc(65% - 10px)",
                  transform: "none",
                  opacity: 1,
                  willChange: "transform",
                }}
              ></div>
              <div
                className="framer-lw98hq absolute w-[20px] h-[2px] bg-[rgb(153,153,153)] rounded-[10px]"
                data-framer-name="Top"
                style={{
                  top: "calc(37.5% - 1px)",
                  left: "calc(65% - 10px)",
                  transform: "none",
                  opacity: 1,
                  willChange: "transform",
                }}
              ></div>
            </div>

            {/* Search Icon */}
            <div className="framer-dr7jhm flex flex-row flex-none items-center justify-center gap-3.25 w-min h-min p-0 relative overflow-visible">
              <div className="framer-axo8ll-container cursor-pointer flex-none w-[40px] h-[40px] relative">
                <div className="flex items-center justify-center w-full h-full rounded-[10px] cursor-inherit overflow-hidden">
                  <button
                    aria-label="Search Icon"
                    className="w-full h-full flex items-center justify-center bg-transparent cursor-inherit text-inherit border-none outline-none p-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                      width="24"
                      height="24"
                      className="text-[rgb(69,22,130)]"
                    >
                      <path
                        d="M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MobileNav;

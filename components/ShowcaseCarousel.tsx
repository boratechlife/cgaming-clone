"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ShowcaseCarousel = () => {
  const galleryImages = [
    "/images/carousel/1.IMG_0739_3800x2500.JPG",
    "/images/carousel/2. IMG_0982.JPG",
    "/images/carousel/3. IMG_0720.JPG",
    "/images/carousel/4. IMG_1051.JPG",
    "/images/carousel/5. IMG_0708.JPG",
    "/images/carousel/6. IMG_0857.JPG",
    "/images/carousel/7. IMG_0979.JPG",
    "/images/carousel/8. IMG_5406.webp",
  ];

  // Triple the array for extra-long scroll safety on large screens
  const duplicatedImages = [
    ...galleryImages,
    ...galleryImages,
    ...galleryImages,
  ];

  return (
    <section className="w-full py-20 bg-[#0a0a0a] overflow-hidden">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 mb-12 flex items-end justify-between">
        <div>
          <p className="text-blue-500 font-medium tracking-widest uppercase text-sm mb-2">
            Our Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Captured Moments
          </h2>
        </div>
        <div className="hidden md:block w-32 h-[1px] bg-gradient-to-r from-blue-600 to-transparent mb-4" />
      </div>

      {/* The Carousel Container */}
      <div className="relative group">
        {/* Professional Edge Fades (The "Mask") */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-6 cursor-grab active:cursor-grabbing"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
          // Pauses the animation when the user wants to look closer
          whileHover={{ animationPlayState: "paused" }}
        >
          {duplicatedImages.map((src, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-[320px] md:w-[500px] aspect-[16/10] rounded-2xl overflow-hidden group/item border border-white/5 shadow-2xl"
            >
              <motion.img
                src={src}
                alt={`Showcase ${index}`}
                initial={{ scale: 1.1, filter: "grayscale(100%)" }}
                whileInView={{ filter: "grayscale(0%)" }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full h-full object-cover transition-all duration-700 brightness-[0.7] group-hover/item:brightness-100"
              />

              {/* Subtle Overlay Info */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <span className="text-blue-400 text-xs font-bold tracking-tighter mb-1">
                  PROJECT {index + 1}
                </span>
                <p className="text-white font-semibold text-lg">
                  Excellence in Detail
                </p>
              </div> */}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

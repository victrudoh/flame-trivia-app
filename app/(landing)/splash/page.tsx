"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

import image1 from "@/assets/imgs/splash/1png.png";
import image2 from "@/assets/imgs/splash/2png.png";
import image3 from "@/assets/imgs/splash/3png.png";
import image4 from "@/assets/imgs/splash/4png.png";

const images = [image1, image2, image3, image4];

// Texts to display with each image
const slideTexts = [
  {
    title: "Level Up Your Health IQ",
    subtitle:
      "Take on fun and interactive health quizzes that boost your knowledge while competing with friends to see who’s the health champ!",
  },
  { title: "Connect with Friends", subtitle: "Stay in touch" },
  { title: "Explore the World", subtitle: "See what's out there" },
  { title: "Get Started Today", subtitle: "Your journey begins here" },
];

const Splash: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  const nextImage = () => {
    if (currentIndex === images.length - 1) {
      router.push("/home"); // Navigate to login after the last image
    } else {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div className="flex flex-col gap-4 items-center justify-center h-screen overflow-hidden">
        <div className="flex flex-col gap-4 items-center justify-between h-[80%] overflow-hidden md:h-[95%]">
          {/* Skip button */}
          <div className="w-full flex justify-end px-4">
            <button
              onClick={nextImage}
              className="transition-fx text-lg font-semibold text-brand-white font-geistsans hover:text-brand-secondary"
            >
              {currentIndex === images.length - 1 ? "Finish" : "Skip"}
            </button>
          </div>

          {/* Image slideshow */}
          <div className="relative flex items-center justify-center w-full max-w-2xl">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className={`absolute rounded-xl ${
                  index === currentIndex ? "z-20" : "z-10 opacity-50"
                }`}
                initial={{ opacity: 0, x: index > currentIndex ? 100 : -100 }}
                animate={{ opacity: index === currentIndex ? 1 : 0.5, x: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{
                  width: "75%",
                  height: "",
                  borderRadius: "30px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col items-center justify-center gap-8">
            {/* Dots indicator */}
            <div className="flex gap-2 my-4 space-x-2">
              {images.map((_, index) => (
                <div
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`w-3 h-3 rounded-full cursor-pointer ${
                    index === currentIndex
                      ? "bg-brand-white"
                      : "bg-brand-grayish"
                  }`}
                ></div>
              ))}
            </div>

            {/* Dynamic Text below the slideshow */}
            <div className=" text-center w-[80%] mx-auto flex flex-col gap-4">
              <h2 className="text-xl font-bold text-brand-white font-geistsans">
                {slideTexts[currentIndex].title}
              </h2>
              <p className="font-medium text-sm text-brand-white font-geistsans">
                {slideTexts[currentIndex].subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Splash;

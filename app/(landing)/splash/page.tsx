"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

import logo from "@/assets/imgs/splash/logo2.jpg";
import quiz from "@/assets/imgs/splash/1png.png";
import chat from "@/assets/imgs/splash/2png.png";
import knowledge from "@/assets/imgs/splash/3png.png";
import map from "@/assets/imgs/splash/4png.png";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";

const images = [logo, knowledge, quiz, chat, map];

// Texts to display with each image
const slideTexts = [
  {
    title: "Welcome to Health9ja",
    subtitle:
      "A youth-friendly online One-Stop-Shop for health information, exciting quiz challenge, counseling, support and referral services at your finger-tips.",
  },
  {
    title: "Explore Cool Health Tips",
    subtitle:
      "Browse through awesome articles on health topics that matter to you, from HIV/AIDS to other STIs.",
  },
  {
    title: "Level Up Your Health IQ",
    subtitle:
      "Take on fun and interactive health quizzes that boost your knowledge while competing with friends to see who’s the health champ!",
  },
  {
    title: "Talk to a Health Pro",
    subtitle:
      "Got health questions? Chat with friendly health experts and get answers you can trust, anytime",
  },

  {
    title: "Find Clinics Near You",
    subtitle:
      "Need help? Use our facility finder to quickly find clinics and health services close to you.",
  },
];

const Splash: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  const nextImage = () => {
    if (currentIndex === images.length - 1) {
      // router.push("/auth"); // Redirect to home after the last image
      router.push("/home");
    } else {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  const previousImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleSkip = () => {
    // router.push("/auth");
    router.push("/home");
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div className="flex flex-col gap-4 items-center justify-start pt-2 h-screen overflow-hidden">
        <div className="flex flex-col gap-2 items-center justify-between h-[85%] overflow-hidden md:h-[95%]">
          {/* Skip button */}
          <div className="w-full flex justify-end px-4">
            <button
              onClick={handleSkip}
              className="text-lg font-semibold text-brand-white font-geistsans p-2"
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
                  borderRadius: "30px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="object-cover w-full h-[350px]"
                />
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col items-center justify-center gap-8">
            {/* Navigation buttons */}
            <div className="flex items-center gap-2">
              <CircleArrowLeft
                onClick={previousImage}
                className="text-base mx-8 w-12 h-12 font-semibold text-brand-white cursor-pointer"
              />

              {/* Dots indicator */}
              <div className="flex gap-2 space-x-2">
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

              <CircleArrowRight
                onClick={nextImage}
                className="text-base mx-8 w-12 h-12 font-semibold text-brand-white cursor-pointer"
              />
            </div>

            {/* Dynamic Text below the slideshow */}
            <div className="text-center w-[80%] mx-auto flex flex-col gap-4">
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

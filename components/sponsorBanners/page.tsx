import React from "react";
import coa from "@/assets/imgs/auth/coat_of_arms.jpg";
import pepfar from "@/assets/imgs/auth/pepfar.jpg";
import foh from "@/assets/imgs/auth/foh.jpg";
import Image from "next/image";

const SponsorBanners = () => {
  return (
    <>
      {/* Banners */}
      <div className="w-[70%] mx-auto flex items-center justify-between my-4">
        <Image
          src={coa} // Replace with your actual logo image source
          alt="Logo"
          className="w-12 h-12 rounded-xl" // Adjust the width and height as needed
        />
        <Image
          src={pepfar} // Replace with your actual logo image source
          alt="Logo"
          className="w-12 h-12 rounded-xl" // Adjust the width and height as needed
        />
        <Image
          src={foh} // Replace with your actual logo image source
          alt="Logo"
          className="w-12 h-12 rounded-xl" // Adjust the width and height as needed
        />
      </div>
    </>
  );
};

export default SponsorBanners;

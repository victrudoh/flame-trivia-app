"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import TopSection from "@/components/topSection/page";
import MainContainer from "@/components/mainContainer/page";
import img from "@/assets/imgs/facilities/heropng.png";

// Dynamically import LGA data
const Page = ({ params }: { params: { id: string } }) => {
  const [facilities, setFacilities] = useState<{ [key: string]: string[] }>({});
  const router = useRouter();

  useEffect(() => {
    // Import the data file dynamically based on the param.id
    import(`@/app/(main)/v1/location/data/${params.id.toLowerCase()}`)
      .then((module) => {
        setFacilities(module.default);
      })
      .catch((err) => {
        console.error("Error loading LGA data:", err);
      });
  }, [params.id]);

  const goBack = () => {
    router.push("/v1/location");
  };

  return (
    <>
      <MainContainer>
        <TopSection>
          <div className="w-full flex items-center justify-start gap-8">
            <ArrowLeft
              className="bg-brand-white shadow-lg w-10 h-10 p-1 ml-4 rounded-full cursor-pointer hover:bg-brand-white/60 hover:text-brand-dark"
              onClick={goBack}
            />
            {params?.id !== "fct" && (
              <span className="font-bold text-xl text-brand-white capitalize">
                {params?.id} {params?.id !== "fct" && "State"}
              </span>
            )}
            {params?.id === "fct" && (
              <span className="font-bold text-xl text-brand-white uppercase">
                {params?.id}
              </span>
            )}
          </div>
        </TopSection>

        {/* Constant Hero Image */}
        <div className="w-full relative h-64">
          <Image
            src={img}
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Facilities List Section */}
        <div className="w-full rounded-xl bg-brand-white p-6 flex flex-col items-start justify-start gap-4 font-normal text-sm text-brand-grayish h-max ">
          {Object.entries(facilities).map(([lga, facilityList]) => (
            <div key={lga} className="max-w-[350px] pb-2 font-geistsans">
              <h2 className="font-bold text-lg uppercase">{lga}</h2>
              <ul className="list-disc pl-5 capitalize">
                {facilityList.map((facility) => (
                  <li key={facility} className="py-2">
                    {facility}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </MainContainer>
    </>
  );
};

export default Page;

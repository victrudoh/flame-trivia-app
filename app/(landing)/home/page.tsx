"use client";

import TopSection from "@/components/topSection/page";
import {
  BookHeart,
  Gamepad2,
  MessageCircle,
  Navigation,
  Settings,
  User,
  Wallet,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import knowledge from "@/assets/imgs/landing/knowledge.png";
import trivia from "@/assets/imgs/landing/trivia.png";
import chat from "@/assets/imgs/landing/chat.png";
import location from "@/assets/imgs/landing/location.png";

const Page = () => {
  return (
    <>
      <div className="text-brand-dark flex flex-col items-center justify-start text-lg font-geistsans gap-8 py-8">
        <TopSection>
          <div className="w-full px-4 flex items-center justify-between">
            {/* left */}
            <div className="flex gap-2 items-center">
              <User className="bg-brand-white shadow-lg w-9 h-9 p-1 rounded-full" />
              <span className="font-normal font-geistsans text-base text-brand-white">
                Edi Khan
              </span>
            </div>
            {/* right */}
            <span className="flex gap-2 rounded-full bg-brand-white cursor-pointer shadow-lg p-2 text-brand-dark font-bold font-geistsans text-base">
              <Settings />
            </span>
          </div>
        </TopSection>
        <div className="flex flex-col gap-4 bg-brand-white shadow-lg p-2 w-[92%] mx-auto rounded-lg font-geistsans">
          {/* top */}
          <div className="flex items-center justify-between p-2">
            <div className="flex items-end gap-2">
              <Wallet />
              <div className="font-bold text-base">Current Balance</div>
            </div>
            <div className="font-bold text-base">4354</div>
          </div>
        </div>
        <div className="w-full overflow-y-auto  p-4 flex flex-col items-center justify-start gap-4 h-full">
          {/* cards */}
          <Link
            href={"/v1/trivia"}
            className="w-full rounded-lg shadow-lg flex"
          >
            <div
              className="bg-gradient-to-b from-green-300 to-yellow-300 w-[20%] rounded-l-xl flex items-center justify-center text-brand-white"
              style={{
                backgroundImage: `url(${trivia.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            <div className="w-[80%] bg-brand-white p-6 flex flex-col items-start justify-center gap-1 rounded-r-xl">
              <div className="text-base font-bold font-geistsans">
                Play Trivia Challenges
              </div>
              <div className="text-xs font-normal font-geistsans">
                Play fun and Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Dolore, corrupti ex! Magnam similique quidem at sunt minus
                dolorem eius molestias?
              </div>
            </div>
          </Link>
          <Link
            href={"/v1/knowledge"}
            className="w-full rounded-lg shadow-lg flex"
          >
            <div
              className="bg-gradient-to-b from-green-300 to-yellow-300 w-[20%] rounded-l-xl flex items-center justify-center text-brand-white"
              style={{
                backgroundImage: `url(${knowledge.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="w-[80%] bg-brand-white p-6 flex flex-col items-start justify-center gap-1 rounded-r-xl">
              <div className="text-base font-bold font-geistsans">
                Health Knowledge Base
              </div>
              <div className="text-xs font-normal font-geistsans">
                Play fun and Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Dolore, corrupti ex! Magnam similique quidem at sunt minus
                dolorem eius molestias?
              </div>
            </div>
          </Link>
          <Link
            href={"/v1/location"}
            className="w-full rounded-lg shadow-lg flex"
          >
            <div
              className="bg-gradient-to-b from-green-300 to-yellow-300 w-[20%] rounded-l-xl flex items-center justify-center text-brand-white"
              style={{
                backgroundImage: `url(${location.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="w-[80%] bg-brand-white p-6 flex flex-col items-start justify-center gap-1 rounded-r-xl">
              <div className="text-base font-bold font-geistsans">
                Find Nearby Clinics
              </div>
              <div className="text-xs font-normal font-geistsans">
                Play fun and Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Dolore, corrupti ex! Magnam similique quidem at sunt minus
                dolorem eius molestias?
              </div>
            </div>
          </Link>
          <Link href={"/v1/chat"} className="w-full rounded-lg shadow-lg flex">
            <div
              className="bg-gradient-to-b from-green-300 to-yellow-300 w-[20%] rounded-l-xl flex items-center justify-center text-brand-white"
              style={{
                backgroundImage: `url(${chat.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="w-[80%] bg-brand-white p-6 flex flex-col items-start justify-center gap-1 rounded-r-xl">
              <div className="text-base font-bold font-geistsans">
                Chat With Experts
              </div>
              <div className="text-xs font-normal font-geistsans">
                Play fun and Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Dolore, corrupti ex! Magnam similique quidem at sunt minus
                dolorem eius molestias?
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Page;

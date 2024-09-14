"use client";

import MainContainer from "@/components/mainContainer/page";
import TopSection from "@/components/topSection/page";
import { CookieIcon, Earth, User } from "lucide-react";
import React from "react";
import ListItem from "../knowledge/ListItem";

const Home = () => {
  const progress = (456 / 676) * 100; // Calculate progress percentage

  return (
    <>
      <MainContainer>
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
            <span className="flex gap-2 rounded-xl bg-brand-white shadow-lg p-2 text-brand-dark font-bold font-geistsans text-base">
              <Earth />
              4354
            </span>
          </div>
        </TopSection>
        <div className="flex flex-col gap-4 bg-brand-white shadow-lg p-2 w-[92%] mx-auto rounded-lg">
          {/* top */}
          <div className="flex items-center justify-between">
            <div className="flex items-end gap-2">
              <CookieIcon />
              <div className="font-medium text-sm">Ninja Level</div>
            </div>
            <div className="font-medium text-sm">456/676</div>
          </div>
          {/* bottom */}
          <div className="w-full rounded-lg bg-brand-grayish">
            <div
              className="h-2 rounded-lg bg-gradient-to-r from-yellow-400 to-red-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        <div className="w-full overflow-y-auto rounded-xl bg-brand-white p-4 flex flex-col items-center justify-start gap-4 h-full">
          <span className="font-semibold text-base font-geistsans w-full text-left">
            Levels
          </span>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
      </MainContainer>
    </>
  );
};

export default Home;

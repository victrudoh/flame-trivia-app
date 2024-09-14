"use client";

import MainContainer from "@/components/mainContainer/page";
import TopSection from "@/components/topSection/page";
import { CookieIcon, Earth, User } from "lucide-react";
import React from "react";
import ListItem from "../knowledge/ListItem";
import img from "@/assets/imgs/card_thumbnail.png";

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
          <ListItem
            title={"About HIV/AIDS"}
            level={"Level 1"}
            quizzes={"12 Quizzes"}
            thumbnail={img}
            link={"/trivia/12"}
          />
          <ListItem
            title={"About HIV/AIDS"}
            level={"Level 2"}
            quizzes={"12 Quizzes"}
            thumbnail={img}
            link={"/trivia/12"}
          />
          <ListItem
            title={"About HIV/AIDS"}
            level={"Level 3"}
            quizzes={"12 Quizzes"}
            thumbnail={img}
            link={"/trivia/12"}
          />
          <ListItem
            title={"About HIV/AIDS"}
            level={"Level 4"}
            quizzes={"12 Quizzes"}
            thumbnail={img}
            link={"/trivia/12"}
          />
          <ListItem
            title={"About HIV/AIDS"}
            level={"Level 5"}
            quizzes={"12 Quizzes"}
            thumbnail={img}
            link={"/trivia/12"}
          />
          <ListItem
            title={"About HIV/AIDS"}
            level={"Level 6"}
            quizzes={"12 Quizzes"}
            thumbnail={img}
            link={"/trivia/12"}
          />
          <ListItem
            title={"About HIV/AIDS"}
            level={"Level 7"}
            quizzes={"12 Quizzes"}
            thumbnail={img}
            link={"/trivia/12"}
          />
          <ListItem
            title={"About HIV/AIDS"}
            level={"Level 8"}
            quizzes={"12 Quizzes"}
            thumbnail={img}
            link={"/trivia/12"}
          />
          <ListItem
            title={"About HIV/AIDS"}
            level={"Level 9"}
            quizzes={"12 Quizzes"}
            thumbnail={img}
            link={"/trivia/12"}
          />
          <ListItem
            title={"About HIV/AIDS"}
            level={"Level 10"}
            quizzes={"12 Quizzes"}
            thumbnail={img}
            link={"/trivia/12"}
          />
        </div>
      </MainContainer>
    </>
  );
};

export default Home;

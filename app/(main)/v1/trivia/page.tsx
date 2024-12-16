"use client";

import MainContainer from "@/components/mainContainer/page";
import TopSection from "@/components/topSection/page";
import { ArrowLeft, Earth, FlameIcon, User } from "lucide-react";
import React from "react";
import img from "@/assets/imgs/ribbon.png";
import ListItem from "./ListItem";
import Link from "next/link";
import { useGeneralContext } from "@/context/GenralContext";
import Spinner from "@/components/spinner/Spinner";
// import AuthLayout from "@/app/(auth)/auth/layout";
// import { useRouter } from "next/navigation";
// import { error } from "@/helpers/Alert";
// import FancyButton from "@/components/fancyButton/page";

const Home = () => {
  // const progress = (456 / 676) * 100; // Calculate progress percentage

  const { user, allLevels, levelLoading }: any = useGeneralContext();

  // const router = useRouter();

  // const checkToken = async () => {
  //   const token = localStorage.getItem("auth_token");

  //   if (!token) {
  //     error("Please login to continue.");
  //     router.push(`/auth/login`);
  //     // return <AuthLayout />;
  //   }
  // };

  // useEffect(() => {
  //   checkToken();
  // }, []);

  return (
    <>
      <MainContainer>
        <TopSection>
          <div className="w-full px-4 flex items-center justify-between">
            {/* left */}
            <div className="flex gap-2 items-center">
              <Link href={"/home"}>
                <ArrowLeft className="bg-brand-white shadow-lg w-9 h-9 p-1 rounded-full cursor-pointer" />
              </Link>
              <Link href={"/profile"} className="flex items-center gap-2 w-max">
                <User className="bg-brand-white shadow-lg w-9 h-9 p-1 rounded-full" />
                <span className="font-normal font-geistsans text-base text-brand-white">
                  {user &&
                    (user?.username || `${user?.firstName} ${user?.lastName}`)}
                </span>
              </Link>
            </div>
            {/* right */}
            <Link
              href={"/leaderboard"}
              className="flex gap-2 rounded-xl bg-brand-white shadow-lg p-2 text-brand-dark font-bold font-geistsans text-base cursor-pointer hover:bg-brand-main hover:text-brand-white"
            >
              <Earth />
              {user?.userPoints || 0}
            </Link>
          </div>
        </TopSection>
        <div className="flex flex-col gap-4 bg-brand-white shadow-lg p-2 w-[92%] mx-auto rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-end gap-2">
              <FlameIcon />
              <div className="font-medium text-sm">Challenge Mode!</div>
            </div>
            {/* <div className="font-medium text-sm">{user?.userXp || 456}/676</div> */}
          </div>
          {/* <div className="w-full rounded-lg bg-brand-grayish">
            <div
              className="h-2 rounded-lg bg-gradient-to-r from-yellow-400 to-red-500"
              style={{ width: `${progress}%` }}
            />
          </div> */}
          {/* <span
            // href={`/v1/trivia/challenge`}
            className="transition-fx w-full py-3 px-4 text-brand-white font-semibold bg-gradient-to-r from-yellow-400 to-red-500 rounded-lg text-center transition-colors duration-200 cursor-pointer hover:bg-gradient-to-l"
          >
            Play Challenge Mode!{" "}
            <span className="text-xs mx-1">(coming soon)</span>
          </span> */}
          <Link
            href={`/v1/trivia/challenge`}
            className="transition-fx w-full py-3 px-4 text-brand-white font-semibold bg-gradient-to-r from-yellow-400 to-red-500 rounded-lg text-center transition-colors duration-200 cursor-pointer hover:bg-gradient-to-l"
          >
            Play Challenge Mode!{" "}
            {/* <span className="text-xs mx-1">(coming soon)</span> */}
          </Link>
          {/* <FancyButton /> */}
        </div>
        <div className="w-full rounded-xl min-h-[80vh] bg-brand-white p-4 flex flex-col items-center justify-start gap-4">
          <span className="font-semibold text-base font-geistsans w-full text-left">
            Levels
          </span>
          {levelLoading ? (
            <Spinner />
          ) : allLevels ? (
            allLevels.map((item: any, i: number) => (
              <ListItem
                key={i}
                title={item?.name}
                body={item?.description}
                thumbnail={item?.image || img}
                link={`/v1/trivia/test?levelId=${item?._id}`}
              />
            ))
          ) : (
            <span className="w-full flex items-center justify-center font-geistsans font-semibold text-xl p-8 rounded-xl bg-brand-ash/60 mx-auto">
              No Levels
            </span>
          )}
          {/* <ListItem
            title={"About HIV/AIDS"}
            level={"Level 1"}
            quizzes={"12 Quizzes"}
            thumbnail={img}
            link={"/v1/trivia/12"}
          /> */}
        </div>
      </MainContainer>
    </>
  );
};

export default Home;

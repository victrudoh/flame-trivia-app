"use client";

import MainContainer from "@/components/mainContainer/page";
import Spinner from "@/components/spinner/Spinner";
import TopSection from "@/components/topSection/page";
import { useGeneralContext } from "@/context/GenralContext";
// import { ArrowLeft } from "lucide-react";
// import { useRouter } from "next/navigation";
import React from "react";

const Leaderboard = () => {
  const {
    user,
    leaderboard,
    resetLeaderboard,
    leaderboardLoading,
    userLeaderboardPosition,
  }: any = useGeneralContext();

  // const router = useRouter();

  // const goBack = () => {
  //   router.push("/home");
  // };

  return (
    <>
      <MainContainer>
        <TopSection>
          <div className="w-[90%] flex items-center justify-between py-12 gap-4">
            {/* <ArrowLeft
              className="bg-brand-white shadow-lg w-10 h-10 p-1 rounded-full cursor-pointer hover:bg-brand-white/60 hover:text-brand-dark"
              onClick={goBack}
            /> */}
            <div className="flex flex-col items-start gap-[2px] flex-wrap max-w-[80%]">
              <span className="font-bold text-brand-white text-2xl text-center">
                Leaderboard
              </span>
            </div>
            <span
              onClick={() => resetLeaderboard()}
              className="transition-fx py-2 px-4 rounded-lg bg-red-600 cursor-pointer text-white font-bold hover:bg-red-800"
            >
              Reset
            </span>
          </div>
        </TopSection>
        <div className="w-[90%] p-4 text-white rounded-xl shadow-xl">
          {leaderboardLoading ? (
            <Spinner />
          ) : (
            <div className="space-y-4">
              {leaderboard?.length > 0 ? (
                <>
                  {leaderboard?.map((player: any, index: number) => (
                    <div
                      key={index}
                      className={`flex justify-between items-center px-6 py-4 rounded-lg bg-brand-white shadow-lg ${
                        player.userId === user?._id
                          ? "text-purple-600"
                          : "text-gray-700"
                      }`}
                    >
                      <span className="font-bold text-lg flex justify-start items-center gap-6 capitalize">
                        <span>{index + 1}</span>{" "}
                        {player.username || player.name}
                      </span>
                      <span className="text-lg">
                        {player.phoneNumber || " - - - - "}
                      </span>
                      <span className="text-lg">{player.userPoints} pts</span>
                    </div>
                  ))}
                </>
              ) : (
                <span className="w-full flex justify-center py-4 mx-auto text-brand-dark font-bold">
                  No available data.
                </span>
              )}
            </div>
          )}

          {/* Show user's position if not in the top 10 */}
          {userLeaderboardPosition?.position > 10 && (
            <>
              <div className="border-t border-gray-700 my-4"></div>
              <div className="flex justify-between items-center px-4 py-2 rounded-lg bg-gray-600">
                <span className="font-bold text-lg">
                  #{userLeaderboardPosition?.position + 1}{" "}
                  {user.username || user.name}
                </span>
                <span className="text-lg">{user.userPoints} pts</span>
              </div>
            </>
          )}
        </div>
      </MainContainer>
    </>
  );
};
const Page = () => {
  return <Leaderboard />;
};

export default Page;

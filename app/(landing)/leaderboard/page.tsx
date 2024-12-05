"use client";

import MainContainer from "@/components/mainContainer/page";
import TopSection from "@/components/topSection/page";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const Leaderboard = ({ players, currentUser }: any) => {
  // Sort players by score in descending order
  const sortedPlayers = players.sort((a: any, b: any) => b.score - a.score);
  const topTen = sortedPlayers.slice(0, 10);

  // Find the current user's position
  const userPosition = sortedPlayers.findIndex(
    (player: any) => player.id === currentUser.id
  );

  const isUserInTopTen = userPosition < 10 && userPosition !== -1;

  const router = useRouter();

  const goBack = () => {
    router.push("/home");
  };

  return (
    <>
      <MainContainer>
        <TopSection>
          <div className="w-[90%] flex items-center justify-start py-12 gap-4">
            <ArrowLeft
              className="bg-brand-white shadow-lg w-10 h-10 p-1 rounded-full cursor-pointer hover:bg-brand-white/60 hover:text-brand-dark"
              onClick={goBack}
            />
            <div className="flex flex-col items-start gap-[2px] flex-wrap max-w-[80%]">
              <span className="font-bold text-brand-white text-2xl text-center">
                Leaderboard
              </span>
            </div>
          </div>
        </TopSection>
        <div className="w-[90%] p-4 text-white rounded-xl shadow-xl">
          {/* Top 10 Players */}
          <div className="space-y-4">
            {topTen.map((player: any, index: number) => (
              <div
                key={player.id}
                className={`flex justify-between items-center px-6 py-4 rounded-lg bg-brand-white shadow-lg ${
                  player.id === currentUser.id
                    ? "text-blue-600"
                    : "text-gray-700"
                }`}
              >
                <span className="font-bold text-lg">
                  #{index + 1} {player.name}
                </span>
                <span className="text-lg">{player.score} pts</span>
              </div>
            ))}
          </div>

          {/* Show user's position if not in the top 10 */}
          {!isUserInTopTen && userPosition !== -1 && (
            <>
              <div className="border-t border-gray-700 my-4"></div>
              <div className="flex justify-between items-center px-4 py-2 rounded-lg bg-gray-600">
                <span className="font-bold text-lg">
                  #{userPosition + 1} {currentUser.name}
                </span>
                <span className="text-lg">{currentUser.score} pts</span>
              </div>
            </>
          )}
        </div>
      </MainContainer>
    </>
  );
};

// Sample data
const samplePlayers = [
  { id: 1, name: "Alice", score: 1200 },
  { id: 2, name: "Bob", score: 1100 },
  { id: 3, name: "Charlie", score: 1050 },
  { id: 4, name: "David", score: 1000 },
  { id: 5, name: "Eve", score: 950 },
  { id: 6, name: "Frank", score: 900 },
  { id: 7, name: "Grace", score: 850 },
  { id: 8, name: "Heidi", score: 800 },
  { id: 9, name: "Ivan", score: 750 },
  { id: 10, name: "Judy", score: 700 },
  { id: 11, name: "CurrentUser", score: 600 }, // User not in top 10
];

const currentUser = { id: 11, name: "CurrentUser", score: 600 };

const Page = () => {
  return <Leaderboard players={samplePlayers} currentUser={currentUser} />;
};

export default Page;

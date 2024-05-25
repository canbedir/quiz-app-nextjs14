import { prismadb } from "@/lib/db";
import Image from "next/image";
import React from "react";
import { FaCrown } from "react-icons/fa";

const LeaderBoardsPage = async () => {
  const users = await prismadb.user.findMany({
    include: {
      quizResults: true,
    },
  });

  users.sort(
    (a, b) =>
      b.quizResults.reduce((acc, curr) => acc + curr.quizScore, 0) -
      a.quizResults.reduce((acc, curr) => acc + curr.quizScore, 0)
  );

  return (
    <div className="max-w-[1500px] mx-auto w-[90%] py-10">
      <h3 className="text-white text-3xl font-light mb-5 text-center">
        Leaderboards 🏆
      </h3>

      <ol>
        {users.map((user, index) => (
          <li
            key={user.id}
            className={`py-4 px-6 rounded-lg bg-mycolor-100 border-2 text-white border-mycolor-300 ${index < 3 ? "font-bold" : ""}`}
          >
            <div className="flex items-center gap-5 w-full">
              <div className="flex sm:flex-row flex-col gap-1 justify-between w-full items-center">
                <div className="flex gap-3 items-center">
                  <span className="text-xl">{index + 1}</span>

                  <Image
                    src={user.profilePic}
                    width={30}
                    height={30}
                    alt={user.username}
                    className="rounded-full"
                  />

                  <h3 className="text-xl">{user.username}</h3>

                  {index === 0 && (
                    <FaCrown className="text-yellow-400 inline-block w-6 h-6 " />
                  )}

                  {index === 1 && (
                    <FaCrown className="text-slate-600 inline-block w-6 h-6 " />
                  )}

                  {index === 2 && (
                    <FaCrown className="text-amber-950/90 inline-block w-6 h-6 " />
                  )}
                </div>

                  <span>
                    Total Quiz Score: {user.quizResults.reduce((acc,curr)=>acc+curr.quizScore,0)}
                  </span>

              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default LeaderBoardsPage;

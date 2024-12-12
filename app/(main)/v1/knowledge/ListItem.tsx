import Image from "next/image";
import React, { useMemo } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ListItemProps {
  title: string;
  level?: string;
  body?: string;
  quizzes?: string | number;
  thumbnail: string | { buffer: string; mimetype: string };
  link: string;
}

const ListItem = ({
  title,
  level,
  body,
  quizzes,
  thumbnail,
  link,
}: ListItemProps) => {
  // Convert buffer to base64 if thumbnail is in buffer format
  const processedThumbnail = useMemo(() => {
    if (
      typeof thumbnail === "object" &&
      thumbnail.buffer &&
      thumbnail.mimetype
    ) {
      const base64Image = Buffer.from(thumbnail.buffer).toString("base64");
      return `data:${thumbnail.mimetype};base64,${base64Image}`;
    }
    if (typeof thumbnail === "string") {
      return thumbnail; // If it's already a URL, return it directly
    }
    return null; // Handle cases where no thumbnail is provided
  }, [thumbnail]);

  return (
    <>
      <Link
        href={link}
        className="group w-full p-4 border-brand-grayish/20 border-[0.3px] rounded-xl shadow-lg flex items-center justify-between"
      >
        <div className="flex items-center gap-4">
          <div className="w-[58px] max-h-[58px]">
            {processedThumbnail ? (
              <Image
                src={processedThumbnail}
                alt="img"
                className="rounded-lg"
                width={58}
                height={58}
                crossOrigin="anonymous"
              />
            ) : (
              <div className="w-[58px] h-[58px] rounded-lg bg-gray-200 flex items-center justify-center">
                No Image
              </div>
            )}
          </div>
          <div className="flex flex-col gap-2 items-start justify-between text-brand-dark">
            <span className="font-bold text-base">{title}</span>
            <span className="font-normal text-xs">
              {body && (
                <>
                  {body.slice(0, 25)}
                  {body.length > 25 && "..."}
                </>
              )}
              {level && (
                <>
                  {level} - {quizzes}
                </>
              )}
            </span>
          </div>
        </div>
        <span className="transition-fx text-brand-main group-hover:animate-bounce">
          <ArrowRight />
        </span>
      </Link>
    </>
  );
};

export default ListItem;

// import Image from "next/image";
// import React from "react";

// import { ArrowRight } from "lucide-react";
// import Link from "next/link";

// const ListItem = ({ title, level, body, quizzes, thumbnail, link }: any) => {
//   return (
//     <>
//       <Link
//         href={link}
//         className="group w-full p-4 border-brand-grayish/20 border-[0.3px] rounded-xl shadow-lg flex items-center justify-between"
//       >
//         <div className="flex items-center gap-4">
//           <div className="w-[58px] max-h-[58px]">
//             <Image
//               src={thumbnail}
//               alt="img"
//               className="rounded-lg"
//               width={58}
//               height={58}
//               crossOrigin="anonymous"
//             />
//           </div>
//           <div className="flex flex-col gap-2 items-start justify-between text-brand-dark">
//             <span className="font-bold text-base">{title}</span>
//             <span className="font-normal text-xs">
//               {body && (
//                 <>
//                   {body.slice(0, 25)}
//                   {body.length > 25 && "..."}
//                 </>
//               )}
//               {level && (
//                 <>
//                   {level} - {quizzes}
//                 </>
//               )}
//             </span>
//           </div>
//         </div>
//         <span className="transition-fx text-brand-main group-hover:animate-bounce">
//           <ArrowRight />
//         </span>
//       </Link>
//     </>
//   );
// };

// export default ListItem;

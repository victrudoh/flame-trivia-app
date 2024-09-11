"use client";

// import { useGeneralContext } from "@/context/GenralContext";
// import Image from "next/image";
// import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
// import img from "@/assets/imgs/knowledge-base/article_img.png";
import { ArrowLeftCircle } from "lucide-react";

const Page = ({ params }: { params: { id: string } }) => {
  console.log("🚀 ~ Page ~ params:", params);

  const router = useRouter();

  //   const { oneVoucher, setOneVoucherId }: any = useGeneralContext();
  //   const [display, setDisplay] = useState("vouchers");

  //   useEffect(() => {
  //     if (params?.id) {
  //       setOneVoucherId(params?.id);
  //     }
  //   }, [params?.id]);

  const goBack = () => {
    router.push("/knowledge");
  };

  return (
    <>
      <div className="flex flex-col items-start gap-2">
        {/* top */}
        <div className="flex items-center gap-2">
          <ArrowLeftCircle
            className="transition-fx text-brand-dark rounded-full  bg-brand-white hover:bg-brand-main hover:text-brand-white"
            onClick={goBack}
          />
          <span className="font-bold-text-xl text-brand-white">
            About HIV/AIDS
          </span>
        </div>
      </div>
    </>
  );
};

export default Page;

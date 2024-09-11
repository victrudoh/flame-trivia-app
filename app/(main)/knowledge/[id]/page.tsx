"use client";

// import { useGeneralContext } from "@/context/GenralContext";
// import Image from "next/image";
// import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import img from "@/assets/imgs/knowledge-base/article_img.jpg";
import { ArrowLeftCircle } from "lucide-react";
import Image from "next/image";

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
      <div className="bg-brand-main text-brand-secondary h-screen flex flex-col items-center justify-start text-lg font-geistmono gap-8 py-8">
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
        <div className="flex items-center justify-center rounded-xl w-[350px] h-[320px] bg-red-300">
          <Image src={img} alt="img" className="object-cover" />
        </div>
      </div>
    </>
  );
};

export default Page;

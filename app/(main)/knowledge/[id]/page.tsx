"use client";

// import { useGeneralContext } from "@/context/GenralContext";
// import Image from "next/image";
// import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import img from "@/assets/imgs/knowledge-base/article_img.jpg";
import { ArrowLeft } from "lucide-react";
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
      <div className="bg-brand-main py-8 text-brand-dark h-screen flex flex-col items-center justify-start text-lg font-geistmono gap-8">
        {/* top */}
        <div className="flex flex-col items-start gap-6">
          <div className="flex items-center gap-4">
            <ArrowLeft
              className="transition-fx text-brand-dark rounded-full bg-brand-white cursor-pointer hover:bg-brand-white/60 hover:text-brand-dark"
              onClick={goBack}
            />
            <span className="font-bold text-xl text-brand-white">
              About HIV/AIDS
            </span>
          </div>
          <div className="flex items-center justify-center rounded-xl max-w-[350px] max-h-[320px] bg-red-300">
            <Image
              src={img}
              alt="img"
              className="object-cover border-brand-white border-4 rounded-xl"
            />
          </div>
        </div>
        {/* bottom */}
        <div className="w-full rounded-xl bg-brand-white p-6 flex flex-col items-center justify-start gap-4 font-normal text-sm text-brand-grayish">
          <span className="max-w-[350px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
            repellat totam iste est, vitae nulla nobis dolor nemo voluptas culpa
            praesentium saepe veniam, animi reiciendis exercitationem molestias
            quidem facilis. Blanditiis fugit dolore porro facilis eligendi
            eveniet ad officia vel vitae sed id corrupti quia minus ipsam
            aspernatur quae, molestias a! Saepe doloremque molestias dolores
            optio, pariatur laudantium iure tempora debitis officia laborum
            tenetur unde! Quidem quas perspiciatis blanditiis expedita sit.
            Alias culpa unde sed voluptatum dolor ipsam asperiores nulla minima
            cupiditate. Incidunt excepturi fuga quibusdam labore cumque amet id
            impedit? Modi adipisci eaque omnis soluta sit inventore, nostrum non
            quasi at corrupti temporibus molestias dolorem eum magnam excepturi
            id hic animi iure aut voluptates necessitatibus libero, sapiente
            quia! Doloremque dolor, veritatis eos atque velit, quos tempore
            ducimus dolore totam dolorum molestias beatae. Fuga, vel dolorem?
            Aut consequuntur iure minus totam aliquid odio, iste, impedit
            veritatis repellat at voluptas quae incidunt?
          </span>
        </div>
      </div>
    </>
  );
};

export default Page;

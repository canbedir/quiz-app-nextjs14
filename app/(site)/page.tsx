import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex items-center justify-center min-h-screen text-center">
      <div className="px-4 max-w-[1500px] mx-auto w-[90%] space-y-3">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-mycolor-300">
          Ready to take this week's quiz?
        </h1>
        <p className="text-mycolor-500 mt-6">Get ready to ace it</p>

        <div className="flex justify-center mb-2">
          <Image src={"/rakun.png"} alt="rakun" width={300} height={300} className="w-64 h-64 lg:w-72 lg:h-72"/>
        </div>

        <div className="h-5"></div>

        <Button asChild variant={"outline"} className="text-mycolor-400">
          <Link href={"/quiz"} >
            I am Ready
          </Link>
        </Button>
  
      </div>

      <span className="absolute left-5 bottom-6 text-white">
        Proje geliştirme aşamasındadır, şuanlık sadece javascript soruları var. Soru kategorileri eklenecektir.
      </span>
      
    </section>
  );
}

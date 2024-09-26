import coneImage from "@/assets/icons/Cone.svg";
import donutImage from "@/assets/icons/Donut.svg";
import watchImage from "@/assets/icons/Apple_watches.svg";
import mouseImage from "@/assets/icons/Mouse.svg";
import pencilImage from "@/assets/icons/Pencil.svg";
import Image from "next/image";

export default function Home() {
  return (
    <div className="pt-12 pb-28 md:pt-28">
      <div className="container">
        <div className="relative md:flex justify-center items-center">
          <div className="w-[309px] md:w-[788px] h-auto">
            <h1 className="text-center text-2xl font-bold text-design md:text-6xl md:leading-tight">
              A Frontend Developer who loves designs & creating memorable user
              experiences.
            </h1>
          </div>
          <Image
            src={coneImage}
            alt="Cone Image"
            className="hidden lg:block w-[230px] absolute -top-20 -right-28"
          />
          <Image
            src={donutImage}
            alt="Donut Image"
            className="hidden lg:block w-[230px] absolute -bottom-28 left-0"
          />
          <Image
            src={watchImage}
            alt="Watch Image"
            className="hidden lg:block w-[100px] absolute -top-10 -left-20"
          />
          <Image
            src={mouseImage}
            alt="Mouse Image"
            className="hidden lg:block w-[100px] absolute -bottom-10 -right-0"
          />
        </div>
      </div>
      <div className="mt-14 w-full flex items-center justify-center">
        <div>
          <Image src={pencilImage} alt="Pencil Image" />
        </div>
      </div>
      <div>
        Hello
      </div>
    </div>
  );
}

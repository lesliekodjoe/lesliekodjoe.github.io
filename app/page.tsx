import coneImage from "@/assets/icons/Cone.svg";
import Image from "next/image";

export default function Home() {
  return (
    <section className="pt-12 md:pt-28">
      <div className="container">
        <div className="border relative md:flex justify-center items-center">
          <div className="w-[309px] md:w-[788px] h-auto">
            <h1 className="text-center text-2xl font-bold text-design md:text-6xl md:leading-tight">
              A Frontend Developer who loves designs & creating memorable user
              experiences.
            </h1>
          </div>
          <Image
            src={coneImage}
            alt="Cone Image"
            className="hidden md:block w-[210px] absolute -top-20 -right-20"
          />
        </div>
      </div>
    </section>
  );
}

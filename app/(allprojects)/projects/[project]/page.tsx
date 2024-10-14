import TransitionLink from "@/components/TransitionLink";
import { projects_data } from "@/utils/data";
import { GoArrowLeft } from "react-icons/go";
import Image from "next/image";

export async function generateStaticParams() {
  return projects_data.map((project) => ({
    project: project.num,
  }));
}

interface ProjectPageProps {
  params: {
    project: string;
  };
}

const ProjectPage = ({ params }: ProjectPageProps) => {
  const { project } = params;
  const selectedProject = projects_data.find((p) => p.num === project);

  if (!selectedProject) {
    return <div>Project not found</div>;
  }

  return (
    <section className="bg-project-img h-full text-white">
      <div className="pt-28 pb-8 w-full h-full ">
        <div className="container">
          <TransitionLink
            href={"/projects"}
            className="group flex text-[14px] items-center bg-[#282828] px-6 py-3 rounded-full hover:scale-105"
          >
            <GoArrowLeft className="text-2xl mr-2 group-hover:-translate-x-2 ease-in-out duration-300" />
            Back
          </TransitionLink>
          <div className="mt-20 w-full md:text-center font-black text-4xl">
            {selectedProject.projectInfo.projectName}
          </div>
        </div>
        {/* Main Image */}
        <div className="mt-20 w-full h-[554px]">
          <Image
            src={selectedProject.media.imageSrc}
            alt={selectedProject.media.altname}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Website Description */}
        <div className="container mt-20">
          <div className="w-full md:flex border-b border-[#828282] pb-16">
            <div className="flex flex-col gap-y-4 md:w-[739px] w-full">
              <h1 className="uppercase text-[12px] font-semibold tracking-[5px]">
                Description
              </h1>
              <p className="text-xl leading-relaxed">
                {selectedProject.projectInfo.projectDescription}
              </p>
            </div>
            <div className="md:w-[371px] flex md:items-end md:justify-end">
              <TransitionLink
                href={"/projects"}
                className="mt-8 md:mt-0 group flex text-[14px] items-center bg-[#282828] px-6 py-3 rounded-full hover:scale-105"
              >
                {selectedProject.projectInfo.projectLink}
                <GoArrowLeft className="text-2xl ml-2 group-hover:translate-x-2 ease-in-out duration-300 rotate-180" />
              </TransitionLink>
            </div>
          </div>
        </div>
        {/* Role & Time */}
        <div className="mt-10 container md:flex  md:gap-y-0">
          <div className="w-1/3">
            <h1 className="uppercase text-sm">Year:</h1>
            <div className="mt-5 w-fit px-6 py-2 text-center border border-[#828282] rounded-full">
              {selectedProject.projectInfo.projectYear}
            </div>
          </div>
          <div className="w-1/3 mt-10 md:mt-0">
            <h1 className="uppercase text-sm">Role:</h1>
            <div className="mt-5 w-fit px-6 py-2 text-center border border-[#828282] rounded-full">
              {selectedProject.projectInfo.projectRole}
            </div>
          </div>
          <div className="w-1/3 mt-10 md:mt-0">
            <h1 className="uppercase text-sm">Technologies:</h1>
            {selectedProject.projectInfo.tech.map((tech) => (
              <div className="flex flex-wrap">
                <div className="px-6 py-2 text-center border border-[#828282] rounded-full">
                  {tech}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Mock/Freestyle Images */}
      </div>
    </section>
  );
};

export default ProjectPage;

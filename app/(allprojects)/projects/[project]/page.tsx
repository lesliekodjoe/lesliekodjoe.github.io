import TransitionLink from "@/components/TransitionLink";
import { projects_data } from "@/utils/data";
import { GoArrowLeft } from "react-icons/go";
import proIMG1 from "@/assets/projectBackground/proIMG1.jpg";
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
            className="group flex items-center bg-[#282828] px-6 py-3 rounded-full hover:scale-105"
          >
            <GoArrowLeft className="text-2xl mr-2 group-hover:-translate-x-2 ease-in-out duration-300" />
            Back
          </TransitionLink>
          <div className="mt-20 w-full md:text-center font-black text-4xl">
            {selectedProject.projectName}
          </div>
        </div>
        <div className="mt-20 w-full h-[554px]">
          <Image
            src={selectedProject.imageSrc}
            alt="image 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mt-20">
          <div className="w-full md:flex">
            <div className="md:w-3/4">
              <h1>Description</h1>
              <p>
                In 2024, Force embarked on a mission to update and redesign
                their website. Their primary objective was to gain the ability
                to control content seamlessly through a Content Management
                System (CMS). The redesign aimed to ensure the website's
                responsiveness across mobile, tablet, and desktop devices. They
                chose Webflow to facilitate easy and efficient content updates.
              </p>
            </div>
            <div className="md:1/4">
              <TransitionLink
                href={"/projects"}
                className="group flex items-center bg-[#282828] px-6 py-3 rounded-full hover:scale-105"
              >
                <GoArrowLeft className="text-2xl mr-2 group-hover:-translate-x-2 ease-in-out duration-300" />
                Back
              </TransitionLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;

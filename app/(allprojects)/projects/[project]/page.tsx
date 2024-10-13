import { projects_data } from "@/utils/data";


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
    <div className="pt-44">
    </div>
  );
};

export default ProjectPage;

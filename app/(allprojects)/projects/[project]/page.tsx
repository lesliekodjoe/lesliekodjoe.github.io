
import { projects_data } from "@/utils/data";
import ProjectPage from "@/components/ProjectPage";


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

const ProjectServPage = ({ params }: ProjectPageProps) => {
  const { project } = params;
  const selectedProject = projects_data.find((p) => p.num === project);

  if (!selectedProject) {
    return <div>Project not found</div>;
  }

  return <ProjectPage project={selectedProject} />;

};

export default ProjectServPage;

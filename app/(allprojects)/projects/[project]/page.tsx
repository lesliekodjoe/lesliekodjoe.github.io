
const projects = [
  { id: "1", name: "Project 1" },
  { id: "2", name: "Project 2" },
  { id: "3", name: "Project 3" },
];

export async function generateStaticParams() {
  return projects.map((project) => ({
    project: project.id, 
  }));
}

interface ProjectPageProps {
  params: {
    project: string;
  };
}

const ProjectPage = ({ params }: ProjectPageProps) => {
  const { project } = params;
  const selectedProject = projects.find((p) => p.id === project);

  if (!selectedProject) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <h1>{selectedProject.name}</h1>
      <p>Project ID: {project}</p>
    </div>
  );
};

export default ProjectPage;

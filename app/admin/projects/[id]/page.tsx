import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProjectById } from '@/lib/actions/project.actions';
import ProjectForm from '../../project-form';

export const metadata: Metadata = {
  title: 'Update Project',
};

const UpdateProject = async (props: {
  params: Promise<{
    id: string;
  }>;
}) => {
  const { id } = await props.params;

  const project = await getProjectById(id);

  if (!project) return notFound();

  const projectData = project.data
    ? {
        ...project.data,
        description: project.data.description ?? undefined,
        siteLink: project.data.siteLink ?? undefined,
        codeLink: project.data.codeLink ?? undefined,
      }
    : undefined;

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <h1 className="h2-bold">Update Project</h1>

      <ProjectForm type="Update" project={projectData} id={project.data?.id} />
    </div>
  );
};

export default UpdateProject;

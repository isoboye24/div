import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProjectById } from '@/lib/actions/project.actions';
import ProjectForm from '../../project-form';

export const metadata: Metadata = {
  title: 'Update Project',
};

const UpdateProject = async (props: {
  params: Promise<{
    id: number;
  }>;
}) => {
  const { id } = await props.params;
  const project = await getProjectById(Number(id));

  if (!project) return notFound();

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <h1 className="h2-bold">Update Project</h1>
      <ProjectForm type="Update" project={project.data} id={project.data?.id} />
    </div>
  );
};

export default UpdateProject;

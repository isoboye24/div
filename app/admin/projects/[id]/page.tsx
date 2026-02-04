import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProjectById } from '@/lib/actions/project.actions';
import ProjectForm from '../../project-form';
import { Project } from '@/types';

export const metadata: Metadata = {
  title: 'Update Project',
};

const UpdateProject = async ({ params }: { params: { id: string } }) => {
  const project = await getProjectById(params.id);
  if (!project) notFound();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function normalizeProject(data: any): Project {
    return {
      projectName: data.projectName,
      categoryId: data.categoryId,
      publish: data.publish,
      images: data.images ?? [],
      slug: data.slug,
      rate: data.rate,
      projectThumbnail: data.projectThumbnail,

      description: data.description ?? undefined,
      short_description: data.short_description ?? undefined,
      siteLink: data.siteLink ?? undefined,
      codeLink: data.codeLink ?? undefined,
      skills: data.skills ?? [],
    };
  }

  const projectData = normalizeProject(project.data);

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <h1 className="h2-bold">Update Project</h1>

      <ProjectForm type="Update" project={projectData} id={project.data!.id} />
    </div>
  );
};

export default UpdateProject;

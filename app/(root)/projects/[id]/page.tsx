// app/projects/[id]/page.tsx
import { notFound } from 'next/navigation';
import SingleProject from '@/components/ui/shared/single-project';
import { getProjectById } from '@/lib/actions/project.actions';

export default async function ProjectPage({
  params,
}: {
  params: { id: string };
}) {
  const result = await getProjectById(params.id);

  if (!result.success || !result.data) {
    return notFound();
  }

  return <SingleProject project={result?.data} />;
}

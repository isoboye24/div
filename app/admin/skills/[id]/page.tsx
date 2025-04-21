import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getSkillById } from '@/lib/actions/skill.actions';
import SkillForm from '../../skill-form';

export const metadata: Metadata = {
  title: 'Update Skill',
};

const UpdateSkill = async (props: {
  params: Promise<{
    id: number;
  }>;
}) => {
  const { id } = await props.params;
  const skill = await getSkillById(Number(id));

  if (!skill) return notFound();

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <h1 className="h2-bold">Update Skill</h1>
      <SkillForm type="Update" skill={skill.data} id={skill.data?.id} />
    </div>
  );
};

export default UpdateSkill;

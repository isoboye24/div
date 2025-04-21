import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CategoryForm from '../../category-form';
import { getCategoryById } from '@/lib/actions/category.actions';

export const metadata: Metadata = {
  title: 'Update Category',
};

const UpdateCategory = async (props: {
  params: Promise<{
    id: number;
  }>;
}) => {
  const { id } = await props.params;
  const category = await getCategoryById(Number(id));

  if (!category) return notFound();

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <h1 className="h2-bold">Update Category</h1>
      <CategoryForm
        type="Update"
        category={category.data}
        id={category.data?.id}
      />
    </div>
  );
};

export default UpdateCategory;

'use client';

import React, { useEffect } from 'react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { z } from 'zod';
import { upsertCategorySchema } from '@/lib/validator';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { upsertCategory } from '@/lib/actions/category.actions';
import { Category } from '@/types';
import { categoryDefaultValues } from '@/lib/constants';

const CategoryForm = ({
  type,
  category,
  id,
}: {
  type: 'Create' | 'Update';
  category?: Category;
  id?: number;
}) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof upsertCategorySchema>>({
    resolver: zodResolver(upsertCategorySchema),
    defaultValues: category ? { name: category.name } : categoryDefaultValues,
  });

  // Reset form values when category prop changes
  useEffect(() => {
    if (category && type === 'Update') {
      console.log('Form values:', form.getValues());
      form.reset({ name: category.name });
    }
  }, [category, type, form]);

  const onSubmit: SubmitHandler<z.infer<typeof upsertCategorySchema>> = async (
    values
  ) => {
    const payload = { ...values, id: type === 'Update' && id ? id : undefined };

    const res = await upsertCategory(payload);

    if (!res.success) {
      toast.error(res.message);
    } else {
      toast.success(res.message);
      router.push('/admin/categories');
    }
  };

  return (
    <div>
      <Form {...form}>
        <form
          method="post"
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8"
        >
          <div className="">
            <div className="mb-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Category Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Category name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="col-start-1 col-end-3 lg:col-start-2 lg:col-end-3">
              <Button
                type="submit"
                size="lg"
                disabled={form.formState.isSubmitting}
                className="button col-span-2 w-full"
              >
                {form.formState.isSubmitting
                  ? 'Submitting...'
                  : `${type} Category`}
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CategoryForm;

'use client';

import React, { useEffect, useState } from 'react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { z } from 'zod';
import { upsertSkillSchema } from '@/lib/validator';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { Skill } from '@/types';
import { skillDefaultValues } from '@/lib/constants';
import { upsertSkill } from '@/lib/actions/skill.actions';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { getAllCategory } from '@/lib/actions/category.actions';

const SkillForm = ({
  type,
  skill,
  id,
}: {
  type: 'Create' | 'Update';
  skill?: Skill;
  id?: number;
}) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof upsertSkillSchema>>({
    resolver: zodResolver(upsertSkillSchema),
    defaultValues: skill
      ? {
          skillName: skill.skillName,
          categoryId: skill.categoryId,
          level: skill.level,
        }
      : skillDefaultValues,
  });

  const [categories, setCategories] = useState<{ id: number; name: string }[]>(
    []
  );

  // Reset form values when skill prop changes
  useEffect(() => {
    if (skill && type === 'Update') {
      console.log('Form values:', form.getValues());
      form.reset({
        skillName: skill.skillName,
        categoryId: skill.categoryId,
        level: skill.level,
      });
    }
  }, [skill, type, form]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await getAllCategory();
      if (res.success && Array.isArray(res.data)) {
        setCategories(res.data);
      } else {
        setCategories([]);
        toast.error('Failed to fetch categories.');
      }
    };

    fetchCategories();
  }, []);

  const onSubmit: SubmitHandler<z.infer<typeof upsertSkillSchema>> = async (
    values
  ) => {
    const payload = { ...values, id: type === 'Update' && id ? id : undefined };

    const res = await upsertSkill(payload);

    if (!res.success) {
      toast.error(res.message);
    } else {
      toast.success(res.message);
      router.push('/admin/skills');
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
                name="skillName"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Skill Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Skill name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mb-6">
              <FormField
                control={form.control}
                name="level"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Skill Level</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter Skill level"
                        value={field.value ?? ''}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mb-6">
              <FormField
                control={form.control}
                name="categoryId"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Skill Category</FormLabel>
                    <FormControl>
                      <Select
                        value={field.value?.toString() || ''}
                        onValueChange={(val) => field.onChange(Number(val))}
                      >
                        <SelectTrigger className="w-full ">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent className="w-full">
                          {categories.map((category) => (
                            <SelectItem
                              key={category.id}
                              value={category.id.toString()}
                            >
                              {category.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
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
                  : `${type} Skill`}
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SkillForm;

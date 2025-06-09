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
import { upsertProjectSchema } from '@/lib/validator';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { Project } from '@/types';
import { projectDefaultValues } from '@/lib/constants';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { getAllCategory } from '@/lib/actions/category.actions';
import {
  checkIfProjectExists,
  upsertProject,
} from '@/lib/actions/project.actions';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { UploadButton } from '@uploadthing/react';
import type { ClientUploadedFileData } from 'uploadthing/types';
import { OurFileRouter } from '@/lib/uploadthing';
import slugify from 'slugify';

const ProjectForm = ({
  type,
  project,
  id,
}: {
  type: 'Create' | 'Update';
  project?: Project;
  id?: string;
}) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof upsertProjectSchema>>({
    resolver: zodResolver(upsertProjectSchema),
    defaultValues: project
      ? {
          projectName: project.projectName,
          categoryId: project.categoryId,
          publish: project.publish,
          images: project.images,
          slug: project.slug,
          rate: project.rate,
          siteLink: project.siteLink,
          codeLink: project.codeLink,
          description: project.description,
          projectThumbnail: project.projectThumbnail,
        }
      : projectDefaultValues,
  });

  const [categories, setCategories] = useState<{ id: string; name: string }[]>(
    []
  );

  // Reset form values when project prop changes
  useEffect(() => {
    if (project && type === 'Update') {
      console.log('Form values:', form.getValues());
      form.reset({
        projectName: project.projectName,
        categoryId: project.categoryId,
        publish: project.publish,
        images: project.images,
        slug: project.slug,
        rate: project.rate,
        siteLink: project.siteLink,
        codeLink: project.codeLink,
        description: project.description,
        projectThumbnail: project.projectThumbnail,
      });
    }
  }, [project, type, form]);

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

  const onSubmit: SubmitHandler<z.infer<typeof upsertProjectSchema>> = async (
    values
  ) => {
    if (type === 'Create') {
      const exists = await checkIfProjectExists(values.projectName);
      if (exists) {
        toast.error('Project with this name already exists.');
        return;
      }
    }
    const payload = { ...values, id: type === 'Update' && id ? id : undefined };

    const res = await upsertProject(payload);

    if (!res.success) {
      toast.error(res.message);
    } else {
      toast.success(res.message);
      router.push('/admin/projects');
    }
  };

  return (
    <div className="">
      <Form {...form}>
        <form
          method="post"
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4 mb-6">
            <div className="">
              <FormField
                control={form.control}
                name="projectName"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Project Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Project name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="">
              <FormField
                control={form.control}
                name="siteLink"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Site Link</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Site Link" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="">
              <FormField
                control={form.control}
                name="codeLink"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Code Link</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Code Link" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="">
              <FormField
                control={form.control}
                name="slug"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Slug</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          placeholder="Generate slug"
                          className="pl-8"
                          {...field}
                        />
                        <button
                          type="button"
                          className="bg-gray-500 text-white px-4 py-1 mt-2 hover:bg-gray-600"
                          onClick={() => {
                            form.setValue(
                              'slug',
                              slugify(form.getValues('projectName'), {
                                lower: true,
                              })
                            );
                          }}
                        >
                          Generate
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="">
              <div className="upload-field flex flex-col gap-5 md:flex-row">
                {/* Thumbnail */}
                <FormField
                  control={form.control}
                  name="projectThumbnail"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Thumbnail</FormLabel>
                      <Card>
                        <CardContent className="space-y-2 mt-2 min-h-48">
                          <div className="flex-start space-x-2 flex flex-wrap">
                            {/* Render uploaded images */}
                            {field.value && (
                              <Image
                                key={field.value}
                                src={field.value}
                                alt="product image"
                                className="w-20 h-20 object-cover object-center rounded-sm"
                                width={100}
                                height={100}
                              />
                            )}

                            {/* Upload Button */}
                            {(!field.value || field.value.length === 0) && (
                              <FormControl>
                                <UploadButton<OurFileRouter, 'imageUploader'>
                                  endpoint="imageUploader"
                                  onClientUploadComplete={(res) => {
                                    const uploadedUrl = res?.[0]?.ufsUrl;
                                    if (uploadedUrl) {
                                      field.onChange(uploadedUrl);
                                    }
                                  }}
                                  onUploadError={(error: Error) => {
                                    console.error('Upload failed:', error);
                                  }}
                                />
                              </FormControl>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="">
              <div className="upload-field flex flex-col gap-5 md:flex-row">
                {/* Images */}
                <FormField
                  control={form.control}
                  name="images"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Images</FormLabel>
                      <Card>
                        <CardContent className="space-y-2 mt-2 min-h-48">
                          <div className="flex-start space-x-2 flex flex-wrap">
                            {/* Render uploaded images */}
                            {field.value?.map((image: string) => (
                              <Image
                                key={image}
                                src={image}
                                alt="product image"
                                className="w-20 h-20 object-cover object-center rounded-sm"
                                width={100}
                                height={100}
                              />
                            ))}

                            {/* Upload Button */}
                            <FormControl>
                              <UploadButton<OurFileRouter, 'imageUploader'>
                                endpoint="imageUploader"
                                onClientUploadComplete={(
                                  res:
                                    | ClientUploadedFileData<null>[]
                                    | undefined
                                ) => {
                                  const uploadedUrls = res
                                    ?.map((r) => r.ufsUrl)
                                    .filter(Boolean);

                                  if (uploadedUrls?.length) {
                                    const newImages = [
                                      ...(field.value ?? []),
                                      ...uploadedUrls,
                                    ];
                                    field.onChange(newImages);
                                  }
                                }}
                                onUploadError={(error: Error) => {
                                  console.error('Upload failed:', error);
                                }}
                              />
                            </FormControl>
                          </div>
                        </CardContent>
                      </Card>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="">
              <FormField
                control={form.control}
                name="publish"
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-2">
                    <FormControl>
                      <Checkbox
                        checked={!!field.value}
                        onCheckedChange={(checked) => field.onChange(!!checked)}
                      />
                    </FormControl>
                    <FormLabel className="mb-0">Publish?</FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="">
              <FormField
                control={form.control}
                name="rate"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Rate</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter Rate level"
                        value={field.value ?? ''}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="">
              <FormField
                control={form.control}
                name="categoryId"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Select Category</FormLabel>
                    <FormControl>
                      <Select
                        value={field.value?.toString() || ''}
                        onValueChange={(val) => field.onChange(val)}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent className="w-full ">
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
            <div className="">
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe the project"
                        {...field}
                        className="h-40"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
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
                : `${type} Project`}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ProjectForm;

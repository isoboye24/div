'use client';

import React from 'react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { z } from 'zod';
import { signUpFormSchema } from '@/lib/validator';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { userDefault } from '@/lib/constants';

import { Card, CardContent } from '@/components/ui/card';
import { SignOutUser, createUser } from '@/lib/actions/user.actions';
import Image from 'next/image';
import { UploadButton } from '@uploadthing/react';
import { OurFileRouter } from '@/lib/uploadthing';

const SignUpForm = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: userDefault,
  });

  const onSubmit: SubmitHandler<z.infer<typeof signUpFormSchema>> = async (
    values
  ) => {
    const payload = { ...values };

    const res = await createUser(payload);

    if (!res.success) {
      toast.error(res.message);
    } else {
      toast.success(res.message);

      form.reset();
      await SignOutUser();
      router.push('/sign-in');
    }
  };

  return (
    <div className="mb-25 flex justify-center items-center">
      <Card className="w-full max-w-lg">
        <CardContent>
          <Form {...form}>
            <form
              method="post"
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8"
            >
              <div>
                <div className="space-y-4 grid grid-cols-1 gap-3 mb-6 xl:mb-10">
                  <div>
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter Name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div>
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="Enter Email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div>
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              placeholder="Enter Password"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div>
                    <FormField
                      control={form.control}
                      name="confirmPassword"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel>Confirm Password</FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              placeholder="Enter confirm password"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div>
                    <div className="upload-field flex flex-col gap-5 md:flex-row">
                      {/* image */}
                      <FormField
                        control={form.control}
                        name="image"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormLabel>Upload profile picture</FormLabel>
                            <Card>
                              <CardContent className="space-y-2 mt-2 min-h-30">
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
                                  {(!field.value ||
                                    field.value.length === 0) && (
                                    <FormControl>
                                      <UploadButton<
                                        OurFileRouter,
                                        'imageUploader'
                                      >
                                        endpoint="imageUploader"
                                        onClientUploadComplete={(res) => {
                                          const uploadedUrl = res?.[0]?.ufsUrl;
                                          if (uploadedUrl) {
                                            field.onChange(uploadedUrl);
                                          }
                                        }}
                                        onUploadError={(error: Error) => {
                                          console.error(
                                            'Upload failed:',
                                            error
                                          );
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
                </div>

                <div className="flex justify-center items-center">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={form.formState.isSubmitting}
                    className="button w-[50vw] md:w-[20vw] lg:w-[20vw] 2xl:w-[10vw] bg-teal-500 hover:bg-teal-600"
                  >
                    {form.formState.isSubmitting ? 'Submitting...' : `Submit`}
                  </Button>
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUpForm;

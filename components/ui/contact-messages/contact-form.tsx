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
import { upsertContactMessageSchema } from '@/lib/validator';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { upsertContactMessage } from '@/lib/actions/message.actions';
import { ContactMessage } from '@/types';
import { contactMessageDefaultValues } from '@/lib/constants';

import SectionTitle from '../shared/section-title';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../card';
import { triggerNotification } from '@/utility/notify';

const ContactForm = ({
  type,
  contactMessage,
  id,
}: {
  type: 'Send' | 'Update';
  contactMessage?: ContactMessage;
  id?: string;
}) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof upsertContactMessageSchema>>({
    resolver: zodResolver(upsertContactMessageSchema),
    defaultValues: contactMessage
      ? {
          senderName: contactMessage.senderName,
          senderEmail: contactMessage.senderEmail,
          subject: contactMessage.subject,
          messageText: contactMessage.messageText,
        }
      : contactMessageDefaultValues,
  });

  // Reset form values when contact prop changes
  useEffect(() => {
    if (contactMessage && type === 'Update') {
      form.reset({
        senderName: contactMessage.senderName,
        senderEmail: contactMessage.senderEmail,
        subject: contactMessage.subject,
        messageText: contactMessage.messageText,
      });
    }
  }, [contactMessage, type, form]);

  const onSubmit: SubmitHandler<
    z.infer<typeof upsertContactMessageSchema>
  > = async (values) => {
    const payload = { ...values, id: type === 'Update' && id ? id : undefined };

    const res = await upsertContactMessage(payload);

    if (!res.success) {
      toast.error(res.message);
    } else {
      toast.success(res.message);
      if (type === 'Send') {
        form.reset();
        triggerNotification('contact');
        router.push('/contact');
      } else {
        router.push('/admin/messages');
      }
    }
  };

  return (
    <div className="mb-25 flex justify-center items-center">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>
            <SectionTitle title="Let's Work Together" />
          </CardTitle>
          <CardDescription>
            Are you working on something great? I would love to help make it
            happen! Drop me a letter and start your project right now! Just do
            it.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              method="post"
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8"
            >
              <div className="">
                <div className="grid grid-cols-1 gap-3 mb-6 xl:mb-10">
                  <div className="mb-4">
                    <FormField
                      control={form.control}
                      name="senderName"
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
                  <div className="mb-4">
                    <FormField
                      control={form.control}
                      name="senderEmail"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter Email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="mb-4">
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter Subject" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="">
                    <FormField
                      control={form.control}
                      name="messageText"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel>Your Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Enter Message" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="flex justify-center items-center">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={form.formState.isSubmitting}
                    className="button w-[50vw] md:w-[20vw] lg:w-[20vw] 2xl:w-[10vw] bg-teal-500 hover:bg-teal-600"
                  >
                    {form.formState.isSubmitting
                      ? 'Submitting...'
                      : `${type} Message`}
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

export default ContactForm;

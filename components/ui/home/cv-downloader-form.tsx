'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { cvDownloaderDefaultValues } from '@/lib/constants';
import { upsertDataViewerSchema } from '@/lib/validator';
import { z } from 'zod';
import { Download } from 'lucide-react';
import { upsertDataViewer } from '@/lib/actions/data-viewer.actions';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { sendCVToEmail } from '@/lib/actions/email-cv';

const CVDownloaderForm = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof upsertDataViewerSchema>>({
    resolver: zodResolver(upsertDataViewerSchema),
    defaultValues: cvDownloaderDefaultValues,
  });

  // Form submit handler
  const onSubmit: SubmitHandler<
    z.infer<typeof upsertDataViewerSchema>
  > = async (values) => {
    const res = await upsertDataViewer({
      email: values.email,
      company: values.company,
    });
    console.log('Submitting form with values:', values);

    if (res.success) {
      const emailResult = await sendCVToEmail(values.email);
      if (emailResult.success) {
        toast.success('CV sent to your email!');

        // Trigger download manually
        const link = document.createElement('a');
        link.href = '/Dan-Obu-cv.pdf';
        link.download = 'Dan-Obu-cv.pdf';
        link.click();

        form.reset();
        router.push('/');
      } else {
        toast.error(emailResult.message || 'Email failed to send');
      }
    } else {
      toast.error(res.message);
    }
  };

  console.log(form.formState.errors);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Button
        type="button"
        onClick={() => setOpen(true)}
        className="bg-black hover:bg-gray-800 text-gray-50 flex items-center gap-2"
      >
        <Download size={16} /> Download CV
      </Button>
      <DialogContent className="sm:max-w-[425px]">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid gap-4 py-4"
          >
            <DialogHeader>
              <DialogTitle className="text-center">
                Please Fill In The Form
              </DialogTitle>
              <DialogDescription className="text-center">
                Fill in the form to download my CV
              </DialogDescription>
            </DialogHeader>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your company's name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter className="mt-5">
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CVDownloaderForm;

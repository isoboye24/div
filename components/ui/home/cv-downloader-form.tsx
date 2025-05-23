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

type CVDownloaderType = z.infer<typeof upsertDataViewerSchema>;

const CVDownloaderForm = () => {
  const [open, setOpen] = useState(false);

  const form = useForm<CVDownloaderType>({
    resolver: zodResolver(upsertDataViewerSchema),
    defaultValues: cvDownloaderDefaultValues,
  });

  // Form submit handler
  const onSubmit: SubmitHandler<CVDownloaderType> = async () => {
    setOpen(false);
  };

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
          <form method="post" onSubmit={form.handleSubmit(onSubmit)}>
            <DialogHeader>
              <DialogTitle className="text-center">
                Please Fill In The Form
              </DialogTitle>
              <DialogDescription className="text-center">
                Fill in the form to download my CV
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
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
                      <Input
                        placeholder="Enter your company's name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="numberOfDownload"
                render={({ field }) => <input type="hidden" {...field} />}
              />
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => <input type="hidden" {...field} />}
              />
            </div>
            <DialogFooter className="mt-5">
              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? 'Submitting...' : 'Submit'}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CVDownloaderForm;

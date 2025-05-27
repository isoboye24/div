import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getContactMessageById } from '@/lib/actions/message.actions';
import ViewContactMessage from '@/components/ui/shared/view-contact-message';

export const metadata: Metadata = {
  title: 'View Message',
};

const ViewMessage = async (props: {
  params: Promise<{
    id: string;
  }>;
}) => {
  const { id } = await props.params;

  const contactMessage = await getContactMessageById(id);

  if (!contactMessage) return notFound();

  const contactMessageData = contactMessage.data
    ? {
        ...contactMessage.data,
        senderName: contactMessage.data.senderName ?? undefined,
        senderEmail: contactMessage.data.senderEmail ?? undefined,
        subject: contactMessage.data.subject ?? undefined,
        messageText: contactMessage.data.messageText ?? undefined,
      }
    : undefined;

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <ViewContactMessage
        message={contactMessageData}
        id={contactMessage.data?.id}
      />
    </div>
  );
};

export default ViewMessage;

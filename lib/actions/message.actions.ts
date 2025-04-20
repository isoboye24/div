'use server';

import { prisma } from '@/lib/prisma';
import { upsertContactMessageSchema } from '../validator';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { formatError } from '../utils';

export const upsertContactMessage = async (
  data: z.infer<typeof upsertContactMessageSchema>
) => {
  const parsed = upsertContactMessageSchema.safeParse(data);

  if (!parsed.success) {
    return {
      success: false,
      message: 'Invalid contact message data',
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const { id, senderName, senderEmail, subject, messageText } = parsed.data;

  try {
    let contactMessage;

    // Upsert the message
    if (id) {
      contactMessage = await prisma.contactMessage.upsert({
        where: { id },
        update: { senderName, senderEmail, subject, messageText },
        create: { senderName, senderEmail, subject, messageText },
      });
    } else {
      contactMessage = await prisma.contactMessage.create({
        data: { senderName, senderEmail, subject, messageText },
      });
    }

    return {
      success: true,
      clientMessage: id
        ? 'Contact message updated successfully'
        : 'Message sent successfully',
      data: contactMessage,
    };
  } catch (error) {
    console.error('Upsert contact message error:', error);
    return {
      success: false,
      message: 'Failed to upsert contact message',
    };
  }
};

export const getAllContactMessages = async () => {
  try {
    const contactMessages = await prisma.contactMessage.findMany({
      orderBy: {
        date: 'desc',
      },
    });

    return {
      success: true,
      data: contactMessages,
    };
  } catch (error) {
    console.error('Error fetching contact messages:', error);
    return {
      success: false,
      message: 'Failed to fetch contact messages',
    };
  }
};

export const getContactMessageById = async (id: number) => {
  try {
    const contactMessage = await prisma.contactMessage.findFirst({
      where: { id },
    });

    if (!contactMessage) {
      return {
        success: false,
        message: 'Contact message not found',
      };
    }

    return {
      success: true,
      data: contactMessage,
    };
  } catch (error) {
    console.error('Error fetching contact message:', error);
    return {
      success: false,
      message: 'Failed to fetch contact message',
    };
  }
};

export async function deleteContactMessage(id: number) {
  try {
    const contactMessageExists = await prisma.contactMessage.findFirst({
      where: { id },
    });

    if (!contactMessageExists) throw new Error('Contact message not found');

    await prisma.contactMessage.delete({ where: { id } });

    revalidatePath('/admin/messages');

    return {
      success: true,
      message: 'Contact message deleted successfully',
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}

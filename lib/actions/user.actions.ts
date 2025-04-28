'use server';

import { signIn, signOut } from '@/auth';
import { signInFormSchema, signUpFormSchema } from '../validator';
import { isRedirectError } from 'next/dist/client/components/redirect-error';
import { formatError } from '../utils';
import { hashSync } from 'bcrypt-ts-edge';
import { prisma } from '@/db/prisma';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';

export async function signInWithCredentials(
  prevState: unknown,
  formData: FormData
) {
  try {
    const email = formData.get('email')?.toString() || '';
    const password = formData.get('password')?.toString() || '';

    const user = signInFormSchema.parse({ email, password });

    await signIn('credentials', user);

    return { success: true, message: 'Signed in successfully' };
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }

    console.error('Sign-in error:', error);

    return { success: false, message: 'Invalid email or password' };
  }
}

export async function SignOutUser() {
  await signOut();
}

export const signUpUser = async (data: z.infer<typeof signUpFormSchema>) => {
  const parsed = signUpFormSchema.safeParse(data);

  if (!parsed.success) {
    return {
      success: false,
      message: 'User not found',
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const { id, name, password: rawPassword, email, image, role } = parsed.data;

  const hashedPassword = hashSync(rawPassword, 10);

  try {
    let user;

    if (id) {
      user = await prisma.user.upsert({
        where: { id },
        update: {
          name,
          password: hashedPassword,
          email,
          image,
          role,
        },
        create: {
          name,
          password: hashedPassword,
          email,
          image,
          role,
        },
      });
    } else {
      user = await prisma.user.create({
        data: {
          name,
          password: hashedPassword,
          email,
          image,
          role,
        },
      });
    }
    revalidatePath('/sign-in');
    return {
      success: true,
      message: 'User created successfully',
      data: user,
    };
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }

    return {
      success: false,
      message: formatError(error),
    };
  }
};

export const getUserById = async (id: string) => {
  try {
    const userData = await prisma.user.findFirst({
      where: { id },
    });

    if (!userData) {
      return {
        success: false,
        message: 'User not found',
      };
    }

    return {
      success: true,
      data: userData,
    };
  } catch (error) {
    console.error('Error fetching user:', error);
    return {
      success: false,
      message: 'Failed to fetch user',
    };
  }
};

export async function deleteUser(id: string) {
  try {
    const user = await prisma.user.findFirst({
      where: { id },
    });

    if (!user) throw new Error('User not found');

    await prisma.user.delete({ where: { id } });

    revalidatePath('/admin/users');

    return {
      success: true,
      message: 'User deleted successfully',
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}

export const getAllUsers = async () => {
  try {
    const users = await prisma.user.findMany({
      orderBy: [{ role: 'asc' }],
    });

    return {
      success: true,
      data: users,
    };
  } catch (error) {
    console.error('Error fetching users:', error);
    return {
      success: false,
      message: 'Failed to fetch users',
    };
  }
};

export const getTotalUsers = async () => {
  try {
    const total = await prisma.user.count();
    return { success: true, total };
  } catch (error) {
    console.error('Error calculating total users:', error);
    return { success: false, message: 'Failed to count users' };
  }
};

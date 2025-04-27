'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { signUpDefaultValues } from '@/lib/constants';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { signUpUser as signUp } from '@/lib/actions/user.actions';

const SignUpForm = () => {
  const [data, action] = useActionState(signUp, {
    message: '',
    success: false,
  });

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';

  const SignUpButton = () => {
    const { pending } = useFormStatus();
    return (
      <Button disabled={pending} className="w-full" variant="default">
        {pending ? 'Submitting...' : 'Sign Up'}
      </Button>
    );
  };

  return (
    <form action={action}>
      <input type="hidden" name="callbackUrl" value={callbackUrl} />
      <div className="space-y-6">
        <div>
          <Label htmlFor="name" className="mb-1">
            Name
          </Label>
          <Input
            id="name"
            name="name"
            required
            type="text"
            defaultValue={signUpDefaultValues.name}
            autoComplete="name"
          />
        </div>
        <div>
          <Label htmlFor="email" className="mb-1">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            required
            type="email"
            defaultValue={signUpDefaultValues.email}
            autoComplete="email"
          />
        </div>
        <div>
          <Label htmlFor="password" className="mb-1">
            Password
          </Label>
          <Input
            id="password"
            name="password"
            required
            type="password"
            defaultValue={signUpDefaultValues.password}
            autoComplete="current-password"
          />
        </div>

        <div>
          <Label htmlFor="confirmPassword" className="mb-1">
            Confirm Password
          </Label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            required
            type="password"
            defaultValue={signUpDefaultValues.confirmPassword}
            autoComplete="current-password"
          />
        </div>
        <div className="mb-1">
          <Label htmlFor="confirmPassword" className="mb-1">
            Image
          </Label>
          <Input
            id="image"
            name="image"
            required
            type="text"
            defaultValue={signUpDefaultValues.image}
            className="mb-5"
          />
        </div>
        <div>
          <SignUpButton />
        </div>

        {!data.success && (
          <div className="text-center text-destructive">{data.message}</div>
        )}

        <div className="text-sm text-center text-muted-foreground">
          Already have an account?
          <Link
            target="_self"
            className="link ml-1"
            href={`/sign-in?callbackUrl=${callbackUrl}`}
          >
            Sign In
          </Link>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;

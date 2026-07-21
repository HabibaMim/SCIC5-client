'use client';

import { Button, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import Link from 'next/link';
import { Check } from "@gravity-ui/icons";
import toast from 'react-hot-toast';
import { authClient, signIn } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const DEMO_EMAIL = "demo@gigsverse.com";
const DEMO_PASSWORD = "Demo1234";

const LoginPage = () => {

  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const loginData = Object.fromEntries(formData.entries());

    const { data, error } = await signIn.email({
      ...loginData,
    });

    if (error) {
      toast.error("Invalid email or password");
      return;
    }
    if (!error) {
      router.push('/');
      toast.success("Login successful!");
    }
  };

  const handleDemoAutofill = () => {
    setEmail(DEMO_EMAIL);
    setPassword(DEMO_PASSWORD);
  };

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 px-4">

      <div className="w-full max-w-md bg-base-200 rounded-2xl shadow-xl border border-base-300 p-8">

        <p className="font-bold text-3xl text-center text-pink-500 mb-6">
          Login
        </p>

        <Form onSubmit={handleLogin} className="flex flex-col gap-5" validationBehavior="native">

          <TextField isRequired name="email" type="email" value={email} onChange={setEmail}>

            <Label className="text-base-content font-medium">
              Email
            </Label>

            <Input
              className="border-base-300 w-full bg-base-100 text-base-content focus:border-pink-400 focus:ring-pink-400"
              placeholder="abcd@example.com"
            />

            <FieldError />
          </TextField>

          <TextField
            isRequired
            minLength={6}
            name="password"
            type="password"
            value={password}
            onChange={setPassword}
            validate={(value) => {
              if (value.length < 6) {
                return "Password must be at least 6 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[a-z]/.test(value)) {
                return "Password must contain at least one lowercase letter";
              }
              return null;
            }}
          >
            <Label className="text-base-content font-medium">Password</Label>

            <Input
              className="w-full border-base-300 bg-base-100 text-base-content focus:border-pink-400 focus:ring-pink-400"
              placeholder="Enter your password"
            />

            <Description className="text-xs text-base-content/50">
              Must be at least 6 characters with 1 uppercase and 1 lowercase letter
            </Description>

            <FieldError />
          </TextField>

          <Button
            className="bg-pink-500 hover:bg-pink-600 text-white w-full flex items-center justify-center gap-2"
            type="submit"
          >
            <Check />
            Login
          </Button>

          <button
            type="button"
            onClick={handleDemoAutofill}
            className="w-full text-center border border-pink-400/50 text-pink-400 font-medium py-2 rounded-lg hover:bg-pink-400/10 transition"
          >
            Demo login credentials
          </button>

          <Link
            className="w-full text-center text-pink-400 font-medium pt-1 rounded-lg transition"
            href="/register"
          >
            Don't have an account? Register
          </Link>

          <div className="flex items-center gap-3 my-2">

            <div className="flex-1 h-px bg-base-300"></div>

            <p className="text-sm text-base-content/50">Or</p>

            <div className="flex-1 h-px bg-base-300"></div>

          </div>

          <button onClick={handleGoogleLogin} className="w-full flex items-center justify-center gap-3 bg-base-300 hover:bg-base-100 text-base-content py-2 rounded-lg transition">

            <svg aria-label="Google logo" width="16" height="16" viewBox="0 0 512 512">
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
              </g>
            </svg>

            Continue with Google

          </button>

        </Form>

      </div>

    </div>
  );
};

export default LoginPage;
"use client";

import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants";
import { ACCOUNT_OPTION_TYPE } from "@/constants/data-mockup";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignUpForm() {
  const router = useRouter();

  const handleSignUpForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(ROUTES.DASHBOARD);
  };
  return (
    <form onSubmit={handleSignUpForm} className="space-y-6">
      <div>
        <label
          htmlFor="email"
          className="block text-sm/6 font-medium text-gray-900"
        >
          Email address
        </label>
        <div className="mt-2">
          <input
            id="email"
            type="email"
            name="email"
            defaultValue="nnpp@gmail.com"
            autoComplete="email"
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="account-type"
          className="block text-sm/6 font-medium text-gray-900"
        >
          Account type
        </label>
        <div className="mt-2">
          <select
            id="account-type"
            name="account-type"
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            defaultValue=""
          >
            <option value="" disabled>
              Select account type
            </option>
            {ACCOUNT_OPTION_TYPE.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm/6 font-medium text-gray-900"
        >
          Password
        </label>
        <div className="mt-2">
          <input
            id="password"
            type="password"
            name="password"
            defaultValue={"123456"}
            autoComplete="current-password"
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="block text-sm/6 text-gray-900">
          Already have an account?
        </p>
        <div>
          <Link
            href={ROUTES.LOGIN}
            className="font-semibold text-[#978bf8] hover:text-indigo-500"
          >
            Login
          </Link>
        </div>
      </div>
      <div>
        <Button type="submit" variant={"primary"} className="w-full">
          Sign up
        </Button>
      </div>
    </form>
  );
}

"use client";

import React, { ComponentPropsWithoutRef, useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";
import { redirect } from "next/navigation";
import { GithubSvg, GoogleSvg } from "@/components/SvgIcons";
import { authClient } from "@/lib/authClient";
import SignInToast from "./SignInToast";
import { validateInput } from "@/lib/utils";

type UserFormProps = {
  type: "signin" | "signup";
  className?: string;
} & ComponentPropsWithoutRef<"form">;

type UserFormError = {
  name: string | null;
  email: string | null;
  password: string | null;
};

function UserForm(props: UserFormProps) {
  const { type, className, ...rest } = props;
  const [formError, setFormError] = useState<UserFormError>();

  async function userSubmitHandler(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const formData = new FormData(formEl);

    const nameInput = formData.get("name") as string;
    const emailInput = formData.get("email") as string;
    const passwordInput = formData.get("password") as string;
    const passwordConfirmInput = formData.get("password-confirm") as string;

    if (type === "signup") {
      const errorObj = {
        name: !validateInput("string", nameInput) ? "নাম সঠিক নেই!" : null,
        email: !validateInput("email", emailInput) ? "ইমেইল সঠিক নেই!" : null,
        password: !validateInput("password", passwordInput)
          ? "পাসওয়ার্ড ৮ সংখ্যার বেশি হতে হবে!"
          : null,
      };
      if (passwordInput !== passwordConfirmInput) {
        errorObj.password = "পাসওয়ার্ড মিলে নাই!";
      }
      if (errorObj.name || errorObj.email || errorObj.password) {
        setFormError(errorObj);
        return;
      }

      const { data, error } = await authClient.signUp.email({
        name: nameInput,
        email: emailInput,
        password: passwordInput,
      });
      if (error) {
        toast.error(error.message ?? "Something went wrong!");
        return;
      }
      formEl.reset();
      authClient.signOut();
      toast.success("Sign Up Successful! Please Sign In.");
      redirect("/signin");
    }

    if (type === "signin") {
      const { data, error } = await authClient.signIn.email({
        email: emailInput,
        password: passwordInput,
        rememberMe: true,
      });

      if (error) {
        toast.error(error.message ?? "Something went wrong!");
        return;
      }
      formEl.reset();

      toast.success("Sign In Successful!");
      redirect("/");
    }
  }

  async function socialSignIndHandler(provider: "google" | "github") {
    const { data, error } = await authClient.signIn.social({
      provider,
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message ?? "Something went wrong!");
      return;
    }

    toast.loading(`Redirecting to your ${provider.toUpperCase()} account!`);
    // redirect("/");
  }

  return (
    <>
      <div className="bg-white rounded-xl p-6">
        <form
          onSubmit={userSubmitHandler}
          className={`flex flex-col gap-6 ${className}`}
          {...rest}
        >
          {type === "signup" && (
            <div className="flex flex-col gap-2">
              <label className="label">নাম</label>
              <input
                type="text"
                name="name"
                className="input w-full"
                placeholder="যেমন: রহিম উদ্দিন"
                // required
              />
              {formError?.name && (
                <p className="text-red-500 text-left text-sm">
                  {formError?.name}
                </p>
              )}
            </div>
          )}

          <div className="flex flex-col gap-2">
            <label className="label">ইমেইল</label>
            <input
              type="email"
              name="email"
              className="input w-full"
              placeholder="you@example.com"
              // required
            />
            {formError?.email && (
              <p className="text-red-500 text-left text-sm">
                {formError?.email}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="label">পাসওয়ার্ড</label>
            <input
              type="password"
              name="password"
              className="input w-full"
              placeholder="কমপক্ষে ৮ অক্ষর"
              minLength={8}
              // required
            />
            {formError?.password && (
              <p className="text-red-500 text-left text-sm">
                {formError?.password}
              </p>
            )}
          </div>

          {type === "signup" && (
            <div className="flex flex-col gap-2">
              <label className="label">পাসওয়ার্ড নিশ্চিত করুন</label>
              <input
                type="password"
                name="password-confirm"
                className="input w-full"
                placeholder="আবার লিখুন"
                minLength={8}
                // required
              />
              {formError?.password && (
                <p className="text-red-500 text-left text-sm">
                  {formError?.password}
                </p>
              )}
            </div>
          )}

          <div className="flex flex-col">
            <button className="btn bg-pr hover:bg-pr-hover text-pr-content">
              {type === "signin" ? "সাইন ইন" : "অ্যাকাউন্ট তৈরি করুন"}
            </button>
          </div>
        </form>
        <div className="divider text-sm text-gray-500">অথবা</div>

        <div className="flex justify-between gap-2">
          {/* GitHub */}
          <button
            className="btn btn-social-size bg-black text-white border-black hover:bg-gray-800"
            onClick={() => socialSignIndHandler("github")}
          >
            <GithubSvg />
            Login with GitHub
          </button>

          {/* Google */}
          <button
            className="btn btn-social-size bg-white text-black border-[#e5e5e5] hover:bg-gray-300"
            onClick={() => socialSignIndHandler("google")}
          >
            <GoogleSvg />
            Login with Google
          </button>
        </div>
        <br />

        {type === "signup" && (
          <p>
            অ্যাকাউন্ট আছে? &nbsp;
            <Link href={"/signin"} className="text-pr hover:text-pr-hover">
              সাইন ইন করুন
            </Link>
          </p>
        )}

        {type === "signin" && (
          <p>
            অ্যাকাউন্ট নেই? &nbsp;
            <Link href={"/signup"} className="text-pr hover:text-pr-hover">
              সাইন আপ করুন
            </Link>
          </p>
        )}
      </div>

      <Link
        href="/"
        className="btn btn-link font-normal text-gray-500 hover:text-pr no-underline hover:underline"
      >
        &larr; হোম পেজে ফিরে যান
      </Link>

      <SignInToast />
    </>
  );
}

export default UserForm;

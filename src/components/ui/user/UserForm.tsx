"use client";

import React, { ComponentPropsWithoutRef, useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";
import { redirect } from "next/navigation";
import { GithubSvg, GoogleSvg } from "@/components/SvgIcons";
import { authClient } from "@/lib/authClient";

type UserFormProps = {
  type: "signin" | "signup";
  className?: string;
} & ComponentPropsWithoutRef<"form">;

function UserForm(props: UserFormProps) {
  const { type, className, ...rest } = props;
  const [isPassMatch, setIsPassMatch] = useState<boolean>(true);

  async function userSubmitHandler(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const formData = new FormData(formEl);

    if (
      type === "signup" &&
      formData.get("password") !== formData.get("password-confirm")
    ) {
      setIsPassMatch(false);
      return;
    }

    if (type === "signup") {
      const { data, error } = await authClient.signUp.email({
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        password: formData.get("password") as string,
        callbackURL: "/",
      });

      if (error) {
        toast.error(error.message ?? "Something went wrong!");
        return;
      }
      formEl.reset();

      toast.success("Sign Up Successful!");
      redirect("/");
    }

    if (type === "signin") {
      const { data, error } = await authClient.signIn.email({
        email: formData.get("email") as string,
        password: formData.get("password") as string,
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

    toast.success("Sign Up Successful!");
    redirect("/");
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
                required
              />
            </div>
          )}

          <div className="flex flex-col gap-2">
            <label className="label">ইমেইল</label>
            <input
              type="email"
              name="email"
              className="input w-full"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="label">পাসওয়ার্ড</label>
            <input
              type="password"
              name="password"
              className="input w-full"
              placeholder="কমপক্ষে ৮ অক্ষর"
              minLength={8}
              required
            />
            {!isPassMatch && (
              <p className="text-red-500 text-left text-sm">
                পাসোওয়ার্ড মিলে নাই
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
                required
              />
              {!isPassMatch && (
                <p className="text-red-500 text-left text-sm">
                  পাসোওয়ার্ড মিলে নাই
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
      </div>
      <Link
        href="/"
        className="btn btn-link font-normal text-gray-500 hover:text-pr no-underline hover:underline"
      >
        &larr; হোম পেজে ফিরে যান
      </Link>
    </>
  );
}

export default UserForm;

"use client";

import { GithubSvg, GoogleSvg } from "@/components/SvgIcons";
import Link from "next/link";
import React, { ComponentPropsWithoutRef } from "react";

type UserFormProps = {
  type: "signin" | "signup";
  className?: string;
} & ComponentPropsWithoutRef<"form">;

function UserForm(props: UserFormProps) {
  const { type, className, ...rest } = props;

  function userSubmitHandler(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const formData = new FormData(formEl);

    console.log(formData.get("email"));
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
          </div>

          {type === "signup" && (
            <div className="flex flex-col gap-2">
              <label className="label">পাসওয়ার্ড নিশ্চিত করুন</label>
              <input
                type="password"
                name="password"
                className="input w-full"
                placeholder="আবার লিখুন"
                minLength={8}
                required
              />
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
          <button className="btn btn-social-size bg-black text-white border-black hover:bg-gray-800">
            <GithubSvg />
            Login with GitHub
          </button>

          {/* Google */}
          <button className="btn btn-social-size bg-white text-black border-[#e5e5e5] hover:bg-gray-300">
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

"use client";

import { authClient } from "@/lib/authClient";
import { redirect } from "next/navigation";
import React, { ComponentPropsWithoutRef } from "react";
import toast from "react-hot-toast";

type ProfileFormProps = {
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"form">;

function ProfileForm(props: ProfileFormProps) {
  const { className, children, ...rest } = props;

  async function profileUpdateHandler(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const formData = new FormData(formEl);

    const { data, error } = await authClient.updateUser({
      name: formData.get("name") as string,
    });

    if (error) {
      toast.error(error.message ?? "Something went wrong!");
    }
    toast.success("Name updated successfully");
    redirect("/");
  }

  return (
    <form
      onSubmit={profileUpdateHandler}
      className={`flex flex-col gap-6 ${className ? className : ""}`}
      {...rest}
    >
      <div className="flex flex-col gap-2">
        <label className="label text-sm text-gray-700">নাম</label>
        <input
          type="text"
          name="name"
          className="input w-full"
          placeholder="যেমন: রহিম উদ্দিন"
          required
        />
      </div>

      <div className="flex flex-col">
        <button className="btn bg-pr hover:bg-pr-hover text-pr-content">
          আপডেট
        </button>
      </div>
    </form>
  );
}

export default ProfileForm;

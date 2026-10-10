"use client";

import React, { ComponentPropsWithoutRef } from "react";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/authClient";

type ProfileSignOutProps = {
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"button">;

function ProfileSignOut(props: ProfileSignOutProps) {
  const { className, children, ...rest } = props;

  function signOutHandler() {
    authClient.signOut();
    toast.success("Successfully Signed Out!");
    redirect("/signin");
  }

  return (
    <button
      className={`btn btn-outline btn-secondary ${className ? className : ""}`}
      onClick={() => signOutHandler()}
      {...rest}
    >
      ↩ সাইন আউট
    </button>
  );
}

export default ProfileSignOut;

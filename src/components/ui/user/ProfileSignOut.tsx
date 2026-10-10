"use client";

import React, { ComponentPropsWithoutRef } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/authClient";

type ProfileSignOutProps = {
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"button">;

function ProfileSignOut(props: ProfileSignOutProps) {
  const { className, children, ...rest } = props;
  const router = useRouter();

  function signOutHandler() {
    authClient.signOut();
    router.push("/");
    router.refresh();
    toast.success("Successfully Signed Out!");
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

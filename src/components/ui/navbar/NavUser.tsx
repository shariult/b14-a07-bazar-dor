"use client";

import React, { ComponentPropsWithoutRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { authClient } from "@/lib/authClient";
import { useRouter } from "next/navigation";
import UserDemoImg from "../user/UserDemoImg";
import Loading from "../Loading";
import toast from "react-hot-toast";

type NavUserProps = {
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"div">;

function NavUser(props: NavUserProps) {
  const { className, children, ...rest } = props;
  const { data, error, isPending } = authClient.useSession();
  const router = useRouter();

  function signOutHandler() {
    authClient.signOut();
    router.push("/signin");
    router.refresh();
    toast.success("Successfully Signed Out!");
  }

  return (
    <>
      {isPending && <Loading />}
      {!isPending && data && (
        <div className={`flex gap-2 ${className ? className : ""}`} {...rest}>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost avatar">
              <div className="w-10 rounded-full">
                {!data?.user.image && (
                  <UserDemoImg name={data?.user.name ?? "U"} />
                )}
                {data?.user.image && (
                  <Image
                    alt="Tailwind CSS Navbar component"
                    src={data?.user.image}
                    width="40"
                    height="40"
                  />
                )}
              </div>
              <p className="hidden md:block text-base">{data?.user.name}</p>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li className="mb-2 md:mb-4 rounded-lg">
                <span className="text-xl py-0 hover:bg-white hover:cursor-auto active:text-gray-900">
                  {data?.user.name}
                </span>
                <span className="text-right text-gray-500 -mt-1 hover:bg-white hover:cursor-auto active:text-gray-900">
                  {data?.user.email}
                </span>
              </li>
              <li>
                <Link href="/profile" className="text-base justify-between">
                  👤 &nbsp;&nbsp;আমার প্রোফাইল
                  {/* <span className="badge">New</span> */}
                </Link>
              </li>
              <li>
                <button
                  onClick={() => signOutHandler()}
                  className="text-base text-red-500"
                >
                  ↩ &nbsp;&nbsp;সাইন আউট
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default NavUser;

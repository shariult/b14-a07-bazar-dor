import React from "react";
import { redirect } from "next/navigation";
import UserForm from "@/components/ui/user/UserForm";
import { getCurrentUser } from "@/lib/userActions";

async function SignInPage() {
  const data = await getCurrentUser();
  if (data) {
    redirect("/");
  }

  return (
    <div className="px-6 xl:px-0">
      <div className="max-w-120 mx-auto pt-6 pb-20 flex flex-col justify-center text-center">
        <h3 className="heading-3 font-bold">সাইন ইন</h3>
        <p className="mb-6 text-gray-500">
          বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
        </p>
        <UserForm type="signin" />
      </div>
    </div>
  );
}

export default SignInPage;

import React from "react";
import UserForm from "@/components/ui/user/UserForm";

function SignInPage() {
  return (
    <div className="max-w-105 mx-auto pt-6 pb-20 flex flex-col justify-center text-center">
      <h3 className="heading-3 font-bold">সাইন ইন</h3>
      <p className="mb-6 text-gray-500">
        বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
      </p>
      <UserForm type="signin" />
    </div>
  );
}

export default SignInPage;

import React from "react";
import UserForm from "@/components/ui/user/UserForm";

function SignUpPage() {
  return (
    <div className="max-w-105 mx-auto pt-6 pb-20 flex flex-col justify-center text-center">
      <h3 className="heading-3 font-bold">অ্যাকাউন্ট তৈরি করুন</h3>
      <p className="mb-6 text-gray-500">
        বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
      </p>
      <UserForm type="signup" />
    </div>
  );
}

export default SignUpPage;

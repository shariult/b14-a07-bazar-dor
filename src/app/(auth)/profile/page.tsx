import React from "react";
import Image from "next/image";
import UserDemoImg from "@/components/ui/user/UserDemoImg";
import { getCurrentUser } from "@/lib/userActions";
import ProfileSignOut from "@/components/ui/user/ProfileSignOut";
import ProfileForm from "@/components/ui/user/ProfileForm";

async function ProfilePage() {
  const data = await getCurrentUser();

  return (
    <div className="max-w-150 mx-auto pt-6 pb-20 flex flex-col justify-center gap-6">
      <div className="mx-6 xl:mx-0">
        <h3 className="heading-3 font-bold">আমার প্রোফাইল</h3>
        <p className=" text-gray-500">আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
      </div>

      <div className="bg-white rounded-xl py-4 px-6 mx-6 xl:mx-0 flex items-center gap-4">
        <div>
          {!data?.image && <UserDemoImg name={data?.name ?? "U"} />}
          {data?.image && (
            <Image
              alt="Tailwind CSS Navbar component"
              src={data?.image}
              width="40"
              height="40"
            />
          )}
        </div>
        <div>
          <p className="text-lg font-semibold">{data?.name}</p>
          <p className="text-sm -mt-1 text-gray-500">{data?.email}</p>
        </div>

        <div className="ml-auto">
          <ProfileSignOut />
        </div>
      </div>

      <div className="bg-white rounded-xl py-4 px-6 mx-6 xl:mx-0">
        <h4 className="text-lg font-semibold mb-6">তথ্য</h4>
        <ProfileForm />
      </div>
    </div>
  );
}

export default ProfilePage;

"use client";

import Link from "next/link";
import { useEffect } from "react";

type ErrorPageProps = {
  error: Error;
  reset: () => void;
};

function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  });

  return (
    <div className="max-w-330 container mx-auto flex flex-col items-center justify-center p-10 ">
      <h2 className="text-4xl mb-4 text-red-500">
        {error.message ?? "কিছু একটা সমস্যা হয়েছে!"}
      </h2>

      <div className="flex gap-4">
        <Link
          href={"/"}
          className="btn bg-pr hover:bg-pr-hover text-pr-content rounded-lg"
        >
          হোমপেজে ফিরে যান
        </Link>

        <button
          onClick={() => reset()}
          className="btn bg-red-500 hover:bg-red-700 text-gray-50 rounded-lg"
        >
          আবার চেষ্টা করুন
        </button>
      </div>
    </div>
  );
}

export default ErrorPage;

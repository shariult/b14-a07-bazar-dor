"use client";

import { useEffect, useRef } from "react";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-hot-toast";

export default function SignInToast() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const shown = useRef(false);

  useEffect(() => {
    if (shown.current) return;
    if (searchParams.get("error") === "auth_required") {
      shown.current = true;
      toast.error("এই পৃষ্ঠা দেখতে সাইন ইন করুন");
      router.replace("/signin");
    }
  }, [searchParams]);

  return null;
}

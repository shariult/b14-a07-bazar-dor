import React, { ComponentPropsWithoutRef } from "react";

type LoadingPageProps = {
  loadingText?: string;
  className?: string;
} & ComponentPropsWithoutRef<"div">;

function LoadingPage(props: LoadingPageProps) {
  const { loadingText, className, ...rest } = props;

  return (
    <div
      className={`w-full py-20 flex flex-col items-center justify-center bg-gray-900 text-gray-200 ${className}`}
      {...rest}
    >
      <div className="h-8 w-8 rounded-full border-2 border-gray-800 border-t-gray-200 animate-spin"></div>

      <p className="mt-3 text-sm font-medium text-gray-500 dark:text-gray-400">
        {loadingText ?? "Loading..."}
      </p>
    </div>
  );
}

export default LoadingPage;

import React, { ComponentPropsWithoutRef } from "react";

type BreadcrumbsProps = {
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"div">;

function Breadcrumbs(props: BreadcrumbsProps) {
  const { className, children, ...rest } = props;

  return (
    <div
      className={`breadcrumbs text-sm ${className ? className : ""}`}
      {...rest}
    >
      <ul>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Documents</a>
        </li>
        <li>Add Document</li>
      </ul>
    </div>
  );
}

export default Breadcrumbs;

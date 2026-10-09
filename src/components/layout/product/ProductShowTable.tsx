import React, { ComponentPropsWithoutRef } from "react";
import { Product } from "@/types";
import { toBanglaNum } from "@/lib/utils";

type ProductShowTableProps = {
  productData: Product;
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"div">;

function ProductShowTable(props: ProductShowTableProps) {
  const { productData, className, children, ...rest } = props;

  return (
    <>
      <h3 className="heading-3 mb-4">বাজারভিত্তিক আজকের দাম</h3>

      <div
        className={`overflow-x-auto rounded-box border border-base-content/5 bg-base-100 ${className ? className : ""}`}
        {...rest}
      >
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>বাজার</th>
              <th>বিভাগ</th>
              <th>সর্বনিম্ন</th>
              <th>সর্বাধিক</th>
              <th>গড়</th>
            </tr>
          </thead>
          <tbody>
            {productData &&
              productData.markets.map((item) => {
                let avg = Math.floor((item.min + item.max) / 2);
                return (
                  <tr key={item.market}>
                    <td className="font-semibold">{item.market}</td>
                    <td>{item.division}</td>
                    <td>{toBanglaNum(item.min)} টাকা</td>
                    <td>{toBanglaNum(item.max)} টাকা</td>
                    <td>
                      <strong>{toBanglaNum(avg)} টাকা</strong>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ProductShowTable;

import ProductGridSk from "@/components/ui/product/ProductGridSk";

function LoadingProductPage() {
  return (
    <div className="max-w-330 container mx-auto flex flex-col gap-8 py-8">
      <div className="w-full rounded-xl skeleton p-8 bg-gray-50 border border-gray-200"></div>
      <div className="w-full rounded-xl skeleton p-8 bg-gray-50 border border-gray-200"></div>
      <ProductGridSk />
    </div>
  );
}

export default LoadingProductPage;

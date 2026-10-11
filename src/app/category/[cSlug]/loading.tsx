import Container from "@/components/ui/Container";
import ProductGridSk from "@/components/ui/product/ProductGridSk";

function LoadingProductPage() {
  return (
    <Container boxClassName="flex flex-col gap-8" setXSpace="px-0">
      <div className="w-full rounded-xl skeleton p-8 bg-gray-50 border border-gray-200"></div>
      <div className="w-full rounded-xl skeleton p-8 bg-gray-50 border border-gray-200"></div>
      <ProductGridSk setYSpace="py-6" />
    </Container>
  );
}

export default LoadingProductPage;

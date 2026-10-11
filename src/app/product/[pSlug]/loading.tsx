import Container from "@/components/ui/Container";
import ProductGridSk from "@/components/ui/product/ProductGridSk";

function LoadingCategoryPage() {
  return (
    <Container boxClassName="flex flex-col gap-8 py-8">
      <div className="w-full rounded-xl skeleton p-8 bg-gray-50 border border-gray-200"></div>
      <div className="w-full rounded-xl skeleton p-8 bg-gray-50 border border-gray-200"></div>
      <div className="w-full min-h-[40vh] rounded-xl skeleton bg-gray-50 border border-gray-200"></div>
    </Container>
  );
}

export default LoadingCategoryPage;

import Container from "@/components/ui/Container";

export default function Home() {
  return (
    <>
      <Container el="header">
        <h1 className="text-3xl">Hello World</h1>
        <button className="btn bg-pr hover:bg-pr-hover text-pr-content">
          Click Me
        </button>
      </Container>
    </>
  );
}

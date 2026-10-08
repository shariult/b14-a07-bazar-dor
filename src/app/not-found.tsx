import Link from "next/link";

function NotFoundPage() {
  return (
    <div className="p-10 text-center">
      <h2 className="heading-2">404</h2>
      <p className="subtitle mb-6">
        Page Not Found. Could not find requested resource.
      </p>

      <Link href="/" className="btn btn-error">
        Return Home
      </Link>
    </div>
  );
}
export default NotFoundPage;

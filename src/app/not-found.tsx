import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h2>wrong address</h2>
      <Link href="/">Back to the home page</Link>
    </>
  );
}

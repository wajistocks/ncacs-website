import Link from "next/link";

export default function FloatingDonate() {
  return (
    <Link href="/give" className="floating-donate" aria-label="Donate now">
      <span aria-hidden="true">♥</span> Donate
    </Link>
  );
}

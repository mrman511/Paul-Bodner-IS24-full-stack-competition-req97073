import Link from "next/link";

export default function NavList({ styles }){

  return (
    <ul>
      <Link href="/products"><li>Products</li></Link>
      <Link href="/developers"><li>Developers</li></Link>
      <Link href="/scrummasters"><li>Scrum Masters</li></Link>
    </ul>
  );
}
import Link from "next/link";
import styles from '../styles/Home.module.css'

export default function NavList(){

  return (
    <ul>
      <Link href="/products"><li className={ styles.listLink }>Products</li></Link>
      <Link href="/developers"><li className={ styles.listLink }>Developers</li></Link>
      <Link href="/scrumMasters"><li className={ styles.listLink }>Scrum Masters</li></Link>
    </ul>
  );
}
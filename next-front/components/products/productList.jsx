import ProductItem from "./productItem";
import Link from "next/link";

export default function ProductList({ styles, products }){
  const parsedProducts = products.map((product, i) => <ProductItem key={ `product${i}` } styles={ styles } product={ product }/>)
  return(
    <section className={ styles.list }>
      <Link href="/addProduct"><button>New Product</button></Link>
      { parsedProducts }
    </section>
  );
}
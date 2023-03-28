import ProductItem from "./productItem";
import Link from "next/link";

export default function ProductList({ styles, products, setProducts}){
  const parsedProducts = products.map((product, i) => {
    return (
      <ProductItem 
        key={ `product${i}` } 
        styles={ styles } 
        product={ product }
        setProducts={ setProducts } />)
  });

  return(
    <section className={ styles.list }>
      <Link href="/productForm"><button>New Product</button></Link>
      { parsedProducts }
    </section>
  );
}
import ProductItem from "./productItem";

export default function ProductList({ styles, products }){
  const parsedProducts = products.map((product, i) => <ProductItem key={ `product${i}` } styles={ styles } product={ product }/>)
  return(
    <section className={ styles.list }>
      { parsedProducts }
    </section>
  );
}
import ProductItem from "./productItem";

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
    <>
    
    <section className={ styles.list }>
      { parsedProducts }
    </section>
    </>
  );
}
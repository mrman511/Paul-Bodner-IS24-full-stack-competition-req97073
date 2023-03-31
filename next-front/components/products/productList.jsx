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
    <div><h4>Total Number of Products: { parsedProducts.length }</h4></div>
    <section className={ styles.list }>
      { parsedProducts }
    </section>
    </>
  );
}
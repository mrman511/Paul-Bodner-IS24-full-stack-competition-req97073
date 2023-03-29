import ProductList from "../products/productList";

export default function Developer({styles, developer}){

  return(
    <article>
      <h3>{ developer.name }</h3>
      <br />
      <h5>Has worked on { developer.products.length } Products</h5>
      <ProductList styles={ styles } products={ developer.products } />
    </article>
  );
}
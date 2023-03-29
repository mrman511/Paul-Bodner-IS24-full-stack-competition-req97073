import ProductList from "../products/productList";

export default function Individual({styles, individual}){

  return(
    <article>
      <h3>{ individual.name }</h3>
      <br />
      <h5>Has worked on { individual.products.length } Products</h5>
      <ProductList styles={ styles } products={ individual.products } />
    </article>
  );
}
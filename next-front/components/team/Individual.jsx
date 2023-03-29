import ProductList from "../products/productList";
// import styles from  '../../styles/Home.module.scss';

export default function Individual({styles, individual}){

  return(
    <article>
      <h3 className={ styles.name }>{ individual.name }</h3>
      <br />
      <h5>Has worked on { individual.products.length } Products</h5>
      <ProductList styles={ styles } products={ individual.products } />
    </article>
  );
}
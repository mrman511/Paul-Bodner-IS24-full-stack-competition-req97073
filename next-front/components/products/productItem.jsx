import Link from "next/link";
import { useEffect } from "react";
import deleteProduct from "@/utils/deleteProduct";

export default function ProductItem({ styles, product, setProducts }){
  const parsedDevelopers = product.developers.map((developer, i) => {
    return (
      <Link 
      href={ `developer/${i}` } 
      key={ `product-${product.id}-developer-${i}` } >
        <li>{ developer }</li>
      </Link>
    );
  })
  
  useEffect(() => {
    console.log('Product:::', product);
  })

  return (
    <article className={ styles.card }>
      <h2>{ product.title }</h2>
      <h3>owner: { product.owner }</h3>
      <h3>scrum master: { product.scrum_aster }</h3>
      <div>
        <h4>Developers:</h4>
        <ul>
          { parsedDevelopers }
        </ul>
      </div>
      <p>methodology: { product.methodology }</p>
      <h4>{ product.start_date }</h4>
      <Link href={{ pathname: '/productForm', query: { id: product.id } }}><button >edit</button></Link>
      <button onClick={() => { deleteProduct(product.id, setProducts) }} >delete</button>
    </article>
  );
}
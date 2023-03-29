import Link from "next/link";
import deleteProduct from "@/utils/deleteProduct";

export default function ProductItem({ styles, product, setProducts }){
  const parsedDevelopers = product.developers.map((developer) => {
    return (
      <Link 
      href={{pathname: '/developers', query: { name: developer }} }
      key={ `product-${product.id}-developer-${developer}` } >
        <li className={ styles.listLink }>{ developer }</li>
      </Link>
    );
  })

  return (
    <article className={ styles.card }>
      <h2 className={ styles.title }> { product.title }</h2>
      <hr></hr>
      <h3>owner: { product.owner }</h3>
      <h3>scrum master: { product.scrum_master }</h3>
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
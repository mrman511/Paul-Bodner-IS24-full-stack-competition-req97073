import Link from "next/link";
import deleteProduct from "@/utils/deleteProduct";

export default function ProductItem({ styles, product, setProducts }){
  const startDate = new Date(product.start_date);

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
      <div>
        <p>Product Number: {product.id}</p>
      </div>
      <h2 className={ styles.title }>Title: { product.title }</h2>
      <hr></hr>
      <div>
        <h3>owner: { product.owner }</h3>
      </div>
      <div>
        <h3>scrum master:</h3>
        <Link href={{ pathname: '/scrumMasters', query: { name: product.scrum_master }}} className={ styles.listLink }>
          { product.scrum_master }
        </Link>
      </div>
      <div>
        <h4>Developers:</h4>
        <ul>
          { parsedDevelopers }
        </ul>
      </div>
      <div>
        <p>methodology: { product.methodology }</p>
      </div>
      <h4>Start Date: { `${startDate.getFullYear()}-${startDate.getMonth() + 1}-${startDate.getDate()}` }</h4>
      <Link href={{ pathname: '/products/productForm', query: { id: product.id } }}><button >edit</button></Link>
      <button onClick={() => { deleteProduct(product.id, setProducts) }} >delete</button>
    </article>
  );
}
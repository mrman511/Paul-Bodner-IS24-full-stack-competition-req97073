import Link from "next/link";

export default function ProductItem({ styles, product }){

  const parsedDevelopers = product.developers.map((developer, i) => {
    return (
      <Link 
      href={ `developer/${developer.id}` } 
      key={ `product-${product.id}-developer-${i}` } >
        <li>{ developer.name }</li>
      </Link>
    );
  })
  

  return (
    <article className={ styles.card }>
      <h2>{ product.productName }</h2>
      <h3>owner: { product.productOwner }</h3>
      <h3>scrum master: { product.scrumMasterName }</h3>
      <div>
        <h4>Developers:</h4>
        <ul>
          { parsedDevelopers }
        </ul>
      </div>
      <p>methodology: { product.methodology }</p>
      <h4>{ product.startDate }</h4>
    </article>
  );
}
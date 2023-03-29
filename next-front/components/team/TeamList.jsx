import Link from "next/link";

export default function TeamList({styles, individuals, path}){

  const parsedIndividuals = individuals.map(individual => {
    return(
      <Link key={`${ path }-${individual}`} href={{path:  `/${path}` , query: { name: individual }}}>
      <li className={ styles.listLink }>{ individual }</li>
      </Link>
    );
  })

  return (
    <ul className={ styles.card }>
      { parsedIndividuals }
    </ul>
  );
}
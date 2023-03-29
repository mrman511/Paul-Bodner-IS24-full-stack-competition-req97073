import Link from "next/link";

export default function DeveloperList({styles, developers}){

  const parsedDevelopers = developers.map(developer => {
    return(
      <Link key={`developer-${developer}`} href={{path: '/developers', query: { name: developer }}}>
      <li>{ developer }</li>
      </Link>
    );
  })

  return (
    <ul>
      { parsedDevelopers }
    </ul>
  );
}
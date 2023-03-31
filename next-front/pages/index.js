import Head from 'next/head';
import NavList from '@/components/NavList';

import styles from '../styles/Home.module.css';


export default function Home() {
  return (
    <>
      <Head>
        <title>Van Assessment</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <header className={ styles.nav }>
          <NavList className={ styles }/>
        </header>
      </main>
    </>
  )
}

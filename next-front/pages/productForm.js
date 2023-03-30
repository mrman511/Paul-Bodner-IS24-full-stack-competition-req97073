import { useRouter } from "next/router";
import Head from "next/head";
import { useEffect, useState } from "react";

import NavList from "@/components/navList";
import ProductForm from "@/components/products/productForm";
import styles from "../styles/Home.module.css";

import getDevelopers from "@/utils/getDevelopers";
import getScrumMasters from "@/utils/getScrumMasters";
import getProducts from "@/utils/getProducts";

import saveProduct from "@/utils/saveProduct"
import validate from "@/utils/validate"

export default function addProduct({}){
  const [developers, setDevelopers] = useState();
  const [scrumMasters, setScrumMasters] = useState();
  const [product, setProduct] = useState();
  const [error, setError] = useState({});
  const router = useRouter();

  const handleSubmit = (e, selectedDevelopers) => {
    e.preventDefault();
    // const errorObj = error;

    if (selectedDevelopers.length === 0){
      setError({ ...error, "min_devs": 'Please Select between 1 and 5 developers' })
    } else {
      setError({ ...error, "min_devs": undefined})
    }

    if (validate(error, ['max_devs'])){
      const productObj = {
        id: product ? product.id  : undefined,
        start_date: product ? product.start_date  : undefined,
        title: e.target.title.value,
        owner: e.target.owner.value,
        scrum_master: e.target.scrum_master.value,
        methodology: e.target.methodology.value,
        developers: selectedDevelopers
      };

      saveProduct(productObj, { id: productObj.id }, router);
    } 
  }
  
  useEffect(() => {
    console.log('ERROR OBJ::', error )
    if (!developers){
      getDevelopers(setDevelopers, {})
    }

    if (!scrumMasters){
      getScrumMasters(setScrumMasters, {})
    }

    if (router.query.id && !product){
      getProducts(setProduct, { id: router.query.id })
    } 
  }, [setError, developers, product, router.query.id])

  return (
    <>
      <Head>
        <title>Van Assessment</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={ styles.nav }>
        <NavList />
      </header>
      <main>
        <h3>Add Product</h3> 
        { developers && <ProductForm 
          developers={ developers } 
          setDevelopers ={ setDevelopers }
          scrumMasters={ scrumMasters }
          product = { product }
          error = { error }
          setError = { setError }
          handleSubmit = { handleSubmit }
          />}  
      </main>
    </>
  );
}
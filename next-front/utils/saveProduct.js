import axios from "axios";
export default async function saveProduct(productObj, { id }, router){
  let res
  if (!id){
    res = await axios.post('http://localhost:3000/api/products/create/', productObj);
  } else {
    res = await axios.put(`http://localhost:3000/api/products/${id}/update/`, productObj)
  }
  if (!res.data.message){
    router.push('/products')
  } 
}
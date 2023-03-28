import axios from "axios";

export default async function saveProduct(productObj){
  const res = await axios.post('http://localhost:3000/api/products/create/', productObj);
  console.log(res)
}
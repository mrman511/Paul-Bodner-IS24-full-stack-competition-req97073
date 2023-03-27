import axios from "axios";

export default async function getProducts(setState){
  const response = await axios.get('http://localhost:3000/api/products/')
  setState(response.data)
}

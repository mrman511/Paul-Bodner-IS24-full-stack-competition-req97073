import axios from "axios";

export default async function getProducts(setState, { id, req }){
  const response = await axios.get(`http://localhost:3000/api/products/${ id ? id + '/': '' }${ req ? req + '/': '' }`)
  setState(response.data)
}

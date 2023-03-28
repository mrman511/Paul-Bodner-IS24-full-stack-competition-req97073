import axios from "axios";

export default async function deleteProduct(id, setState){
  const res = await axios.delete(`http://localhost:3000/api/products/${id}/delete/`);
  setState(undefined);
}
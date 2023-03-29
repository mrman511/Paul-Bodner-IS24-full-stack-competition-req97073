import axios from "axios";

export default async function getDevelopers(setState, { name }){
  const res =  await axios.get(`http://localhost:3000/api/developers/${ name ? name + '/' : '' }`);
  setState(res.data);
}
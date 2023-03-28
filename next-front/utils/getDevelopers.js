import axios from "axios";

export default async function getDevelopers(setState){
  const res =  await axios.get('http://localhost:3000/api/developers/');
 
  setState(res.data);
}
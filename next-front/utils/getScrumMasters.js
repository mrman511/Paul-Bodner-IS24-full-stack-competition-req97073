import axios from "axios";

export default async function getScrumMasters(setState, { name }){
  const res =  await axios.get(`http://localhost:3000/api/scrum_masters/${ name ? name + '/' : '' }`);
  setState(res.data);
}
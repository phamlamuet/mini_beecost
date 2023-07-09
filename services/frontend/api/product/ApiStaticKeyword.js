import configEndpoint from "@/api/ConfigEndpoint";
import axios from "axios";

const apiGetKeyWordStaticSearch = async (product_base_id)=>{
  const  url = urlApiProductStaticQuery();
  console.log("api url for get static keywords is " + url);
  try {
    const response = await axios.post(url, { "product_base_id": product_base_id } )
    return response.data?.['data']
  } catch (error) {
    console.error(error);
    return null;
  }
  return null;
}
const urlApiProductStaticQuery = () => {
  return `${configEndpoint.getUrlBeeCostBackend()}/product/query_suggest`
}

export default {
  apiGetKeyWordStaticSearch
}

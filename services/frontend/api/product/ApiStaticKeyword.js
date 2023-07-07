import configEndpoint from "@/api/ConfigEndpoint";
import axios from "axios";

const apiGetKeyWordStaticSearch = async (product_id)=>{
  const  url = urlApiProductStaticQuery();
  console.log("api url for get product review is " + url);
  try {
    const response = await axios.post(url, { params: { productBaseId: product_id } })
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

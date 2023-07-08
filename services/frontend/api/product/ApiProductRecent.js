import configEndpoint from "@/api/ConfigEndpoint";
import axios from "axios";

const ApiGetProductRecent = async (product_base_id) =>{
  const apiUrl = urlApiProductRecent();

  console.log("api url for get product recent is " + apiUrl);

  try {
    const response = await axios.get(apiUrl);
    return response.data?.['data']
  } catch (error) {
    console.error(error);
    return null;
  }
  return null;
}



export default {
  ApiGetProductRecent
}

const urlApiProductRecent = (limit = 20, page = 0) => {
  const t = 1876493;
  //just a random number, not sure how it works??
  return `${configEndpoint.getUrlBeeCostBackend()}/product/recent/v2?limit=${limit}&t=${t}`
}


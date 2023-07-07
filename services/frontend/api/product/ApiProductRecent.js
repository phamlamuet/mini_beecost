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
  ApiGetProductRelated
}

const urlApiProductRecent = (limit = 20, page = 0) => {
  // cache 15 phut / luot, chia cho 5 *60 * 1000 mini giay
  let timeStamp = Math.floor(new Date().valueOf() / 900000) // avoid cache
  return `${configEndpoint.getUrlBeeCostBackend()}/product/recent/v2?limit=${limit}&t=${timeStamp}`
}


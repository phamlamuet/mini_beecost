import configEndpoint from "@/api/ConfigEndpoint";
import axios from "axios";

const ApiGetProductRelated = async (productId, categoryBaseId) =>{
  const apiUrl = `${configEndpoint.getUrlBeeCostBackend()}/product/related?product_base_id=${productId}&category_base_id=${categoryBaseId}`;

  console.log("api url for get product related is " + apiUrl);

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

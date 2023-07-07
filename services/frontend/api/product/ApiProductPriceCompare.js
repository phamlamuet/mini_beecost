import configEndpoint from "@/api/ConfigEndpoint";
import axios from "axios";


const apiGetProductPriceCompare = async (product) =>{
  const apiUrl = urlApiProductPriceCompare();

  console.log("api url for get product price compare is " + apiUrl);

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
  apiGetProductPriceCompare
}

const urlApiProductPriceCompare = () => {
  return `${configEndpoint.getUrlBeeCostBackend()}/product/price_compare`
}



import getUrlBackend from "@/api/ConfigEndpoint";
// import axios from '@nuxtjs/axios'
import axios from 'axios'
import configEndpoint from "@/api/ConfigEndpoint";
const apiGetProductIdPlatform = async (productLink) => {
  const apiUrl = `${await configEndpoint.getUrlBackend()}/get_product_base_id`;
  console.log("api url is " + apiUrl);

  try {
    const response = await axios.get(apiUrl, { params: { url: productLink } });
    const product_id = response.data.product_base_id;
    return product_id
  } catch (error) {
    console.error(error);
    return null;
  }
}


export default {
  apiGetProductIdPlatform
}


import ConfigEndpoint from "@/api/ConfigEndpoint";
import axios from 'axios';
const apiGetProductDetail = async (product_id) =>{
  const url = urlApiProductDetail(product_id)
  try {
    const response = await axios.get(url);
    const data = response.data;
    // Process the data or return it as needed
    return data;
  } catch (error) {
    console.error(error);
    // Handle error or return an error message
    throw new Error('Failed to fetch product detail');
  }
}

const urlApiProductDetail = (productBaseId) => {
  return `${ConfigEndpoint.getUrlBackend()}/get_product_details?product_base_id=${productBaseId}`
}

export default {
  apiGetProductDetail
}

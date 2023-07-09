
import ConfigEndpoint from "@/api/ConfigEndpoint";
import axios from 'axios';
const apiGetProductDetail = async (product_id) =>{
  const url = urlApiProductDetail(product_id)
  try {
    const response = await axios.get(url)
    return response.data?.['data']
  } catch (e) {
    console.error(e)
  }
  return null
}
//should I call BeeCost api instead???
const urlApiProductDetail = (productBaseId) => {
  return `${ConfigEndpoint.getUrlBackend()}/get_product_details?product_base_id=${productBaseId}`
}


export default {
  apiGetProductDetail
}



import ConfigEndpoint from "@/api/ConfigEndpoint";
import axios from 'axios';
import configEndpoint from "@/api/ConfigEndpoint";

const apiGetProductHistoryPrice = async (productBaseId, priceCurrent) =>{
  let urlApi = urlApiProductHistoryPrice(productBaseId, priceCurrent)
  try {
    const response = await axios.get(urlApi)
    return response.data?.['data']
  } catch (e) {
    console.error(e)
  }
  return null
}

const urlApiProductHistoryPrice = (product_base_id, current_price) =>{
  let basePath = `${configEndpoint.getUrlBackend()}/product/history_price`

  if (current_price != null && String(current_price).length > 0) {
    return `${basePath}?product_base_id=${product_base_id}&price_current=${current_price}`
  }
  return `${basePath}?product_base_id=${product_base_id}`
}

export default {
  apiGetProductHistoryPrice
}

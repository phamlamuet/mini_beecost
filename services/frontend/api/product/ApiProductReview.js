
import configEndpoint from "@/api/ConfigEndpoint";
import axios from "axios";

const apiGetProductReview = async (product_base_id, limit = 5, page = 0) =>{
  const url = urlApiProductReview(product_base_id, limit, page);
  console.log("api url for get product review is " + url);
  try {
    const response = await axios.get(url);
    return response.data?.['data']
  } catch (error) {
    console.error(error);
    return null;
  }
  return null;
}


export default {
  apiGetProductReview
}

  const urlApiProductReview = (product_base_id, limit = 5, page = 0, reviewType = 0, type = 'new') => {
    const url = '';
    return url + `${configEndpoint.getUrlBeeCostBackend()}/product/review?product_base_id=${product_base_id}&limit=${limit}&page=${page}&review_type=${reviewType}&type=${type}`
}

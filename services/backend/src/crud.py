#crud method for shop, product, review, category
#this code is from beecost-backend
import re
def extract_product_base_id_from_url(url):

    base_id_platform = re.search(r"i\.(\d+)\.(\d+)", url)
    if base_id_platform is None:
        base_id_platform = re.search(r"product/(\d+)/(\d+)", url)
    if base_id_platform:
        product_id = base_id_platform.group(2)
        shop_id = base_id_platform.group(1)
        if product_id is not None and shop_id is not None:
            return calculate_product_base_id(platform_id=1,
                                                product_platform_id=product_id,
                                                product_seller_platform_id=shop_id)

def calculate_product_base_id(platform_id, product_platform_id, product_seller_platform_id=None):
    if platform_id is None:
        return None
    product_base_id = f'{platform_id}__{product_platform_id}'
    product_base_id += f'__{product_seller_platform_id}' if product_seller_platform_id is not None and str(
        product_platform_id) != '-1' else ''
    print('product_base_id  is ' + str(product_base_id))
    return product_base_id

def get_product_base_id_bee_cost(url: str):
    # Extract shop_id and product_id from the URL then concat them with "__"
    product_base_id = extract_product_base_id_from_url(url)    
    return {"product_base_id": product_base_id}

import requests

def get_product_details_beecost(product_base_id):
    url = f"https://apiv3.beecost.vn/product/detail?product_base_id={product_base_id}&type=new"

    response = requests.get(url)
    print(response)
    if response.status_code == 200:
        return response.json()
    else:
        return None

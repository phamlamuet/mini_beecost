from typing import Union
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from src.database import init_db
from src.crud import get_product_base_id_bee_cost, get_product_details_beecost
app = FastAPI()

# uvicorn src.main:app --reload
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# @app.on_event("startup")
# def on_startup():
#     init_db()

@app.get("/")
def home():
    return {"Mini-Beecost"}

@app.get("/get_product_base_id")
def get_product_base_id(url: str):
   return get_product_base_id_bee_cost(url)

@app.get("/get_product_details")
def get_product_details(product_base_id: str):
    return get_product_details_beecost(product_base_id)
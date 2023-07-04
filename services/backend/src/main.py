from typing import Union
from fastapi import FastAPI

app = FastAPI()


# uvicorn main:app --reload

@app.get("/")
def home():
    return {"Hello": "World"}

from typing import Union
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()


# uvicorn main:app --reload

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:8080"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {"Hello": "World123"}

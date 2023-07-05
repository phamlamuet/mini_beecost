from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from src import models
import os


# SQLALCHEMY_DATABASE_URL = "postgresql://lampham:lampwd@localhost:5432/beecost_mini_db"
# SQLALCHEMY_DATABASE_URL = "postgresql://lampham:lampwd@db:5432/beecost_mini_db"
SQLALCHEMY_DATABASE_URL = os.environ.get("DATABASE_URL")

if SQLALCHEMY_DATABASE_URL is None:
    SQLALCHEMY_DATABASE_URL = "postgresql://lampham:lampwd@db:5432/beecost_mini_db"
    print("SQLALCHEMY_DATABASE_URL environment variable is not set")


engine = create_engine(
    SQLALCHEMY_DATABASE_URL
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

def init_db():
    models.Base.metadata.create_all(bind=engine)
    print("Database initialized")


def get_db():
    db= SessionLocal()
    try:
        yield db
    except:
        db.close()
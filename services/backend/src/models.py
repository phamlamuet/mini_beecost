from sqlalchemy import Column, Integer, String, Float, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Product(Base):
    __tablename__ = 'product'

    id = Column(Integer, primary_key=True)
    name = Column(String)
    description = Column(String)
    price = Column(Float)
    stock = Column(Integer)
    image = Column(String)
    category_id = Column(Integer, ForeignKey('category.id'))
    created_at = Column(DateTime)
    updated_at = Column(DateTime)
    category = relationship("Category", back_populates="products")
    shop_id = Column(Integer, ForeignKey('shop.id'))
    shop = relationship("Shop", back_populates="products")
    reviews = relationship("Review", back_populates="product")

class Shop(Base):
    __tablename__ = 'shop'

    id = Column(Integer, primary_key=True)
    name = Column(String)
    description = Column(String)
    image = Column(String)
    created_at = Column(DateTime)
    updated_at = Column(DateTime)
    products = relationship("Product", back_populates="shop")

class Category(Base):
    __tablename__ = 'category'

    id = Column(Integer, primary_key=True)
    name = Column(String)
    description = Column(String)
    created_at = Column(DateTime)
    updated_at = Column(DateTime)
    products = relationship("Product", back_populates="category")

class Review(Base):
    __tablename__ = 'review'

    id = Column(Integer, primary_key=True)
    product_id = Column(Integer, ForeignKey('product.id'))
    text = Column(String)
    rating = Column(Float)
    created_at = Column(DateTime)
    updated_at = Column(DateTime)
    product = relationship("Product", back_populates="reviews")

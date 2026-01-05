from flask import request, Response, json
from flask_jwt_extended import create_access_token, create_refresh_token
from server.model.Products_model import Products_Model

class Products_Service:
  async def getAllProducts(self):
    model = Products_Model()
    listOfProducts = await model.getAllProducts()
    return {
      "content": listOfProducts,
    }
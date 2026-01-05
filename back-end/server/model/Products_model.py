from server.extensions import mongo

class Products_Model:  
  async def getAllProducts(self):
    products_collection = mongo.db.products
    products = list(products_collection.find({}, {'_id': 0}))
    return products
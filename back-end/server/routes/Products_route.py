from server.services.Products_service import Products_Service
from flask import jsonify

class Products_Routes:
  def __init__(self, app):
    self.app = app
    self.routes()

  def routes(self):
    @self.app.route('/products', methods=['GET'])
    async def products():
      service = Products_Service()
      response = await service.getAllProducts()
      print(response)
      return jsonify(response)
from server.routes.Test_route import Test_Routes
from server.routes.Products_route import Products_Routes

class Routes:
  def Tests(app):
    Test_Routes(app)

  def Products(app):
    Products_Routes(app)
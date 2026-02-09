from pydantic import BaseModel, Field, ConfigDict


class ProductCreate(BaseModel):
    name: str
    price: float
    stock: int

class ProductOut(ProductCreate):
    id: str = Field(alias="_id")
    model_config = ConfigDict(populate_by_name=True)
from typing import List
from fastapi import APIRouter
from ..core.database import products_collection
from ..schemas.product import ProductOut

router = APIRouter(prefix="/products", tags=["products"])

@router.get("/", response_model=List[ProductOut], response_model_by_alias=True)
async def get_products():
    docs = await products_collection.find().to_list(100)
    for d in docs:
        d["id"] = str(d["_id"])
        del d["_id"]

    return docs
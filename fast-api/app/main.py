from fastapi import FastAPI
from sqlalchemy.ext.asyncio import create_async_engine
from sqlalchemy import text  # ✅ import text()

DATABASE_URL = "postgresql+asyncpg://fastapi:fastapi@localhost:5432/fastapi_db"
engine = create_async_engine(DATABASE_URL, echo=True)

app = FastAPI()

@app.get("/healthz")
async def healthz():
    try:
        async with engine.connect() as conn:
            # ✅ use text() instead of plain string
            await conn.execute(text("SELECT 1"))
        return {"status": "ok", "db": "connected"}
    except Exception as e:
        return {"status": "error", "db": str(e)}


@app.get("/{name}")
def get_root(name:str=None):
    return {"message":"FastApi is running ","name":name}
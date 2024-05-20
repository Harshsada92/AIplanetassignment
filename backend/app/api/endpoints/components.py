from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app import crud, schemas
from app.database import SessionLocal

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/", response_model=schemas.Component)
def create_component(component: schemas.ComponentCreate, db: Session = Depends(get_db)):
    return crud.create_component(db=db, component=component)

@router.get("/{component_id}", response_model=schemas.Component)
def read_component(component_id: int, db: Session = Depends(get_db)):
    db_component = crud.get_component(db, component_id=component_id)
    if db_component is None:
        raise HTTPException(status_code=404, detail="Component not found")
    return db_component

from sqlalchemy.orm import Session
from . import models, schemas

def get_component(db: Session, component_id: int):
    return db.query(models.Component).filter(models.Component.id == component_id).first()

def get_components(db: Session, skip: int = 0, limit: int = 10):
    return db.query(models.Component).offset(skip).limit(limit).all()

def create_component(db: Session, component: schemas.ComponentCreate):
    db_component = models.Component(name=component.name, config=component.config)
    db.add(db_component)
    db.commit()
    db.refresh(db_component)
    return db_component

from pydantic import BaseModel

class ComponentBase(BaseModel):
    name: str
    config: str

class ComponentCreate(ComponentBase):
    pass

class Component(ComponentBase):
    id: int

    class Config:
        orm_mode = True

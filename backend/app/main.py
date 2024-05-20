from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict, Any

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Adjust according to your frontend's origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Component(BaseModel):
    name: str
    config: Dict[str, Any]

class Workflow(BaseModel):
    components: List[Component]

@app.post("/build")
def build_workflow(workflow: Workflow):
    # Validate the workflow
    if not workflow.components:
        raise HTTPException(status_code=400, detail="No components in workflow")
    for component in workflow.components:
        if not component.name:
            raise HTTPException(status_code=400, detail="Component name is missing")
        if not isinstance(component.config, dict):
            raise HTTPException(status_code=400, detail="Component config should be a dictionary")
    return {"message": "Workflow built successfully"}

@app.post("/run")
def run_workflow(workflow: Workflow):
    results = []
    for component in workflow.components:
       
        result = {"component": component.name, "status": "executed", "output": f"Processed with config {component.config}"}
        results.append(result)
    return {"message": "Workflow executed successfully", "results": results}

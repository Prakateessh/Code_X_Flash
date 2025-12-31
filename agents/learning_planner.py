from crewai import Agent
from core.llm import ollama_llm

learning_planner = Agent(
    role="Learning Planner",
    goal="Create learning roadmap",
    backstory="Curriculum designer",
    llm=ollama_llm,
    verbose=True
)

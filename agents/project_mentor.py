from crewai import Agent
from core.llm import ollama_llm

project_mentor = Agent(
    role="Project Mentor",
    goal="Suggest practical projects",
    backstory="Industry mentor",
    llm=ollama_llm,
    verbose=True
)

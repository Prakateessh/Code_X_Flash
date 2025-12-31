from crewai import Agent
from core.llm import ollama_llm

project_mentor = Agent(
    role="Project Mentor",
    goal="Suggest portfolio projects",
    backstory="You help candidates strengthen portfolios with projects.",
    llm=ollama_llm,
    verbose=False,
)

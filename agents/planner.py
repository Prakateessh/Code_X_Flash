from crewai import Agent
from core.llm import ollama_llm

planner = Agent(
    role="Career Planner",
    goal="Combine all analyses into a final career roadmap",
    backstory="Strategic career planning expert.",
    llm=ollama_llm,
    verbose=False
)

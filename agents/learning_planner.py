from crewai import Agent
from core.llm import ollama_llm

learning_planner = Agent(
    role="Learning Planner",
    goal="Create an upskilling roadmap",
    backstory="You design practical learning paths for professionals.",
    llm=ollama_llm,
    verbose=False,
)

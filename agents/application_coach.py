from crewai import Agent
from core.llm import ollama_llm

application_coach = Agent(
    role="Application Coach",
    goal="Give interview and application advice",
    backstory="Senior career coach",
    llm=ollama_llm,
    verbose=True
)

from crewai import Agent
from core.llm import ollama_llm

profile_curator = Agent(
    role="Profile Curator",
    goal="Extract skills and roles from resume",
    backstory="Expert resume analyst",
    llm=ollama_llm,
    verbose=True
)

from crewai import Agent
from core.llm import ollama_llm

profile_curator = Agent(
    role="Profile Curator",
    goal="Extract skills and suitable roles from a resume",
    backstory="You analyze resumes and identify core skills and job roles.",
    llm=ollama_llm,
    verbose=False,
)

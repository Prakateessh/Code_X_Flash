from crewai import Agent
from core.llm import ollama_llm

job_matcher = Agent(
    role="Job Matcher",
    goal="Match candidate to job roles",
    backstory="Recruitment AI specialist",
    llm=ollama_llm,
    verbose=True
)

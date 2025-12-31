from crewai import Agent
from core.llm import ollama_llm

job_matcher = Agent(
    role="Job Matcher",
    goal="Match candidate profiles to job roles",
    backstory="You align candidates with suitable job openings.",
    llm=ollama_llm,
    verbose=False,
)

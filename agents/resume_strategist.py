from crewai import Agent
from core.llm import ollama_llm

resume_strategist = Agent(
    role="Resume Strategist",
    goal="Optimize resume content",
    backstory="ATS optimization expert",
    llm=ollama_llm,
    verbose=True
)

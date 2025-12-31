from crewai import Agent
from core.llm import ollama_llm

resume_strategist = Agent(
    role="Resume Strategist",
    goal="Improve resume effectiveness",
    backstory="You optimize resumes for ATS and recruiters.",
    llm=ollama_llm,
    verbose=False,
)

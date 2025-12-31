from crewai import Agent
from core.llm import ollama_llm

skill_gap_analyst = Agent(
    role="Skill Gap Analyst",
    goal="Identify missing skills",
    backstory="Upskilling strategist",
    llm=ollama_llm,
    verbose=True
)

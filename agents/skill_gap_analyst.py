from crewai import Agent
from core.llm import ollama_llm

skill_gap_analyst = Agent(
    role="Skill Gap Analyst",
    goal="Identify missing skills for target roles",
    backstory="You compare candidate skills with industry requirements.",
    llm=ollama_llm,
    verbose=False,
)

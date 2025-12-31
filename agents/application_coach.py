from crewai import Agent
from core.llm import ollama_llm

application_coach = Agent(
    role="Application Coach",
    goal="Guide job application strategy",
    backstory="You advise candidates on applications, referrals, and interviews.",
    llm=ollama_llm,
    verbose=False,
)

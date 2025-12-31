from crewai import Agent
from core.llm import ollama_llm

market_analyst = Agent(
    role="Market Analyst",
    goal="Analyze job market demand based on skills and roles",
    backstory="You study hiring trends and market demand.",
    llm=ollama_llm,
    verbose=False,
)

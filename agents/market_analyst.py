from crewai import Agent
from core.llm import ollama_llm

market_analyst = Agent(
    role="Market Analyst",
    goal="Analyze job market demand",
    backstory="Tech hiring market expert",
    llm=ollama_llm,
    verbose=True
)

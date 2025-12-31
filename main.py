from crewai import Crew, Task, Process

from agents.profile_curator import profile_curator
from agents.market_analyst import market_analyst

# -----------------------------
# INPUT (later this can come from API / UI)
# -----------------------------
resume_text = (
    "Experienced Python developer with FastAPI, SQL, ML, and Docker."
)

# -----------------------------
# TASK 1: PROFILE CURATOR
# -----------------------------
task_profile = Task(
    description=(
        "Extract skills and suitable roles from the resume below.\n\n"
        f"Resume:\n{resume_text}\n\n"
        "STRICT RULES:\n"
        "- Output ONLY valid JSON\n"
        "- No explanations\n"
        "- No thoughts\n"
        "- No markdown\n\n"
        "JSON FORMAT:\n"
        "{ \"skills\": [], \"roles\": [] }"
    ),
    agent=profile_curator,
    expected_output="Valid JSON only"
)

# -----------------------------
# TASK 2: MARKET ANALYST
# -----------------------------
task_market = Task(
    description=(
        "Using the extracted skills and roles, analyze market demand.\n\n"
        "STRICT RULES:\n"
        "- Output ONLY valid JSON\n"
        "- No explanations\n"
        "- No notes\n"
        "- No markdown\n\n"
        "JSON FORMAT:\n"
        "{ \"top_roles\": [], \"missing_skills\": [] }"
    ),
    agent=market_analyst,
    expected_output="Valid JSON only"
)

# -----------------------------
# CREW
# -----------------------------
crew = Crew(
    agents=[
        profile_curator,
        market_analyst,
    ],
    tasks=[
        task_profile,
        task_market,
    ],
    process=Process.sequential,
    verbose=True,
)

# -----------------------------
# RUN
# -----------------------------
if __name__ == "__main__":
    result = crew.kickoff()
    print("\nFINAL RESULT:\n")
    print(result)

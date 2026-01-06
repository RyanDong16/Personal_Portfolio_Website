# Portfolio Chatbot Backend

This folder contains the backend service that powers the AI chatbot on my personal portfolio website.

This chatbot backend is a production-style adaptation of my AI-Agent project, refactored for use with my personal portfolio website.

## Tech Stack
- Python
- FastAPI
- LangChain + LangGraph
- Google Gemini (free tier)

## Setup

```bash
pip install -r requirements.txt
uvicorn main:app --reload

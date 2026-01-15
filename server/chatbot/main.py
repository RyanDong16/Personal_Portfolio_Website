# Portfolio_Website/chatbot/main.py
# Safe wrapper for frontend development.
# Does NOT call Gemini directly. Frontend should call AI-Agent backend instead.

import os

# Load environment variables (if needed for frontend config)
from dotenv import load_dotenv
load_dotenv()

# Backend URL config (default to local AI-Agent)
BACKEND_URL = os.getenv("BACKEND_URL", "http://127.0.0.1:8000")

def get_backend_url():
    """
    Return the backend API URL for the frontend to call.
    """
    return BACKEND_URL

# Optional: mock chatbot responses for local frontend testing
def mock_chat_response(user_message: str) -> str:
    """
    Return a canned response for frontend testing.
    """
    return f"🤖 Mock response: You said '{user_message}'"

if __name__ == "__main__":
    # Example usage for local testing
    msg = "Hello from frontend!"
    print("Backend URL:", get_backend_url())
    print(mock_chat_response(msg))

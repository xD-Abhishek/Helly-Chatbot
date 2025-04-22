# Helly Chatbot

Helly Chatbot is an AI-powered conversational assistant built with Python, Django, and the Gemini API. It delivers dynamic, context-aware replies in a clean, responsive interface.

## 🚀 Features

- **Real-time AI Responses**: Powered by the Gemini API for natural, human-like conversations
- **Django Backend**: Robust server-side logic, user session handling, and logging
- **Responsive UI**: HTML/CSS/JavaScript front end with mobile-friendly design
- **Conversation History**: Stores chat logs for analysis and improvement
- **Easy Customization**: Tweak templates and styles to fit any brand or use-case

## 🛠️ Getting Started

### Prerequisites

- Python 3.x
- Django
- Gemini API credentials

### Installation

```bash
git clone https://github.com/xD-Abhishek/Helly-Chatbot.git
cd Helly-Chatbot
python -m venv venv             # Optional but recommended
source venv/bin/activate        # (macOS/Linux)
venv\Scripts\activate           # (Windows)
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
bash'''

## ⚙️ Configuration

Copy .env.example to .env
Add your GEMINI_API_KEY inside .env
Restart the server
Update the configuration files to connect the chatbot with your own API and integrate any additional features you need.
🖼️ Screenshots


## 🤝 Contributing

Fork this repository
Create a new branch (git checkout -b feature/AwesomeFeature)
Commit your changes (git commit -m 'Add some feature')
Push to the branch (git push origin feature/AwesomeFeature)
Open a Pull Request
Contribution Guidelines:
Ensure all new code is well-commented.
Follow the PEP 8 Python style guide for Python code.
Ensure your changes pass all tests and run correctly on both mobile and desktop browsers.

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

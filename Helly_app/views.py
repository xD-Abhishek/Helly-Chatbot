import google.generativeai as genai
from django.http import JsonResponse
from django.shortcuts import render

from Helly.config import GOOGLE_API_KEY

genai.configure(api_key="YOUR-API-KEY")
model = genai.GenerativeModel()
chat = model.start_chat(history=[])


def start_helly(request):
    if request.method == "POST":
        user_input = request.POST.get("user_input")

        try:
            response = chat.send_message(user_input)

            return JsonResponse({"response": response.text})
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)

    return render(request, "Helly_app/chat.html")

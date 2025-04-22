import google.generativeai as genai

API_KEY = "AIzaSyDwub8jiBS9c85GeysV-vxmnCaCn8UvyVk"

genai.configure(api_key=API_KEY)
model = genai.GenerativeModel()
user_input = ""
while user_input != "!exit":
    user_input = input("you:")
response = model.generate_content(user_input)
print ("gemini: ",response.text)


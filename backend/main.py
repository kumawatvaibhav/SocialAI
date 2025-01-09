from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "https://social-ai-inky.vercel.app/"}}, supports_credentials=True)

BASE_API_URL = "https://api.langflow.astra.datastax.com"
LANGFLOW_ID = "260dcf0a-42f6-4ca3-98c4-e26ec3a625bf"
FLOW_ID = "19c8dbb7-db16-42f1-a5fe-030ed14e79ac"
APPLICATION = "AstraCS:xpcWpCfbRklnjXgGETbedvCX:0cf0e6ed84ce6d15de86ae1e366122ef09f87fee24b7e5a20660c4aaca86c4f1"

@app.route("/analyze", methods=["POST"])
def analyze():
    data = request.json
    text = data.get("text")
    if not text:
        return jsonify({"error": "Text input is required"}), 400
    
    try:
        api_url = f"{BASE_API_URL}/lf/{LANGFLOW_ID}/api/v1/run/{FLOW_ID}"
        payload = {
            "input_value": text,
            "output_type": "chat",
            "input_type": "chat",
        }
        headers = {
            "Authorization": "Bearer " + APPLICATION,
            "Content-Type": "application/json",
        }
        response = requests.post(api_url, json=payload, headers=headers)
        response_data = response.json()
        print(response_data)
        return jsonify(response_data)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)

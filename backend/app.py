from flask import Flask, request, jsonify
from flask_cors import CORS
from models.predictor import load_model, predict_personality
import joblib
import re
import nltk
from nltk.corpus import words

# Download required corpus if not already present
nltk.download('words')

app = Flask(__name__)
CORS(app)

# Load the model once when the server starts
model_data = load_model()

# English word list for validation
english_vocab = set(words.words())

# Input validation function
def is_valid_text(text):
    # Require at least 3 words
    words_list = text.strip().split()
    if len(words_list) < 3:
        return False

    # Basic character check
    if not re.match(r"^[a-zA-Z0-9\s.,!?;:'\"()-]+$", text):
        return False

    # Word validity check: at least 30% should be English words
    valid_words = [word.lower() for word in words_list if word.lower() in english_vocab]
    if len(valid_words) / len(words_list) < 0.3:
        return False

    return True

@app.route('/')
def home():
    return "Server is Running 🚀"

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    text = data.get('text', '').strip()

    if not text:
        return jsonify({'error': 'No text provided'}), 400

    if not is_valid_text(text):
        return jsonify({'error': 'Please provide a meaningful sentence (at least 3 words with valid content).'}), 400

    try:
        # Predict using the model
        scores = predict_personality(model_data, text)

        if not scores:
            return jsonify({'error': 'Prediction failed'}), 500

        return jsonify({
            'success': True,
            'scores': scores
        })

    except Exception as e:
        print(f"Prediction error: {str(e)}")
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)

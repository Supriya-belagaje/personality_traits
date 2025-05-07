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
    # Strip extra spaces and split text into words
    words_list = text.strip().split()
    print(f"Words List: {words_list}")  # Log words to inspect them

    # Ensure the text has at least 3 words
    if len(words_list) < 3:
        print("Text has less than 3 words.")  # Log specific validation failure
        return False

    # Remove punctuation from the end of words and check that only valid characters are present
    words_list = [re.sub(r'[^\w\s.,!?;:\'\"()-]', '', word) for word in words_list]

    # Basic character check for valid alphanumeric characters and allowed punctuation
    if not all(re.match(r"^[a-zA-Z0-9\s.,!?;:'\"()-]+$", word) for word in words_list):
        print("Text contains invalid characters.")  # Log specific validation failure
        return False

    # Check that at least 30% of words are valid English words
    valid_words = [word.lower() for word in words_list if word.lower() in english_vocab]
    print(f"Valid Words: {valid_words}")  # Log valid words to inspect them

    # Ensure at least 30% of words are valid English words
    if len(valid_words) / len(words_list) < 0.3:
        print("Text has less than 30% valid English words.")  # Log specific validation failure
        return False

    # Additional check for sentence structure (optional)
    if not any(word.istitle() for word in words_list):
        print("Text does not contain any capitalized words.")  # Log specific validation failure
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

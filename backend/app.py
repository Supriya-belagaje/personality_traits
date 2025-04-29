from flask import Flask, request, jsonify
from flask_cors import CORS
from models.predictor import load_model, predict_personality
import joblib

app = Flask(__name__)
CORS(app)

# Load the model once when the server starts
model_data = load_model()

@app.route('/')
def home():
    return "Server is Running 🚀"

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    text = data.get('text', '')

    if not text:
        return jsonify({'error': 'No text provided'}), 400

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

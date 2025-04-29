import joblib

def load_model():
    model = joblib.load('backend/models/personality_model.pkl')  # adjust path if needed
    return model

def predict_personality(model, text):
    features = [text]
    scores = model.predict(features)[0]

    traits = ['openness', 'conscientiousness', 'extraversion', 'agreeableness', 'neuroticism']
    result = {trait: float(score) for trait, score in zip(traits, scores)}

    return result
import joblib

def load_model():
    vectorizer, model = joblib.load('backend/models/personality_model.pkl')
    return vectorizer, model

def predict_personality(model_data, text):
    vectorizer, model = model_data
    X = vectorizer.transform([text])
    prediction = model.predict(X)[0]

def predict_personality(model_data, text):
    vectorizer, model = model_data
    X = vectorizer.transform([text])
    prediction = model.predict(X)[0]

    traits = [
        'openness', 'conscientiousness', 'extraversion', 'agreeableness', 'neuroticism',
        'dominance', 'influence', 'steadiness', 'compliance'
    ]
    
    result = {trait: float(score) for trait, score in zip(traits, prediction)}

    return result
    result = {trait: float(score) for trait, score in zip(traits, prediction)}

    return result

import pandas as pd
import os
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
import joblib
from sklearn.feature_extraction.text import TfidfVectorizer

# Step 1: Read the Excel file
df = pd.read_excel('nlp1.xlsx')

# Step 2: Inspect your columns
print(df.columns)

# Step 3: Prepare your data
df = df.dropna(subset=['Openness', 'Conscientiousness', 'Extraversion', 'Agreeableness', 'Neuroticism', 'Dominance', 'Influence', 'Steadiness', 'Compliance'])
X = df['Text']  # features (text data)
y = df[['Openness', 'Conscientiousness', 'Extraversion', 'Agreeableness', 'Neuroticism',
        'Dominance', 'Influence', 'Steadiness', 'Compliance']]
 # target labels

# Step 4: Convert text into features
vectorizer = TfidfVectorizer()
X_vectors = vectorizer.fit_transform(X)

# Step 5: Train a model
model = RandomForestRegressor()
model.fit(X_vectors, y)

# Step 6: Make sure the folder exists
os.makedirs('backend/models', exist_ok=True)

# Step 7: Save both vectorizer and model
joblib.dump((vectorizer, model), 'backend/models/personality_model.pkl')

print("✅ Model trained and saved to 'backend/models/personality_model.pkl'")

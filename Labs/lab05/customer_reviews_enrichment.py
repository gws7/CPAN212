import pandas as pd
import pyodbc
import nltk
from nltk.sentiment.vader import SentimentIntensityAnalyzer

# Download the VADER lexicon (only needed once)
nltk.download('vader_lexicon')

# Connect to SQL Server and fetch customer review data
def fetch_data_from_sql():
    conn_str = (
        "Driver={SQL Server};"
        "Server=GWS07-LAPTOP\\SQLEXPRESS;"
        "Database=PortfolioProject_MarketingAnalytics;"
        "Trusted_Connection=yes;"
    )
    conn = pyodbc.connect(conn_str)
    query = "SELECT ReviewID, CustomerID, ProductID, ReviewDate, Rating, ReviewText FROM dbo.customer_reviews"
    df = pd.read_sql(query, conn)
    conn.close()
    return df

customer_reviews_df = fetch_data_from_sql()
sia = SentimentIntensityAnalyzer()

# Get compound sentiment score from review text
def calculate_sentiment(review):
    return sia.polarity_scores(review)['compound']

# Categorize sentiment using score and rating
def categorize_sentiment(score, rating):
    if score > 0.05:
        if rating >= 4:
            return 'Positive'
        elif rating == 3:
            return 'Mixed Positive'
        else:
            return 'Mixed Negative'
    elif score < -0.05:
        if rating <= 2:
            return 'Negative'
        elif rating == 3:
            return 'Mixed Negative'
        else:
            return 'Mixed Positive'
    else:
        if rating >= 4:
            return 'Positive'
        elif rating <= 2:
            return 'Negative'
        else:
            return 'Neutral'

# Bucket sentiment score into ranges
def sentiment_bucket(score):
    if score >= 0.5:
        return '0.5 to 1.0'
    elif 0.0 <= score < 0.5:
        return '0.0 to 0.49'
    elif -0.5 <= score < 0.0:
        return '-0.49 to 0.0'
    else:
        return '-1.0 to -0.5'

# Apply sentiment processing
customer_reviews_df['SentimentScore'] = customer_reviews_df['ReviewText'].apply(calculate_sentiment)
customer_reviews_df['SentimentCategory'] = customer_reviews_df.apply(
    lambda row: categorize_sentiment(row['SentimentScore'], row['Rating']), axis=1)
customer_reviews_df['SentimentBucket'] = customer_reviews_df['SentimentScore'].apply(sentiment_bucket)

# Preview and export
print(customer_reviews_df.head())
customer_reviews_df.to_csv('fact_customer_reviews_with_sentiment.csv', index=False)


# 🚀 Medical Chatbot with LLMs, LangChain, RAG & Flask

This project demonstrates an **end-to-end Generative AI pipeline** for building, deploying, and managing a **Medical Chatbot**. It combines **Large Language Models (LLMs)**, **LangChain**, **Pinecone vector search**, and **Retrieval-Augmented Generation (RAG)**, deployed via a **Flask API**.

The chatbot can understand **medical queries**, retrieve relevant knowledge, and generate **intelligent real-time responses**.

---

## 📌 Features

* Integrates **LLMs** for natural conversation
* Uses **LangChain** for orchestration & prompt chaining
* Implements **RAG (Retrieval-Augmented Generation)** for context-aware answers
* Stores & retrieves embeddings using **Pinecone Vector DB**
* Exposes the chatbot via **Flask API**
* Supports **real-time medical Q\&A**
* Modular design for **scalability & deployment** (Docker/AWS ready)

---

## 📂 Project Structure

```
Medical-Assistant-Chatbot-LLM-LangChain-Flask-RAG-AWS-CI-CD-Pinecone-GenAI/
├── src/
│   ├── __init__.py           # Package initializer
│   ├── helper.py             # Helper functions (preprocessing, utilities)
│   └── prompt.py             # Prompt templates for LLMs
├── research/
│   └── trials.ipynb          # Experiments with embeddings and RAG
├── app.py                    # Flask app entry point
├── setup.py                  # Project packaging & dependencies
├── .env                      # Environment variables (API keys, configs)
├── requirements.txt          # Python dependencies
└── README.md                 # Project documentation
```

---

## ⚙️ Installation

```bash
# Clone the repository
git clone https://github.com/vipunsanjana/Medical-Assistant-Chatbot-LLM-LangChain-Flask-RAG-AWS-CI-CD-Pinecone-GenAI.git
cd Medical-Assistant-Chatbot-LLM-LangChain-Flask-RAG-AWS-CI-CD-Pinecone-GenAI

# Install dependencies
pip install -r requirements.txt

# Set environment variables (API keys, Pinecone config, etc.)
export OPENAI_API_KEY="your_openai_api_key"
export PINECONE_API_KEY="your_pinecone_api_key"

# Run Flask API
python app.py
```

---

## 🚀 Usage

1. **Start the API**:

```bash
python app.py
```

2. **Send requests**:

* `GET /` → Health check
* `POST /chat` → Send medical queries

Example input:

```json
{
  "query": "What are the symptoms of diabetes?"
}
```

Example response:

```json
{
  "answer": "Common symptoms of diabetes include increased thirst, frequent urination, fatigue, and blurred vision."
}
```

3. **Deploy with Docker**:

```bash
docker build -t medical-chatbot .
docker run -p 5000:5000 medical-chatbot
```

---

## 📊 Example Conversation

```
User: Can you explain hypertension symptoms?  
Bot: Hypertension (high blood pressure) often has no symptoms, but severe cases may cause headaches, dizziness, or vision problems.
```

---

## 🛠️ Tech Stack

* Python 3.9+
* Flask
* LangChain
* Pinecone (Vector DB)
* OpenAI / LLM APIs
* Docker & CI/CD
* AWS

---

## 👨‍💻 Author

**Vipun Sanjana**
*Software Engineer | ML & Full Stack | GenAI & DevOps*

---

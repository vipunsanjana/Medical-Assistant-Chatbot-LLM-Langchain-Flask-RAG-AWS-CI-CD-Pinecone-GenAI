# 🚀 Medical Chatbot with LLMs, LangChain, RAG & Flask

This project demonstrates an **end-to-end Generative AI pipeline** for building, deploying, and managing a **Medical Chatbot**. It combines **Large Language Models (LLMs)**, **LangChain**, **Pinecone vector search**, and **Retrieval-Augmented Generation (RAG)**, deployed via a **Flask API** with **CI/CD automation using GitHub Actions, AWS ECR, and ECS**.

The chatbot can understand **medical queries**, retrieve relevant knowledge, and generate **intelligent real-time responses**.

---

## 📌 Features

* Integrates **LLMs** for natural conversation
* Uses **LangChain** for orchestration & prompt chaining
* Implements **RAG (Retrieval-Augmented Generation)** for context-aware answers
* Stores & retrieves embeddings using **Pinecone Vector DB**
* Exposes the chatbot via **Flask API**
* Supports **real-time medical Q\&A**
* **CI/CD Pipeline** with GitHub Actions, AWS ECR, and ECS
* **Dockerized** application for easy deployment
* Modular design for **scalability & maintainability**

---

## 📂 Project Structure

```
Medical-Assistant-Chatbot-LLM-LangChain-Flask-RAG-AWS-CI-CD-Pinecone-GenAI/
├── .github/workflows/          # GitHub Actions CI/CD workflows
│   └── cl_cdyml.yml            # Deploy LLM + React to ECS
├── client/                     # Frontend React application
├── llm/                        # Backend LLM application (Flask + Python)
```

---

## ⚙️ Installation & Setup

### Local Development

```bash
# Clone the repository
git clone https://github.com/vipunsanjana/Medical-Assistant-Chatbot-LLM-LangChain-Flask-RAG-AWS-CI-CD-Pinecone-GenAI.git
cd Medical-Assistant-Chatbot-LLM-LangChain-Flask-RAG-AWS-CI-CD-Pinecone-GenAI

# Backend dependencies (LLM)
cd llm
pip install -r requirements.txt

# Set environment variables
export OPENAI_API_KEY="your_openai_api_key"
export PINECONE_API_KEY="your_pinecone_api_key"
export AWS_ACCESS_KEY_ID="your_aws_access_key"
export AWS_SECRET_ACCESS_KEY="your_aws_secret_key"

# Run Flask application
python app.py
```

### Frontend Setup (React)

```bash
cd ../client
npm install
npm start
```

---

## 🔄 CI/CD Pipeline (GitHub Actions + AWS)

This project automates CI/CD using **GitHub Actions**, **AWS ECR**, and **ECS**. Workflow is in `.github/workflows/cl_cdyml.yml`.

### Pipeline Steps

1. Push to `main` branch triggers workflow
2. Build Docker images for **LLM backend (`llm/`)** and **React frontend (`client/`)**
3. Push images to **AWS ECR**
4. Deploy updated containers to **AWS ECS**
5. Automatic health checks and rollback if needed

### GitHub Secrets Required

* `AWS_ACCESS_KEY_ID`
* `AWS_SECRET_ACCESS_KEY`
* `AWS_DEFAULT_REGION`
* `ECR_LLM_REPO`
* `ECR_REACT_REPO`
* `ECS_CLUSTER`
* `ECS_LLM_SERVICE`
* `ECS_REACT_SERVICE`
* `OPENAI_API_KEY`
* `PINECONE_API_KEY`
* `VITE_API_URL`

---

## 🚀 Usage

### Start the Application

```bash
# Backend (Flask)
cd llm
python app.py

# Frontend (React)
cd ../client
npm run dev
```

### API Endpoints

* `GET /health` → Health check
* `POST /chat` → Medical query endpoint

#### Example Request

```json
{
  "query": "What are the symptoms of diabetes?"
}
```

#### Example Response

```json
{
  "answer": "Common symptoms of diabetes include increased thirst, frequent urination, fatigue, and blurred vision."
}
```

---

## 🛠️ Tech Stack

* **Backend**: Python 3.9+, Flask
* **AI/ML**: LangChain, OpenAI GPT, Pinecone Vector DB
* **Frontend**: React
* **Deployment**: Docker, AWS ECR, AWS ECS
* **CI/CD**: GitHub Actions
* **Monitoring**: AWS CloudWatch

---

## 📊 Example Conversation

```
User: Can you explain hypertension symptoms?
Bot: Hypertension (high blood pressure) often has no symptoms, but severe cases may cause headaches, dizziness, or vision problems. Regular blood pressure checks are recommended for early detection.
```

---

## 📄 License

This project is licensed under the **Apache License 2.0**. See [LICENSE](LICENSE) for details.

---

## 👨‍💻 Author

**Vipun Sanjana**
Software Engineer | ML & Full Stack | GenAI & DevOps
[GitHub](https://github.com/vipunsanjana) | [LinkedIn](https://linkedin.com/in/vipunsanjana)

---

from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os

from src.helper import download_embeddings
from src.prompt import system_prompt
from langchain_pinecone import PineconeVectorStore
from langchain_openai import ChatOpenAI
from langchain.chains import create_retrieval_chain
from langchain.chains.combine_documents import create_stuff_documents_chain
from langchain_core.prompts import ChatPromptTemplate

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

load_dotenv()
PINECONE_API_KEY = os.environ.get('PINECONE_API_KEY')
OPENAI_API_KEY = os.environ.get('OPENAI_API_KEY')
os.environ["PINECONE_API_KEY"] = PINECONE_API_KEY
os.environ["OPENAI_API_KEY"] = OPENAI_API_KEY

# Initialize embeddings and Pinecone vector store
embeddings = download_embeddings()
index_name = "medical-chatbot"

docsearch = PineconeVectorStore.from_existing_index(
    index_name=index_name,
    embedding=embeddings
)
retriever = docsearch.as_retriever(search_type="similarity", search_kwargs={"k":3})

chat_model = ChatOpenAI(model="gpt-4o")

prompt = ChatPromptTemplate.from_messages(
    [
        ("system", system_prompt),
        ("human", "{input}"),
    ]
)

# Create document chain
question_answer_chain = create_stuff_documents_chain(chat_model, prompt)

# Create retrieval-augmented generation chain
rag_chain = create_retrieval_chain(retriever, question_answer_chain)

# Health check endpoint
@app.route("/health", methods=["GET"])
def health_check():
    return jsonify({"status": "healthy", "message": "healthy"}), 200

# Chat endpoint
@app.route("/chat", methods=["POST"])
def chat():
    data = request.json
    msg = data.get("msg", "")
    response = rag_chain.invoke({"input": msg})
    return jsonify({"answer": response["answer"]})

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=8080, debug=True)

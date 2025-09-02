from langchain.document_loaders import PyPDFLoader, DirectoryLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.embeddings import HuggingFaceEmbeddings
from typing import List, Optional
from langchain.schema import Document
import logging

logging.basicConfig(level=logging.INFO)

def load_pdf(data):
    """
    Load and extract text from all PDF files in a given directory.
    """
    loader = DirectoryLoader(data, glob="**/*.pdf", loader_cls=PyPDFLoader) 
    try:
        documents = loader.load()
        logging.info(f"Loaded {len(documents)} PDF documents from '{data}'.")
        return documents
    except Exception as e:
        logging.error(f"Failed to load PDFs from '{data}': {e}")
        raise


def filter_to_minimal_docs(docs: List[Document]) -> List[Document]:
    """
    Copy documents while preserving the 'source' metadata if present.

    Args:
        docs (List[Document]): List of LangChain Document objects.

    Returns:
        List[Document]: List of Document objects with preserved source metadata.
    """
    minimal_docs: List[Document] = []

    for doc in docs:
        # Preserve 'source' metadata if exists, otherwise empty dict
        src_metadata = {"source": doc.metadata.get("source")} if doc.metadata.get("source") else {}
        minimal_docs.append(Document(page_content=doc.page_content, metadata=src_metadata))

    return minimal_docs

def split_documents(minimal_docs: List[Document]) -> List[Document]:
    """
    Split documents into smaller chunks using RecursiveCharacterTextSplitter.

    Args:
        minimal_docs (List[Document]): List of LangChain Document objects.

    Returns:
        List[Document]: List of chunked Document objects.
    """
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=500,
        chunk_overlap=20
    )
    chunked_docs = text_splitter.split_documents(minimal_docs)
    return chunked_docs

def download_embeddings(model_name: Optional[str] = None) -> HuggingFaceEmbeddings:
    """
    Load and return a HuggingFaceEmbeddings model.

    Args:
        model_name (str, optional): Name of the HuggingFace model to load.
                                    Defaults to "BAAI/bge-small-en-v1.5" if None.

    Returns:
        HuggingFaceEmbeddings: The loaded embeddings model.
    """
    if model_name is None:
        model_name = "BAAI/bge-small-en-v1.5"

    try:
        embeddings = HuggingFaceEmbeddings(model_name=model_name)
        logging.info(f"Embeddings model '{model_name}' loaded successfully.")
        return embeddings
    except Exception as e:
        logging.error(f"Failed to load embeddings model '{model_name}': {e}")
        raise

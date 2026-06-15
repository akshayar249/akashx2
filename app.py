import streamlit as st
import json
import os
from deep_translator import GoogleTranslator

# ---------------- PAGE CONFIG ----------------
st.set_page_config(
    page_title="AkashX Docs",
    layout="wide",
    initial_sidebar_state="expanded"
)

# ---------------- SAFE PATH HANDLING ----------------
BASE_DIR = os.path.dirname(__file__)
JSON_PATH = os.path.join(BASE_DIR, "doc_index_english.json")

# ---------------- LOAD INDEX ----------------
@st.cache_data
def load_docs():
    if not os.path.exists(JSON_PATH):
        return []

    with open(JSON_PATH, "r", encoding="utf-8") as f:
        return json.load(f)

docs = load_docs()

# ---------------- TRANSLATE ONLY CONTENT ----------------
def has_chinese(text):
    return any("\u4e00" <= char <= "\u9fff" for char in text)

@st.cache_data(show_spinner=False)
def translate_to_english(text):
    if not text:
        return ""

    if not has_chinese(text):
        return text

    chunks = [text[i:i + 3000] for i in range(0, len(text), 3000)]

    translated_chunks = []

    for chunk in chunks:
        try:
            translated = GoogleTranslator(
                source="auto",
                target="en"
            ).translate(chunk)

            translated_chunks.append(translated if translated else chunk)

        except Exception:
            translated_chunks.append(chunk)

    return "\n\n".join(translated_chunks)

# ---------------- SEARCH ----------------
def search(query):
    if not query:
        return docs
    return [d for d in docs if query.lower() in d["title"].lower()]

# ---------------- SIDEBAR ----------------
st.sidebar.title("🚀 AkashX Documentation")

query = st.sidebar.text_input("Search docs")

filtered = search(query)

if not filtered:
    st.warning("No documents found or doc_index.json missing.")
    st.stop()

titles = [d["title"] for d in filtered]

selected = st.sidebar.radio("Pages", titles)

# ---------------- GET DOC ----------------
doc = next((d for d in filtered if d["title"] == selected), None)

# ---------------- MAIN UI ----------------
st.markdown(
    "<h1 style='text-align:center;'>AkashX Docs</h1>",
    unsafe_allow_html=True
)

st.markdown("---")

if doc:
    st.markdown(f"## {doc['title']}")

    with st.spinner("Converting document to English..."):
        english_content = translate_to_english(doc["content"])

    st.markdown(english_content, unsafe_allow_html=True)

else:
    st.write("Select a document")
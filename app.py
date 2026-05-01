
import streamlit as st
import json
import os
from collections import defaultdict

st.set_page_config(
    page_title="AkashX Docs",
    layout="wide",
    initial_sidebar_state="expanded"
)

# ---------- LOAD INDEX ----------
@st.cache_data
def load_docs():
    if not os.path.exists("doc_index.json"):
        return []
    with open("doc_index.json", "r", encoding="utf-8") as f:
        return json.load(f)

docs = load_docs()

# ---------- SEARCH ----------
def search(query, data):
    if not query:
        return data
    return [
        d for d in data
        if query.lower() in d.get("title", "").lower()
    ]

# ---------- SIDEBAR ----------
st.sidebar.title("🚀 AkashX Documentation")

query = st.sidebar.text_input("Search docs")

filtered = search(query, docs)

selected = None

if filtered:
    grouped = defaultdict(list)

    for d in filtered:
        grouped[d.get("category", "Other")].append(d)

    for cat, items in grouped.items():
        st.sidebar.subheader(cat.capitalize())

        titles = [i.get("title", "Untitled") for i in items]

        choice = st.sidebar.radio(
            label=cat,
            options=titles,
            key=cat
        )

        if choice:
            selected = choice
else:
    st.sidebar.warning("No documents found")

# ---------- MAIN ----------
st.markdown(
    "<h1 style='text-align:center;'>AkashX Docs</h1>",
    unsafe_allow_html=True
)

if not docs:
    st.error("❌ doc_index.json not found or empty")

elif not filtered:
    st.info("No matching results")

else:
    doc = next(
        (d for d in filtered if d.get("title") == selected),
        None
    )

    if doc:
        st.markdown("---")
        st.markdown(f"## {doc.get('title', 'Untitled')}")

        content = doc.get("content", "")

        if content.strip():
            st.markdown(content, unsafe_allow_html=True)
        else:
            st.warning("Empty document")
    else:
        st.info("👈 Select a document from the sidebar")
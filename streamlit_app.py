import streamlit as st
from pathlib import Path

st.set_page_config(layout="wide", page_title="Manifest Industries Dashboard")

html_path = Path(__file__).with_name("dashboard.html")
if html_path.exists():
    st.components.v1.html(html_path.read_text(encoding="utf-8"), height=1400, scrolling=True)
else:
    st.error("dashboard.html is missing")

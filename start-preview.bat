@echo off
REM Mo preview portfolio tai http://localhost:5173 — de cua so nay chay, Ctrl+C de tat
cd /d "%~dp0"
start "" "http://localhost:5173"
python -m http.server 5173

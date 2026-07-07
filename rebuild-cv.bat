@echo off
REM In lai cv.pdf (EN) va cv-vi.pdf (VI) tu trang web — CAN start-preview.bat dang chay truoc!
cd /d "%~dp0"
set CHROME="C:\Program Files\Google\Chrome\Application\chrome.exe"

echo Dang in cv.pdf (EN)...
%CHROME% --headless=new --disable-gpu --no-first-run --no-pdf-header-footer --user-data-dir="%TEMP%\cv-rebuild-en" --print-to-pdf="%~dp0cv.pdf" --virtual-time-budget=12000 "http://localhost:5173/?print=1"

echo Dang in cv-vi.pdf (VI)...
%CHROME% --headless=new --disable-gpu --no-first-run --no-pdf-header-footer --user-data-dir="%TEMP%\cv-rebuild-vi" --print-to-pdf="%~dp0cv-vi.pdf" --virtual-time-budget=12000 "http://localhost:5173/?print=1&lang=vi"

echo.
echo Xong! cv.pdf va cv-vi.pdf da duoc in lai (file tren Google Drive co the hien cham vai giay).
echo Nho commit + push ca 2 file PDF de nut Download CV tren web khop noi dung moi.
pause

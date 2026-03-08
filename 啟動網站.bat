@echo off
chcp 65001 >nul
title 作品集網站 - Dev Server
echo.
echo  =============================================
echo    James Hsieh Portfolio - 啟動中...
echo  =============================================
echo.
echo  網址：http://localhost:3000
echo  關閉請按 Ctrl+C 或直接關掉這個視窗
echo.
cd /d "d:\filefinder\Knowledge_Base\筆記\雜\作品集\portfolio"
timeout /t 3 /nobreak >nul & start "" "http://localhost:3000"
call npm run dev
pause

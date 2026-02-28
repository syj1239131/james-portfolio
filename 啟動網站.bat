@echo off
title 作品集網站 - Dev Server
echo.
echo  =============================================
echo    James Hsieh Portfolio - 啟動中...
echo  =============================================
echo.
echo  網址：http://localhost:3000
echo  關閉請直接關掉這個視窗
echo.
cd /d "d:\filefinder\Knowledge_Base\筆記\雜\作品集\portfolio"
start "" "http://localhost:3000"
npm run dev
pause

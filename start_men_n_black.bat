@echo off
title MEN N BLACK - Haute Joaillerie Server Launcher
color 06
cls
echo ===================================================================
echo             MEN N BLACK - HAUTE JOAILLERIE POUR HOMME
echo ===================================================================
echo.
echo [*] Checking SQL Database...
if not exist "men_n_black.db" (
    echo [!] Initializing SQL Database from database.sql...
    python init_db.py
) else (
    echo [+] SQL Database verified: men_n_black.db
)

echo.
echo [*] Launching Python FastAPI Server with SQLite on Port 8000...
start "MEN N BLACK Server" cmd /k "title MEN N BLACK Server && cd /d "%~dp0" && python server.py"

echo.
echo [*] Waiting 2 seconds for server to spin up...
powershell -Command "Start-Sleep -Seconds 2"

echo [*] Opening MEN N BLACK in your default browser...
start http://localhost:8000/

echo.
echo ===================================================================
echo  MEN N BLACK Luxury Experience is now live!
echo  URL: http://localhost:8000/
echo  API Documentation: http://localhost:8000/docs
echo  Database: men_n_black.db (SQLite SQL Relational Database)
echo ===================================================================
echo Keep this window open or minimize it.
pause

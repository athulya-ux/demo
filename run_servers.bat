@echo off
title E-Commerce Website Server Launcher
echo ===================================================
echo   Starting E-Commerce Website Servers...
echo ===================================================
echo.

:: Free up ports 8000 and 8080 from any previously running instances
echo Cleaning up any old server instances...
powershell -Command "Get-Process python, php -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue" 2>nul
powershell -Command "Start-Sleep -Seconds 1"

:: 1. Start Python Backend Server on PORT 8000 (Required by app.js & php API calls)
echo Launching Python Backend API Server on Port 8000...
start "Backend API Server (Port 8000)" cmd /k "title Backend API (Port 8000) && cd /d "%~dp0backend" && python -m uvicorn main:app --reload --port 8000"

:: 2. Start PHP Frontend Server on PORT 8080
echo Launching PHP Frontend Server on Port 8080...
start "PHP Frontend Server (Port 8080)" cmd /k "title PHP Frontend (Port 8080) && cd /d "%~dp0frontend" && C:\xampp\php\php.exe -S localhost:8080"

:: 3. Wait 3 seconds for servers to initialize, then launch default browser
powershell -Command "Start-Sleep -Seconds 3"
echo Opening website in default web browser...
start http://localhost:8080/index.php

echo.
echo ===================================================
echo Both servers are now running continuously!
echo - Backend API:  http://127.0.0.1:8000
echo - Frontend Web: http://localhost:8080/index.php
echo Keep both server windows open while using the site.
echo ===================================================

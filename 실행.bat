@echo off
chcp 65001 >nul
cd /d "%~dp0"
set "PATH=%ProgramFiles%\nodejs;%PATH%"
if not exist node_modules call npm.cmd install
call npm.cmd run dev
pause

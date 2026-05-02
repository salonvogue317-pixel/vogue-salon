@echo off
TITLE Smart Git Uploader
CLS

echo ==========================================
echo         PROJECT ID SELECTION
echo ==========================================
echo 1. KinConnect
echo 2. Perfume (SEDEF-ANATOLIA)
echo 3. Enter a custom Repo URL manually
echo.

set /p id_choice="Select a Project ID (1-3): "

:: Assign the URL based on the user's choice
IF "%id_choice%"=="1" set repo_url=https://github.com/your-username/KinConnect
IF "%id_choice%"=="2" set repo_url=https://github.com/dropshipping272705-dotcom/SEDEF-ANATOLIA
IF "%id_choice%"=="3" (
    echo.
    set /p repo_url="Paste your Custom Repo URL: "
)

echo.
echo Target URL set to: %repo_url%
echo.

:: Check if this is a new or existing project
IF EXIST ".git" GOTO UPDATE_EXISTING

:SETUP_NEW
echo ==========================================
echo       SETTING UP NEW REPOSITORY
echo ==========================================
echo.
echo [INFO] No .git folder found. Initializing now...

:: 1. Create React/Next-specific .gitignore
echo Creating optimized .gitignore...
echo node_modules/ > .gitignore
echo .next/ >> .gitignore
echo out/ >> .gitignore
echo build/ >> .gitignore
echo dist/ >> .gitignore
echo .env >> .gitignore
echo .env.local >> .gitignore
echo .DS_Store >> .gitignore
echo *.local >> .gitignore

:: 2. Initialize Git
git init
git add .
git commit -m "Initial commit"
git branch -M main

:: 3. Connect to GitHub
echo Connecting to GitHub...
git remote add origin %repo_url%
git push -u origin main

:: 4. Check for errors
IF %ERRORLEVEL% NEQ 0 (
    echo.
    echo [ERROR] Git push failed! Read the error message above.
    pause
    EXIT /B 1
)

echo.
echo [SUCCESS] Project is LIVE on GitHub!
pause
EXIT

:UPDATE_EXISTING
echo ==========================================
echo         UPDATING EXISTING REPO
echo ==========================================
echo.
git add .
set /p commit_msg="Enter commit message (e.g., 'Fixed UI'): "
if "%commit_msg%"=="" set commit_msg="Update project"

git commit -m "%commit_msg%"
git push origin main

:: Check for errors
IF %ERRORLEVEL% NEQ 0 (
    echo.
    echo [ERROR] Git push failed! Read the error message above.
    pause
    EXIT /B 1
)

echo.
echo [SUCCESS] Changes Uploaded to GitHub!
pause
EXIT
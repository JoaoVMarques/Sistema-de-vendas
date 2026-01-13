$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path

$frontEndPath = Join-Path $scriptPath "front-end"
$backEndPath  = Join-Path $scriptPath "back-end"
# Garantimos aspas no caminho do python caso tenha espaços
$venvPython   = Join-Path $backEndPath ".venv\Scripts\python.exe"

# Front-end (React/Vite)
Write-Host "Iniciando Front-end..." -ForegroundColor Green
Start-Process `
  -NoNewWindow `
  -WorkingDirectory $frontEndPath `
  -FilePath "powershell" `
  -ArgumentList "-NoExit", "-Command npm run dev"

# Dá um tempinho pro front respirar
Start-Sleep -Seconds 2

# Back-end (FastAPI + Uvicorn)
Write-Host "Iniciando Back-end (FastAPI)..." -ForegroundColor Green
Start-Process `
  -NoNewWindow `
  -WorkingDirectory $backEndPath `
  -FilePath "powershell"
  -ArgumentList "-NoExit", "-Command `& '$venvPython' -m uvicorn main:app --reload`"
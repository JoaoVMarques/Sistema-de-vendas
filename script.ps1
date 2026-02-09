$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path

$frontEndPath = Join-Path $scriptPath "front-end"
$backEndPath  = Join-Path $scriptPath "back-end"
$venvPython   = Join-Path $backEndPath ".venv\Scripts\python.exe"

# 1. Front-end
Write-Host "Abrindo nova janela para o Front-end..." -ForegroundColor Cyan
Start-Process `
  -WorkingDirectory $frontEndPath `
  -FilePath "cmd.exe" `
  -ArgumentList "/c", "npm run dev"

# Espera um pouco para não abrir tudo junto
Start-Sleep -Seconds 2

# 2. Back-end
Write-Host "Abrindo nova janela para o Back-end..." -ForegroundColor Cyan
Start-Process `
  -WorkingDirectory $backEndPath `
  -FilePath "powershell" `
  -ArgumentList "-NoExit", "-Command `& '$venvPython' -m uvicorn app.main:app --reload"

Write-Host "Servidores iniciados em janelas separadas!" -ForegroundColor Green
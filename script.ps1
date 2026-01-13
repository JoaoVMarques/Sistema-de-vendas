$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path

$frontEndPath = Join-Path $scriptPath "front-end"
$backEndPath  = Join-Path $scriptPath "back-end"
$venvPython   = Join-Path $backEndPath ".venv\Scripts\python.exe"

Write-Host "Iniciando Front-end..." -ForegroundColor Green
Start-Process `
  -NoNewWindow `
  -WorkingDirectory $frontEndPath `
  -FilePath "cmd.exe" `
  -ArgumentList "/c", "npm run dev"

Start-Sleep -Seconds 2

Write-Host "Iniciando Back-end (FastAPI)..." -ForegroundColor Green
Start-Process `
  -NoNewWindow `
  -WorkingDirectory $backEndPath `
  -FilePath $venvPython `
  -ArgumentList "-m", "uvicorn", "main:app", "--reload"

Write-Host "`nFront-end e Back-end iniciados." -ForegroundColor Cyan
Write-Host "Use CTRL+C ou feche os processos manualmente."

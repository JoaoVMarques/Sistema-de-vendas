$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path

$frontEndPath = Join-Path $scriptPath "front-end"
$backEndPath  = Join-Path $scriptPath "back-end"
$venvPath     = Join-Path $backEndPath ".venv"
$venvPython   = Join-Path $venvPath "Scripts\python.exe"

# 1. Front-end
Write-Host "--- FRONT-END ---" -ForegroundColor Cyan
Write-Host "Instalando dependencias (npm install)..."
Start-Process -NoNewWindow -Wait -WorkingDirectory $frontEndPath -FilePath "powershell" -ArgumentList "-Command npm install"

# 2. Back-end (Ambiente Virtual)
Write-Host "`n--- BACK-END ---" -ForegroundColor Cyan
if (-not (Test-Path $venvPath)) {
    Write-Host ".venv nao encontrado. Criando ambiente virtual..."
    Start-Process -NoNewWindow -Wait -WorkingDirectory $backEndPath -FilePath "powershell" -ArgumentList "-Command python -m venv .venv"
} else {
    Write-Host ".venv ja existe. Pulando criacao."
}

# 3. Back-end (Instalação das Libs)
if (Test-Path $venvPython) {
    Write-Host "Atualizando pip..."
    Start-Process -NoNewWindow -Wait `
        -FilePath $venvPython `
        -WorkingDirectory $backEndPath `
        -ArgumentList "-m", "pip", "install", "--upgrade", "pip"

    Write-Host "Instalando dependencias do requirements.txt..."
    Start-Process -NoNewWindow -Wait `
        -FilePath $venvPython `
        -WorkingDirectory $backEndPath `
        -ArgumentList "-m", "pip", "install", "-r", "requirements.txt"
}
else {
    Write-Host "ERRO CRITICO: Python do venv nao encontrado." -ForegroundColor Red
    exit 1
}

Write-Host "`nInstalacao concluida com sucesso!" -ForegroundColor Green
Write-Host "Para iniciar, rode: ./script.ps1"
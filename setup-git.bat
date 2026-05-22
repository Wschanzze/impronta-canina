@echo off
REM Script para inicializar Git y preparar el proyecto para GitHub

echo ========================================
echo Inicializando repositorio Git
echo ========================================

REM Limpiar repositorio anterior si existe
if exist .git (
    echo Limpiando repositorio anterior...
    rmdir /s /q .git
)

REM Inicializar git
echo Inicializando Git...
git init

REM Configurar usuario
echo.
echo Configurando usuario de Git...
set /p email="Ingresa tu email de GitHub: "
set /p name="Ingresa tu nombre: "

git config user.email "%email%"
git config user.name "%name%"

REM Agregar archivos
echo.
echo Agregando archivos...
git add .

REM Crear commit inicial
echo.
echo Creando commit inicial...
git commit -m "Initial commit: Impronta Canina project setup"

REM Mostrar instrucciones
echo.
echo ========================================
echo Repositorio Git inicializado exitosamente
echo ========================================
echo.
echo Proximos pasos:
echo 1. Crea un nuevo repositorio en https://github.com/new
echo 2. Ejecuta estos comandos:
echo.
echo    git remote add origin https://github.com/TU_USUARIO/impronta-canina.git
echo    git branch -M main
echo    git push -u origin main
echo.
echo 3. Luego, ve a https://vercel.com y conecta tu repositorio
echo.
pause

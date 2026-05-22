# 🚀 Quick Start - Impronta Canina

## En 5 Minutos

### 1. Inicializar Git (1 minuto)
```bash
# Ejecuta el script
setup-git.bat

# O manualmente:
git init
git config user.email "tu-email@gmail.com"
git config user.name "Tu Nombre"
git add .
git commit -m "Initial commit"
```

### 2. Crear Repositorio en GitHub (2 minutos)
1. Ve a https://github.com/new
2. Nombre: `impronta-canina`
3. Copia el comando de push que te muestra GitHub

### 3. Hacer Push (1 minuto)
```bash
git remote add origin https://github.com/TU_USUARIO/impronta-canina.git
git branch -M main
git push -u origin main
```

### 4. Desplegar en Vercel (1 minuto)
1. Ve a https://vercel.com
2. Haz clic en "New Project"
3. Selecciona tu repositorio
4. ¡Listo! Vercel hace el resto automáticamente

---

## Desarrollo Local

```bash
# Instalar dependencias (primera vez)
npm install

# Iniciar servidor de desarrollo
npm run dev

# Abre http://localhost:4028 en tu navegador
```

---

## Estructura Rápida

```
src/
├── app/
│   ├── page.tsx              ← Página principal
│   ├── layout.tsx            ← Layout raíz
│   └── home/components/      ← Componentes de la página
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ui/                   ← Componentes reutilizables
└── styles/
    └── tailwind.css
```

---

## Variables de Entorno

Copia `.env.example` a `.env.local`:

```bash
cp .env.example .env.local
```

Luego edita `.env.local` con tus valores reales.

---

## Comandos Útiles

```bash
npm run dev          # Desarrollo
npm run build        # Build
npm run lint         # Verificar código
npm run format       # Formatear código
```

---

## ¿Problemas?

1. **"Cannot find module"**
   ```bash
   npm install
   ```

2. **Puerto 4028 en uso**
   ```bash
   npm run dev -- -p 3000
   ```

3. **Build falla**
   - Verifica `.env.local`
   - Revisa los logs de error
   - Ejecuta `npm run type-check`

---

## Próximos Pasos

✅ Proyecto listo
✅ Documentación completa
✅ Configuración optimizada

Ahora:
1. Sube a GitHub
2. Despliega en Vercel
3. ¡Comparte tu sitio!

---

**¿Necesitas ayuda?** Lee `DEPLOY_INSTRUCTIONS.md` o `PROJECT_STATUS.md`

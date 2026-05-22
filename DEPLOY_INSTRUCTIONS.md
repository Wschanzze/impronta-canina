# Instrucciones de Despliegue - Impronta Canina

## Opción 1: Crear un Repositorio en GitHub (Recomendado)

### Paso 1: Crear un nuevo repositorio en GitHub

1. Ve a https://github.com/new
2. Nombre del repositorio: `impronta-canina`
3. Descripción: "Plataforma de adiestramiento y asesoramiento canino"
4. Selecciona "Public" o "Private" según prefieras
5. NO inicialices con README, .gitignore o licencia
6. Haz clic en "Create repository"

### Paso 2: Inicializar Git localmente

Abre PowerShell o CMD en la carpeta del proyecto y ejecuta:

```bash
# Inicializar repositorio
git init

# Configurar usuario (si no lo has hecho globalmente)
git config user.email "tu-email@example.com"
git config user.name "Tu Nombre"

# Agregar todos los archivos
git add .

# Crear commit inicial
git commit -m "Initial commit: Impronta Canina project setup"

# Agregar el repositorio remoto (reemplaza USERNAME con tu usuario de GitHub)
git remote add origin https://github.com/USERNAME/impronta-canina.git

# Cambiar rama a main (si es necesario)
git branch -M main

# Hacer push
git push -u origin main
```

### Paso 3: Configurar Vercel para despliegue automático

1. Ve a https://vercel.com
2. Haz clic en "New Project"
3. Selecciona tu repositorio `impronta-canina`
4. Vercel detectará automáticamente que es un proyecto Next.js
5. En "Environment Variables", agrega:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - Otras variables según sea necesario (ver `.env.example`)
6. Haz clic en "Deploy"

---

## Opción 2: Desplegar Directamente en Vercel (Sin GitHub)

Si prefieres no usar GitHub, puedes desplegar directamente desde tu máquina:

```bash
# Instalar Vercel CLI globalmente
npm install -g vercel

# Desde la carpeta del proyecto
vercel

# Sigue las instrucciones interactivas
```

---

## Estructura del Proyecto

```
impronta-canina/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout raíz
│   │   ├── page.tsx            # Página principal
│   │   ├── not-found.tsx       # Página 404
│   │   └── home/
│   │       └── components/     # Componentes de la página
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ui/                 # Componentes UI reutilizables
│   └── styles/
│       ├── tailwind.css
│       └── index.css
├── public/                      # Archivos estáticos
├── package.json
├── next.config.mjs
├── tailwind.config.js
├── tsconfig.json
└── vercel.json                  # Configuración de Vercel
```

---

## Variables de Entorno Necesarias

Copia `.env.example` a `.env.local` y completa los valores:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
OPENAI_API_KEY=your-key
GEMINI_API_KEY=your-key
ANTHROPIC_API_KEY=your-key
PERPLEXITY_API_KEY=your-key
NEXT_PUBLIC_GA_MEASUREMENT_ID=your-id
NEXT_PUBLIC_ADSENSE_ID=your-id
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your-key
```

---

## Scripts Disponibles

```bash
npm run dev          # Inicia servidor de desarrollo (puerto 4028)
npm run build        # Construye para producción
npm run start        # Inicia servidor de producción
npm run lint         # Ejecuta ESLint
npm run lint:fix     # Corrige problemas de ESLint
npm run format       # Formatea código con Prettier
npm run type-check   # Verifica tipos TypeScript
```

---

## Troubleshooting

### Error: "fatal: not a git repository"

```bash
git init
```

### Error: "Permission denied" al hacer push

- Verifica que tengas acceso al repositorio en GitHub
- Usa SSH en lugar de HTTPS si tienes problemas:
  ```bash
  git remote set-url origin git@github.com:USERNAME/impronta-canina.git
  ```

### Error: "Branch 'main' set up to track remote 'origin/main'"

Esto es normal. Significa que tu rama local está vinculada al repositorio remoto.

### El build falla en Vercel

1. Verifica que todas las variables de entorno estén configuradas
2. Revisa los logs de build en el dashboard de Vercel
3. Asegúrate de que `package.json` tiene todas las dependencias

---

## Próximos Pasos

Una vez desplegado:

1. **Configurar dominio personalizado** (opcional)
   - En Vercel: Settings → Domains
   - Agrega tu dominio personalizado

2. **Configurar CI/CD**
   - Los cambios en `main` se desplegarán automáticamente

3. **Monitorear rendimiento**
   - Usa Vercel Analytics
   - Configura Google Analytics

4. **Mejorar la página**
   - Agregar más componentes
   - Optimizar imágenes
   - Mejorar SEO

---

## Contacto y Soporte

Para más información sobre Next.js, Vercel o Tailwind CSS, consulta:

- [Next.js Docs](https://nextjs.org/docs)
- [Vercel Docs](https://vercel.com/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

Construido con ❤️ usando Next.js, React y Tailwind CSS

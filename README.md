# Goldie — Golden Retriever Health & Genetics Guide

Una aplicación moderna construida con Next.js 15, React 19 y Tailwind CSS.

## 🚀 Características

- **Next.js 15** - Última versión con rendimiento mejorado
- **React 19** - Última versión de React con capacidades mejoradas
- **Tailwind CSS** - Framework CSS utility-first para desarrollo rápido
- **TypeScript** - Tipado estático para mayor seguridad
- **Responsive Design** - Diseño adaptable a todos los dispositivos

## 🛠️ Instalación Local

1. Clonar el repositorio:
```bash
git clone <tu-repo>
cd pruebas
```

2. Instalar dependencias:
```bash
npm install
```

3. Configurar variables de entorno:
```bash
cp .env.example .env.local
# Editar .env.local con tus valores
```

4. Iniciar servidor de desarrollo:
```bash
npm run dev
```

Abre [http://localhost:4028](http://localhost:4028) en tu navegador.

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── layout.tsx          # Layout raíz
│   ├── page.tsx            # Página principal
│   ├── not-found.tsx       # Página 404
│   └── home/
│       └── components/     # Componentes de la página principal
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ui/                 # Componentes UI reutilizables
└── styles/
    ├── tailwind.css
    └── index.css
```

## 📦 Scripts Disponibles

- `npm run dev` - Inicia servidor de desarrollo (puerto 4028)
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Inicia servidor de producción
- `npm run serve` - Alias para `npm run start`
- `npm run lint` - Ejecuta ESLint
- `npm run lint:fix` - Corrige problemas de ESLint automáticamente
- `npm run format` - Formatea código con Prettier
- `npm run type-check` - Verifica tipos TypeScript

## 🚀 Despliegue en Vercel

### Opción 1: Desde GitHub (Recomendado)

1. Sube tu código a GitHub
2. Ve a [vercel.com](https://vercel.com)
3. Haz clic en "New Project"
4. Selecciona tu repositorio
5. Vercel detectará automáticamente que es un proyecto Next.js
6. Configura las variables de entorno en "Environment Variables"
7. Haz clic en "Deploy"

### Opción 2: Desde CLI

```bash
npm install -g vercel
vercel
```

Sigue las instrucciones interactivas.

### Variables de Entorno en Vercel

En el dashboard de Vercel, añade las siguientes variables:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `OPENAI_API_KEY` (si es necesario)
- `GEMINI_API_KEY` (si es necesario)
- `ANTHROPIC_API_KEY` (si es necesario)
- `PERPLEXITY_API_KEY` (si es necesario)
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` (si es necesario)
- `NEXT_PUBLIC_ADSENSE_ID` (si es necesario)
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` (si es necesario)

## 🎨 Personalización

### Tailwind CSS

Edita `tailwind.config.js` para personalizar colores, fuentes y otros estilos.

### Componentes

Los componentes principales están en `src/components/` y `src/app/home/components/`.

## 📚 Recursos

- [Documentación de Next.js](https://nextjs.org/docs)
- [Documentación de Tailwind CSS](https://tailwindcss.com/docs)
- [Documentación de React](https://react.dev)
- [Documentación de Vercel](https://vercel.com/docs)

## 🔧 Troubleshooting

### Error: "Cannot find module"
```bash
npm install
```

### Error de build en Vercel
1. Verifica que todas las variables de entorno estén configuradas
2. Revisa los logs de build en el dashboard de Vercel
3. Asegúrate de que `package.json` tiene todas las dependencias

### Puerto 4028 en uso
```bash
npm run dev -- -p 3000
```

## 📝 Licencia

Construido con ❤️ en Rocket.new

## 🙏 Agradecimientos

- Powered by Next.js y React
- Styled with Tailwind CSS
- Deployed on Vercel

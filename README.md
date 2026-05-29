# Impronta Canina

Una aplicación web moderna para un centro de educación y servicios caninos en Tandil. Construida con Next.js 15, React 19 y Tailwind CSS.

## 🚀 Características

- **Next.js 15** - Última versión con rendimiento mejorado
- **React 19** - Última versión de React con capacidades mejoradas
- **Tailwind CSS** - Framework CSS utility-first para desarrollo rápido
- **TypeScript** - Tipado estático para mayor seguridad
- **Responsive Design** - Diseño adaptable a todos los dispositivos
- **Framer Motion** - Animaciones fluidas y modernas

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
# Editar .env.local con tus valores si es necesario
```

4. Iniciar servidor de desarrollo:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) o el puerto que te asigne la terminal (por ejemplo 4028) en tu navegador.

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── layout.tsx          # Layout raíz
│   ├── page.tsx            # Página principal
│   ├── not-found.tsx       # Página 404
│   ├── admin/              # Panel de administración
│   ├── cursos/             # Sección de cursos
│   ├── home/               # Componentes de la landing page
│   └── nosotros/           # Sección nosotros
├── components/
│   ├── Header.tsx          # Navegación principal
│   ├── Footer.tsx          # Pie de página
│   └── ui/                 # Componentes UI reutilizables
└── styles/
    ├── tailwind.css        # Variables y utilidades CSS
    └── index.css           # Estilos globales
```

## 📦 Scripts Disponibles

- `npm run dev` - Inicia servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Inicia servidor de producción
- `npm run lint` - Ejecuta ESLint
- `npm run lint:fix` - Corrige problemas de ESLint automáticamente
- `npm run format` - Formatea código con Prettier
- `npm run type-check` - Verifica tipos TypeScript

## 🚀 Despliegue en Vercel

1. Sube tu código a GitHub
2. Ve a [vercel.com](https://vercel.com)
3. Haz clic en "New Project"
4. Selecciona tu repositorio (impronta-canina)
5. Vercel detectará automáticamente que es un proyecto Next.js
6. Configura las variables de entorno en "Environment Variables" si las utilizas.
7. Haz clic en "Deploy"

## 🎨 Personalización y Estilos

- **Tailwind CSS:** Las configuraciones de colores, fuentes y demás estilos base se encuentran en `tailwind.config.js`.
- **CSS Vanilla:** Los estilos globales y animaciones de keyframes adicionales están en `src/styles/index.css`.
- **Componentes UI:** Utiliza la carpeta `src/components/ui/` para encontrar botones, inputs y otros elementos reutilizables.

## 📝 Licencia

Construido para Impronta Canina. Todos los derechos reservados.

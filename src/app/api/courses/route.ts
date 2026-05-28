import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'src/data/courses.json');

// Cache en memoria para entornos serverless (Vercel) donde el sistema de archivos es de solo lectura
let cachedCourses: any = null;

export async function GET() {
  try {
    if (cachedCourses) {
      return NextResponse.json(cachedCourses);
    }
    if (!fs.existsSync(filePath)) {
      return NextResponse.json([]);
    }
    const fileData = fs.readFileSync(filePath, 'utf8');
    const courses = JSON.parse(fileData);
    cachedCourses = courses;
    return NextResponse.json(courses);
  } catch (error) {
    console.error('Error reading courses:', error);
    return NextResponse.json({ error: 'Failed to read courses' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const authHeader = req.headers.get('Authorization');
    if (authHeader !== 'Bearer impronta-session-token') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const newCourses = await req.json();
    if (!Array.isArray(newCourses)) {
      return NextResponse.json({ error: 'Invalid data format' }, { status: 400 });
    }

    // Actualizamos la caché en memoria para que la app refleje los cambios
    cachedCourses = newCourses;

    // Intentamos guardar en el archivo (funciona en desarrollo local)
    // En Vercel fallará porque el sistema de archivos es de solo lectura,
    // así que atrapamos el error para evitar el 500 Internal Server Error.
    try {
      fs.writeFileSync(filePath, JSON.stringify(newCourses, null, 2), 'utf8');
    } catch (fsError) {
      console.warn('No se pudo escribir en el sistema de archivos (esperado en Vercel):', fsError);
    }

    return NextResponse.json({ success: true, courses: newCourses });
  } catch (error) {
    console.error('Error saving courses:', error);
    return NextResponse.json({ error: 'Failed to save courses' }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'src/data/courses.json');

export async function GET() {
  try {
    if (!fs.existsSync(filePath)) {
      return NextResponse.json([]);
    }
    const fileData = fs.readFileSync(filePath, 'utf8');
    const courses = JSON.parse(fileData);
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

    fs.writeFileSync(filePath, JSON.stringify(newCourses, null, 2), 'utf8');
    return NextResponse.json({ success: true, courses: newCourses });
  } catch (error) {
    console.error('Error saving courses:', error);
    return NextResponse.json({ error: 'Failed to save courses' }, { status: 500 });
  }
}

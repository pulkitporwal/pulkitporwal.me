import { NextResponse } from 'next/server';
import { join } from 'path';
import { promises as fs } from 'fs';

export async function GET() {
  const filePath = join(process.cwd(), 'public', 'resume.pdf');

  try {
    const fileBuffer = await fs.readFile(filePath);

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename=Pulkit_Porwal_Resume.pdf',
      },
    });
  } catch (error) {
    return new NextResponse('File not found', { status: 404 });
  }
}

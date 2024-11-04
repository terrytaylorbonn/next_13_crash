
import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import courses from './data.json';

export async function GET(request) {
  return NextResponse.json(courses);
}

export async function POST(request) {
  const { title, description, level, link } = await request.json();
  // console.log(title, description, level, link);
  // return NextResponse.json({messaage: 'Course added successfully'});

  const newCourse1 = {
    id: uuidv4(),
    title,
    description,
    level,
    link,
  }; 

  courses.push(newCourse1);

  return NextResponse.json(courses);
}

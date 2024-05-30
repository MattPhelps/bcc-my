import { NextRequest, NextResponse } from 'next/server';
import { getAllPostsForHome } from "@/lib/api";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const after = searchParams.get('after');
    const allPosts = await getAllPostsForHome(false, after);

    return NextResponse.json(allPosts);
  } catch (error) {
    console.error('Failed to fetch posts:', error);
    return new NextResponse(JSON.stringify({ error: 'Failed to fetch posts' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}

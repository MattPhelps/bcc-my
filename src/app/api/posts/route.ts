import { NextRequest, NextResponse } from 'next/server';
import { getAllPostsForHome } from "@/lib/api";

export async function GET(request: NextRequest) {
    try {
        // const { searchParams } = new URL(request.url);
        const { searchParams } = request.nextUrl;
        console.log('Search params:', searchParams.toString());
        
        const after = searchParams.get('after');
        const allPosts = await getAllPostsForHome( after); // Adjust based on your needs, e.g., preview mode from query params

        return new NextResponse(JSON.stringify(allPosts), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
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

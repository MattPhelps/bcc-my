import { NextRequest, NextResponse } from 'next/server';
import { getPostAndMorePosts } from '@/lib/api';

export async function GET(request: NextRequest, { params }) {
    const { slug } = params;
    try {
        // const data = await getPostAndMorePosts(slug, false, null);
        const data = await getPostAndMorePosts(slug);

        return NextResponse.json(data);
    } catch (error) {
        console.error('Failed to fetch post:', error);
        return new NextResponse(JSON.stringify({ error: 'Failed to fetch post' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}




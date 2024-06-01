export async function fetchPost(slug: string) {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ;
    const res = await fetch(`${baseUrl}/api/posts/${slug}`, {
        cache: 'no-store' // Disable caching for development
    });
    if (!res.ok) {
        throw new Error('Failed to fetch post');
    }
    return res.json();
}

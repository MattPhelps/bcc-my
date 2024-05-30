export async function fetchPosts(cursor: string | null = null) {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ;
    const url = cursor ? `${baseUrl}/api/posts?after=${cursor}` : `${baseUrl}/api/posts`;
    const res = await fetch(url, { next: { revalidate: 10 } }); // Set revalidate to 1 minute
  
    if (!res.ok) {
      throw new Error('Failed to fetch posts');
    }
  
    const data = await res.json();
  
    if (!data.pageInfo) {
      throw new Error('Invalid response structure');
    }
  
    return data;
  }
  
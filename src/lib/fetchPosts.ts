// export async function fetchPosts(cursor: string | null = null) {
//     const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ;
//     const url = cursor ? `${baseUrl}/api/posts?after=${cursor}` : `${baseUrl}/api/posts`;
//     const res = await fetch(url, { next: { revalidate: 10 } }); // Set revalidate to 1 minute
  
//     if (!res.ok) {
//       throw new Error('Failed to fetch posts');
//     } 
  
//     const data = await res.json();
  
//     if (!data.pageInfo) {
//       throw new Error('Invalid response structure');
//     }
  
//     return data;
//   }
  
export async function fetchPosts(cursor: string | null = null) {
  // const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const baseUrl = "https://inkgen.ai/"
  // const url = cursor ? `${baseUrl}/api/posts?after=${cursor}` : `${baseUrl}/api/posts`;
  const url = cursor ? `${baseUrl}/api/posts?after=${cursor}` : `${baseUrl}/api/posts`;

  
  console.log(`Fetching posts from: ${url}`); // Log the URL

  const res = await fetch(url, { next: { revalidate: 10 } });

  if (!res.ok) {
    const errorText = await res.text(); // Capture the error response
    console.error(`Failed to fetch posts: ${res.status} - ${errorText}`);
    throw new Error('Failed to fetch posts');
  }

  const data = await res.json();

  if (!data.pageInfo) {
    console.error('Invalid response structure:', data);
    throw new Error('Invalid response structure');
  }

  return data;
}

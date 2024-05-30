'use client';
import { useState } from 'react';
import { fetchPosts } from '@/lib/fetchPosts';
import MoreStories from './more-stories';

const LoadMoreButton = ({ initialMorePosts, pageInfo: initialPageInfo }) => {
    const [posts, setPosts] = useState(initialMorePosts);
    const [pageInfo, setPageInfo] = useState(initialPageInfo);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const loadMorePosts = async () => {
      if (loading) return;
      setLoading(true);
      setError(null);
  
      try {
        const newPosts = await fetchPosts(pageInfo?.endCursor);
        setPosts((prevPosts) => [...prevPosts, ...newPosts.edges]);
        setPageInfo(newPosts.pageInfo);
      } catch (error) {
        console.error('Error fetching more posts:', error);
        setError('Failed to load more posts. Please try again.');
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <>
        <MoreStories posts={posts} /> 
        {error && <div className="text-red-500 mt-4">{error}</div>}
        {pageInfo && pageInfo?.hasNextPage && ( // Safeguard access to pageInfo
          <div className="flex justify-center mt-6">
            <button
              type="button"
              className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-50 dark:text-gray-600"
              onClick={loadMorePosts}
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Load more posts...'}
            </button>
          </div>
        )}
      </>
    );
  };
  
  export default LoadMoreButton;

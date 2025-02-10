// src/pages/blog/index.js
import usePosts from "../../hooks/usePosts"; // Giả sử bạn có một hook để lấy bài viết

const Blog = () => {
  const { posts, loading } = usePosts();

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Blog</h1>
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

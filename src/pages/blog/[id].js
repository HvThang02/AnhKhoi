// src/pages/blog/[id].js
import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  return <div>Post ID: {id}</div>;
};

export default Post;

import React from "react";
import PostContainer from "../containers/PostContainer";
import { useParams } from "react-router-dom";
const PostPage = () => {
  const params = useParams();
  const { id } = params;
  return <PostContainer postId={parseInt(id, 10)} />;
};

export default PostPage;

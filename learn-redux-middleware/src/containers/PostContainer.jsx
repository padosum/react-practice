import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPost, goToHome } from "../modules/posts";
import Post from "../components/Post";
import { useNavigate } from "react-router-dom";

const PostContainer = ({ postId }) => {
  const { data, loading, error } = useSelector(
    state => state.posts.post[postId]
  ) || {
    data: null,
    loading: false,
    error: null,
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (data) return;
    dispatch(getPost(postId));
  }, [postId, dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;

  return (
    <>
      <button onClick={() => dispatch(goToHome(navigate))}>홈으로 이동</button>
      <Post post={data} />
    </>
  );
};

export default PostContainer;

import axios from "axios";

export const getPosts = async () => {
  const response = await axios.get("/api/posts");
  return response.data;
};

export const getPostById = async id => {
  const response = await axios.get(`/api/posts/${id}`);
  return response.data;
};

import axios from "axios";

export const fetchBlogs = async () => {
  const response = await axios.get("http://localhost:3000/api/blogs");
  return response.data;
};

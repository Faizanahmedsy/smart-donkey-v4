export const fetchBlogs = async () => {
  const response = await fetch("http://localhost:3000/api/blogs");
  const data = await response.json();
  return data;
};

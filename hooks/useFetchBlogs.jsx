import { useQuery } from "@tanstack/react-query";
import React from "react";

//Note: This component is using single responsibility principle

const useFetchBlogs = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3000/api/blogs");
      return response.json();
    },
  });
};

export default useFetchBlogs;

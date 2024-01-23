import { fetchBlogs } from "@/services";
import { useQuery } from "@tanstack/react-query";

//Note: This component is using single responsibility principle

const useFetchBlogs = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: fetchBlogs,
  });
};

export default useFetchBlogs;

"use client";
import { BlogCard, UiWrapper, UnderConstruction } from "@/components/shared";
import { useQuery } from "@tanstack/react-query";

const Blog = () => {
  const {
    status,
    error,
    data: blogsData,
    isFetching,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3000/api/blogs");
      return response.json();
    },
  });

  console.log({ status, error, blogsData, isFetching });

  const showUi = true; //TODO: set to false before pushing to production

  if (!showUi) {
    return <UnderConstruction />;
  }

  return (
    <UiWrapper>
      <h1>Blog</h1>
      {isFetching && <p>Fetching...</p>}
      {status === "error" && <p>Error: {error.message}</p>}
      <div className="grid grid-cols-3 gap-8">
        {status === "success" &&
          blogsData?.blogs?.map((post) => (
            <BlogCard
              key={post.id}
              title={post.title}
              subTitle={post.content}
            />
          ))}
      </div>
    </UiWrapper>
  );
};

export default Blog;

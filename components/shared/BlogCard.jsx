import React from "react";
import { Card } from "../ui/card";

const BlogCard = ({
  title = "This is a Title",
  subTitle = "This is a subtitle Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic numquam saepe at laborum, facilis sit dolor consectetur magni, minus deserunt dignissimos aspernatur labore amet quae eveniet, omnis sequi recusandae repellendus!",
}) => {
  return (
    <Card className="flex flex-col items-center justify-center p-10 rounded-3xl ">
      <h3 className="text-xl font-bold pb-3">{title}</h3>
      <p className="text-sm text-muted-foreground">{subTitle}</p>
    </Card>
  );
};

export default BlogCard;

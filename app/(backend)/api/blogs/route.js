import { getBlogs } from "@/lib/database/apiQueries";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    const blogs = await getBlogs();
    return NextResponse.json({ message: "Success", blogs }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }.err, {
      status: 500,
    });
  }
};

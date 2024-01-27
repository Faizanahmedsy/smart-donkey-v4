"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../shared/InfiniteMovingCards";

export function Testimonial() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased  dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum provident rem doloribus quis eos velit vero natus a cumque maiores.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum provident rem doloribus quis eos velit vero natus a cumque maiores.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum provident rem doloribus quis eos velit vero natus a cumque maiores",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum provident rem doloribus quis eos velit vero natus a cumque maiores.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum provident rem doloribus quis eos velit vero natus a cumque maiores.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];

// = [
//     {
//       quote:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eius a deleniti vero laboriosam facere, quis cumque labore corporis itaque rerum tempore vitae ab reprehenderit esse velit expedita debitis nesciunt non. Totam laboriosam error omnis dolorum odit rerum eveniet. Est.",
//       name: "Sher Khan",
//       title:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eius a deleniti vero laboriosam facere, quis cumque labore corporis itaque rerum tempore vitae ab reprehenderit esse velit expedita debitis nesciunt non. Totam laboriosam error omnis dolorum odit rerum eveniet. Est.",
//     },
//     {
//       quote: "Testimonial 2",
//       name: "Mumtaz Sheikh",
//       title: "lorem ipsum dolor sit amet",
//     },
//     {
//       quote: "Testimonial 3",
//       name: "Naurin Saiyed",
//       title: "lorem ipsum dolor sit amet",
//     },
//   ],

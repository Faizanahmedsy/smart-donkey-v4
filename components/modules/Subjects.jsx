import React from "react";
import TextT2 from "../shared/TextT2";

export default function Subjects() {
  return (
    <div className="px-32 my-4">
      <div className="flex justify-center items-center flex-col">
        <TextT2>Subjects we teach</TextT2>

        <div className="grid md:grid-cols-4 gap-4">
          {[
            {
              title: "Personal Finance",
            },
            {
              title: "Communication and networking",
            },
            {
              title: "Mental health",
            },
            {
              title: "Physical health",
            },
            {
              title: "Critical thinking",
            },
            {
              title: "Productivity",
            },
            {
              title: "Home Science",
            },
            {
              title: "Self Defense",
            },
            {
              title: "First Aid and Emergency Response",
            },
          ].map((subject, index) => (
            <div key={index} className="">
              <div className="h-28 flex justify-center items-center  py-6 px-4 border rounded-xl text-center relative">
                <div className="text-xs absolute top-1 right-1 border py-1 px-2 rounded-xl bg-zinc-900">
                  Coming soon
                </div>
                <h3>{subject.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

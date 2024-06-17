"use client";
import markdownContext from "@/context/markdownContext";
import { useContext } from "react";

function Editor() {
  const [data, setData] = useContext(markdownContext);

  return (
    <textarea
      className="border-r-2 p-4  resize-none h-auto bg-inherit focus:outline-none overflow-y-scroll"
      onChange={(e) => setData(e.target.value)}
      value={data}
      autoFocus
    ></textarea>
  );
}

export default Editor;

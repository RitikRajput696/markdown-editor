"use client";
import markdownContext from "@/context/markdownContext";
import { useContext } from "react";

function Editor() {
  const [data, setData] = useContext(markdownContext);

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center content-center h-10 bg-gray-700  text-gray-400 font-normal border-r-2 border-r-gray-400">
        <span className="ml-4"> EDITOR</span>
      </div>
      <textarea
        className="border-r-2 p-4 h-full bg-inherit focus:outline-none resize-none border-r-white"
        onChange={(e) => setData(e.target.value)}
        value={data}
        autoFocus
      ></textarea>
    </div>
  );
}

export default Editor;

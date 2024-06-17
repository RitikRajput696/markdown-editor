import markdownContext from "@/context/markdownContext";
import { useContext } from "react";

function Editor() {
  const [data, setData] = useContext(markdownContext);

  return (
    <textarea
      className="border-r-2 p-4  resize-none h-screen bg-inherit focus:outline-none overflow-y-scroll"
      onChange={(e) => setData(e.target.value)}
    ></textarea>
  );
}

export default Editor;

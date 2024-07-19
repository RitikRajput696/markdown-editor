import markdownContext from "@/context/markdownContext";
import { useContext } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function Preview() {
  const [markdown] = useContext(markdownContext);
  return (
    <div>
      <div className="flex items-center content-center h-10 bg-gray-700  text-gray-400 font-normal border-r-2 border-r-gray-400">
        <span className="ml-4"> PREVIEW</span>
      </div>
      <div className="p-4 pl-8 flex flex-col gap-6 overflow-y-scroll h-full">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}

export default Preview;

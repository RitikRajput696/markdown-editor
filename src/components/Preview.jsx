import markdownContext from "@/context/markdownContext";
import { useContext } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function Preview() {
  const [markdown] = useContext(markdownContext);

  return (
    <div className="flex flex-col h-full overflow-auto">
      <div className="flex items-center content-center min-h-10 bg-gray-700  text-gray-400 font-normal border-r-2 border-r-gray-400 sticky top-0">
        <span className="ml-4"> PREVIEW</span>
      </div>
      <div className="p-4 pl-8 flex flex-col gap-6 h-full">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}

export default Preview;

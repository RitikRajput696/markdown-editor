import markdownContext from "@/context/markdownContext";
import { useContext } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function Preview() {
  const [markdown] = useContext(markdownContext);
  return (
    <div className="p-4 pl-8 flex flex-col gap-6 overflow-y-scroll ">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </div>
  );
}

export default Preview;

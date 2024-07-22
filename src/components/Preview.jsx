import markdownContext from "@/context/markdownContext";
import { useContext } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function Preview() {
  const [markdown] = useContext(markdownContext);

  const downloadFile = () => {
    const link = document.createElement("a");
    const file = new Blob([markdown], { type: "text/plain" });
    link.href = URL.createObjectURL(file);
    link.download = "Untitled.md";
    link.click();
    URL.revokeObjectURL(link.href);
  };

  return (
    <div className="flex flex-col h-full overflow-auto">
      <div className="flex items-center  justify-between min-h-10 bg-gray-700  text-gray-400 font-normal border-r-2 border-r-gray-400 sticky top-0 pl-4 pr-4">
        <span className="block"> PREVIEW</span>
        <button
          className="bg-orange-600 text-gray-200 p-2"
          onClick={downloadFile}
        >
          Download
        </button>
      </div>
      <div className="p-4 pl-8 flex flex-col gap-6 h-full">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}

export default Preview;

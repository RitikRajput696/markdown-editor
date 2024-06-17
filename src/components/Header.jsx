import React from "react";
import Title from "./Title";

function Header() {
  return (
    <div className="grid grid-cols-2 bg-gray-700  text-gray-400 font-normal sticky top-0">
      <Title
        title="EDITOR"
        className={`border-r-2 p-2 flex items-center justify-start `}
      />
      <Title
        title="PREVIEW"
        className={`p-2 flex justify-between items-center`}
      >
        <button className="px-4 py-2 bg-gray-200 text-black hover:bg-gray-300">
          Download
        </button>
      </Title>
    </div>
  );
}

export default Header;

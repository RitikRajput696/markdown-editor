"use client";
import Editor from "@/components/Editor";
import Preview from "@/components/Preview";
import MainLayout from "@/components/MainLayout";
import markdownContext from "@/context/markdownContext";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState(
    `# Markdown Text Editor\n- write down your content\n- download markdown file`
  );
  return (
    <markdownContext.Provider value={[data, setData]}>
      <MainLayout>
        <Editor />
        <Preview />
      </MainLayout>
    </markdownContext.Provider>
  );
}

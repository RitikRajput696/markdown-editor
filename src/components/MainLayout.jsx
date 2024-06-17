import React from "react";
import Header from "./Header";

function MainLayout({ children }) {
  return (
    <main className="h-screen overflow-hidden relative">
      <Header />
      <div className="grid grid-cols-2  h-full bg-gray-900 text-gray-400">
        {children}
      </div>
    </main>
  );
}

export default MainLayout;

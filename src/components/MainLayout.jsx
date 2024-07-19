import React from "react";

function MainLayout({ children }) {
  return (
    <main className="grid grid-cols-2 overflow-y-scroll h-screen  bg-gray-900 text-gray-400">
      {children}
    </main>
  );
}

export default MainLayout;

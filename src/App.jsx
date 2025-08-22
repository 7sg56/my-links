"use client";

import Title from "./components/Title";



function App() {
  return (
    <div className="relative min-h-screen w-full bg-neutral-950 flex flex-col items-center justify-center antialiased overflow-hidden">
      <div className="relative z-10 max-w-2xl mx-auto p-4">
        <Title />
      </div>
    </div>
  );
}

export default App

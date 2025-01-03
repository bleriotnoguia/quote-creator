import React from "react";
import QuoteEditor from "./components/QuoteEditor";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="w-full px-4 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
            Quote Creator
          </h1>
          <div className="text-xs sm:text-sm text-gray-500 text-center sm:text-right">
            By{" "}
            <a
              href="https://www.bleriotnoguia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Blériot Noguia 🙂
            </a>
            ,{" "}
            <a
              href="https://www.unsplash.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Unsplash 💙
            </a>{" "}
            and{" "}
            <a
              href="https://bolt.new/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Bolt 🔥
            </a>
          </div>
        </div>
      </header>
      <main>
        <QuoteEditor />
      </main>
    </div>
  );
}

export default App;

import React from 'react';
import QuoteEditor from './components/QuoteEditor';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Quote Creator</h1>
        </div>
      </header>
      <main>
        <QuoteEditor />
      </main>
    </div>
  );
}

export default App;
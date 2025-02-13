import { useState } from "react";
import { Quote } from "../types";
import TextControls from "./TextControls";
import FontControls from "./FontControls";
import ActionButtons from "./ActionButtons";
import QuotePreview from "./QuotePreview";
import ImageSearch from "./ImageSearch";
import ImageUploader from "./ImageUploader";
import SizeControls from "./SizeControls";
import ThemeToggle from "./ThemeToggle";
import { downloadQuoteImage } from "../utils/download";

const initialQuote: Quote = {
  text: "Enter your inspiring quote here...",
  fontSize: 32,
  fontFamily: "Inter",
  textColor: "#ffffff",
  textAlign: "center",
  backgroundColor: "#000000",
  textOpacity: 1,
  dimensions: {
    width: 1080,
    height: 1080,
  },
};

export default function QuoteEditor() {
  const [quote, setQuote] = useState<Quote>(initialQuote);
  const [showImageSearch, setShowImageSearch] = useState(false);

  const handleQuoteUpdate = (updates: Partial<Quote>) => {
    setQuote((prev) => ({ ...prev, ...updates }));
  };

  const handleImageSelect = (imageUrl: string) => {
    handleQuoteUpdate({ backgroundImage: imageUrl });
  };

  const handleSizeChange = (width: number, height: number) => {
    handleQuoteUpdate({ dimensions: { width, height } });
  };

  const handleDownload = async () => {
    try {
      await downloadQuoteImage("quote-preview");
    } catch (error) {
      console.error("Failed to download image:", error);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        const blob = await downloadQuoteImage("quote-preview");
        await navigator.share({
          files: [new File([blob], "quote.png", { type: "image/png" })],
          title: "Share Quote",
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Quote Creator
          </h1>
          <ThemeToggle />
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Editor Panel */}
          <div className="w-full lg:w-1/3 space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 space-y-8">
              <TextControls quote={quote} onUpdate={handleQuoteUpdate} />
              <FontControls quote={quote} onUpdate={handleQuoteUpdate} />
              <SizeControls
                width={quote.dimensions.width}
                height={quote.dimensions.height}
                onSizeChange={handleSizeChange}
              />
              <ImageUploader
                onImageSelect={handleImageSelect}
                onShowImageSearch={() => setShowImageSearch(true)}
              />
              <ActionButtons
                onDownload={handleDownload}
                onShare={handleShare}
              />
            </div>
          </div>

          {/* Preview Panel */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <QuotePreview quote={quote} />
            </div>
            <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-200 text-center sm:text-right italic mt-2">
              By{" "}
              <a
                href="https://www.bleriotnoguia.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Blériot Noguia 🙂
              </a>
              , powered by{" "}
              <a
                href="https://bolt.new/?rid=hvxt93"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Bolt 🔥
              </a>
            </div>
          </div>
        </div>
      </div>

      {showImageSearch && (
        <ImageSearch
          onSelect={handleImageSelect}
          onClose={() => setShowImageSearch(false)}
        />
      )}
    </div>
  );
}
